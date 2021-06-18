import DbContext from '../context/context';
import User from '../entity/user';

class UserRepository {
  private connection: Promise<IDBDatabase>;

  constructor(dbName: string, private storeName: string) {
    this.connection = new DbContext().instance.connect(dbName, storeName);
  }

  async add(item: User) : Promise<User> {
    const db = await this.connection;
    const request = db.transaction([this.storeName], 'readwrite')
      .objectStore(this.storeName)
      .add(item);

    return UserRepository.requestHandler(request);
  }

  async remove(id: string) : Promise<User> {
    const db = await this.connection;
    const request = db.transaction([this.storeName], 'readwrite')
      .objectStore(this.storeName)
      .delete(id);

    return UserRepository.requestHandler(request);
  }

  private static requestHandler(request: IDBRequest) : Promise<User> {
    return new Promise<User>((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.result);
    });
  }

  async retrieve() : Promise<User[]> {
    const db = await this.connection;
    const store = db.transaction([this.storeName], 'readonly')
      .objectStore(this.storeName);

    return new Promise<User[]>((resolve, reject) => {
      const result: any[] = [];
      store.openCursor().onsuccess = (event) => {
        const cursor = (event.target as any).result;
        if (cursor) {
          result.push(cursor.value);
          cursor.continue();
        } else {
          return resolve(result);
        }
      };
    });
  }
}

export default UserRepository;

import DbContext from '../context/context';
import Car from '../entity/car';

class CarRepository {
  private connection: Promise<IDBDatabase>;

  constructor(dbName: string, private storeName: string) {
    this.connection = new DbContext().instance.connect(dbName, storeName);
  }

  async add(item: Car) : Promise<Car> {
    const db = await this.connection;
    const request = db.transaction([this.storeName], 'readwrite')
      .objectStore(this.storeName)
      .add(item);

    return CarRepository.requestHandler(request);
  }

  async remove(id: string) : Promise<Car> {
    const db = await this.connection;
    const request = db.transaction([this.storeName], 'readwrite')
      .objectStore(this.storeName)
      .delete(id);

    return CarRepository.requestHandler(request);
  }

  private static requestHandler(request: IDBRequest) : Promise<Car> {
    return new Promise<Car>((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.result);
    });
  }

  async retrieve() : Promise<Car[]> {
    const db = await this.connection;
    const store = db.transaction([this.storeName], 'readonly')
      .objectStore(this.storeName);

    return new Promise<Car[]>((resolve, reject) => {
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

export default CarRepository;

class DbContext {
  private dbAccess: DbContext | undefined;

  private db: IDBDatabase | undefined;

  async connect(dbName: string, storeName: string) {
    if (this.db) {
      return this.db;
    }

    const request = indexedDB.open(dbName, 1);

    return new Promise<IDBDatabase>((resolve, reject) => {
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      request.onupgradeneeded = () => {
        this.db = request.result;
        request.result.createObjectStore(storeName, { keyPath: 'id' });
        resolve(this.db);
      };
    });
  }

  get instance() : DbContext {
    if (!this.dbAccess) {
      this.dbAccess = new DbContext();
    }
    return this.dbAccess;
  }
}

export default DbContext;

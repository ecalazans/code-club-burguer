class DatabaseTest {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = console.log('Conexão inciada sequelize');
    // return console.log(typeof this.connection);
    // return this;
  }

  mongo() {
    this.mongoConnection = console.log('Conexão inciada Mongo');
    // return this;
  }
}

new DatabaseTest();

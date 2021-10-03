import { Database, MySQLConnector } from "./../deps.ts";

export interface DbConfig {
  host: string,
  port?: number,
  database: string,
  username: string,
  password: string,
}

export const connect = (db_config: DbConfig) => {
  const connection = new MySQLConnector(db_config);
  return new Database(connection);
};

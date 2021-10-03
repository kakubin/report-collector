import { DbConfig, connect } from "./db.ts";
import { Models } from "./models.ts";

const db_config: DbConfig = {
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "password",
  database: "lab",
};

const db = connect(db_config);

db.link(Models);
db.sync({ drop: true });

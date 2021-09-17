import {
  DataTypes,
  Model,
  Relationships,
} from "./deps.ts";

export class Author extends Model {
  static table = "authors";

  static fields = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.string(20),
  }
}

export class Report extends Model {
  static table = "reports";

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    abstract: DataTypes.TEXT,
  }

  static author() {
    return this.hasOne(Author)
  }
}

// Report BelongsTo Author
Relationships.belongsTo(Report, Author);

export const Models = [Author, Report];

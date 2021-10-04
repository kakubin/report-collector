import {
  DataTypes,
  Model,
  Relationships,
} from "./../deps.ts";

export class Author extends Model {
  static table = "authors";

  static fields = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.string(20),
    nrid: DataTypes.INTEGER,
    url: DataTypes.STRING,
    attribution: DataTypes.STRING,
    field: DataTypes.STRING,
    latest_update: DataTypes.STRING,
  }

  static report() {
    return this.hasMany(Report)
  }
}

export class Report extends Model {
  static table = "reports";

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    naid: DataTypes.INTEGER,
    url: DataTypes.STRING,
    type: DataTypes.STRING,
    title_ja: DataTypes.STRING,
    title_en: DataTypes.STRING,
    abstract: DataTypes.TEXT,
    publisher: DataTypes.TEXT,
  }

  static author() {
    return this.hasOne(Author)
  }
}

// Report BelongsTo Author
Relationships.belongsTo(Report, Author);

export const Models = [Author, Report];

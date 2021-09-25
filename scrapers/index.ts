import { AuthorName, getAuthors } from "./domain/author.ts";

const name: AuthorName = { lastName: "田中", firstName: "健一" }
getAuthors(name)

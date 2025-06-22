import { Injectable } from "@angular/core";
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";
import { Capacitor } from "@capacitor/core";

@Injectable({
  providedIn: "root",
})
export class CubeSQLiteService {
  private sqlite: SQLiteConnection;
  private dbConn: SQLiteDBConnection | null = null;
  private dbName = "cubesDB";

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initDB(): Promise<void> {
    const platform = Capacitor.getPlatform();

    const isConn = (await this.sqlite.isConnection(this.dbName, false)).result;

    if (isConn) {
      this.dbConn = await this.sqlite.retrieveConnection(this.dbName, false);
    } else {
      this.dbConn = await this.sqlite.createConnection(
        this.dbName,
        false,
        "no-encryption",
        1,
        false
      );
    }

    await this.dbConn.open();
    await this.createTables();
  }

  async closeConnection(): Promise<void> {
    const isConn = (await this.sqlite.isConnection(this.dbName, false)).result;
    if (isConn) {
      await this.dbConn?.close();
      await this.sqlite.closeConnection(this.dbName, false);
      this.dbConn = null;
    }
  }

  private async createTables(): Promise<void> {
    if (!this.dbConn) return;

    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        password TEXT NOT NULL,
        cuboFavorito TEXT,
        fechaNacimiento TEXT
      );
    `;

    await this.dbConn.execute(createUsersTable);
  }

  async registerUser(user: {
    username: string;
    password: string;
    nombre: string;
    apellido: string;
    cuboFavorito: string;
    fechaNacimiento: string;
  }): Promise<boolean> {
    if (!this.dbConn) return false;

    const query = `
      INSERT INTO users (username, password, nombre, apellido, cuboFavorito, fechaNacimiento)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    try {
      await this.dbConn.run(query, [
        user.username,
        user.password,
        user.nombre,
        user.apellido,
        user.cuboFavorito,
        user.fechaNacimiento,
      ]);
      return true;
    } catch (err) {
      console.error("Error registrando usuario", err);
      return false;
    }
  }

  async validateLogin(username: string, password: string): Promise<boolean> {
    if (!this.dbConn) return false;

    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    const result = await this.dbConn.query(query, [username, password]);
    if (Array.isArray(result.values) && result.values.length > 0) {
      return true;
    }
    return false;
  }

  async getUserByUsername(username: string): Promise<{
    nombre: string;
    apellido: string;
    cuboFavorito: string;
    fechaNacimiento: string;
  } | null> {
    if (!this.dbConn) return null;

    const query = `SELECT nombre, apellido, cuboFavorito, fechaNacimiento FROM users WHERE username = ?`;
    const result = await this.dbConn.query(query, [username]);

    if (Array.isArray(result.values) && result.values.length > 0) {
      return result.values[0];
    }
    return null;
  }

  async updateUser(
    username: string,
    data: {
      nombre: string;
      apellido: string;
      cuboFavorito: string;
      fechaNacimiento: string;
    }
  ): Promise<boolean> {
    if (!this.dbConn) return false;

    const query = `
    UPDATE users
    SET nombre = ?, apellido = ?, cuboFavorito = ?, fechaNacimiento = ?
    WHERE username = ?
  `;

    try {
      await this.dbConn.run(query, [
        data.nombre,
        data.apellido,
        data.cuboFavorito,
        data.fechaNacimiento,
        username,
      ]);
      return true;
    } catch (err) {
      console.error("Error actualizando usuario:", err);
      return false;
    }
  }
}

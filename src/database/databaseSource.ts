import { DataSource } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '3306', 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [join(__dirname, '../**/*.entity.ts')],
  migrations: [join(__dirname, '../migrations/**/*.ts')],
});

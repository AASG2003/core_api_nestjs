import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: parseInt(process.env.DATABASE_HOST, 10) || 5433,
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  name: process.env.DATABASE_NAME,
}));

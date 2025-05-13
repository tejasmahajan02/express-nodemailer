import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  node: {
    port: process.env.NODE_PORT || 8080,
    origin: process.env.NODE_ORIGIN,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM,
  },
};

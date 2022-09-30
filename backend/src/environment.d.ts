declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      PORT: number;
      NODE_ENV: string;
      SALT: number;
      SECRET_JWT: string;
      JWT_EXPIRE: string;
      COOKIE_EXPIRE: number;
    }
  }
}
export {};

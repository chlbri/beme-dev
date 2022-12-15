declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MEDIA_STACK_APIKEY?: string;
      MEDIA_STACK_URL?: string;
    }
  }
}

export {};

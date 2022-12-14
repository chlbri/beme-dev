/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MEDIA_STACK_APIKEY: string;
      MEDIA_STACK_URL: string;
    }
  }
}

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

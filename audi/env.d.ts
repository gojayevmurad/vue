/// <reference types="vite/client" />

declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

declare module '*.png' {
    const value: any;
    export default value;
  }
  
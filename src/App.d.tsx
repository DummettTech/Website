declare module "*.svg" {
  const value: any;
  export = value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.json" {
  const value: any;
  export default value;
}

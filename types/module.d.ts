declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}

declare module "virtual:*" {
  const result: any;
  export default result;
}

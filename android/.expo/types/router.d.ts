/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/allTruck` | `/apply` | `/details` | `/tabs` | `/tabs/About` | `/tabs/Contact` | `/tabs/Home` | `/translations/translations`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}

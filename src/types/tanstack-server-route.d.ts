// Local re-augmentation to ensure the `server` option on file routes is typed.
// Upstream `@tanstack/start-client-core` declares this augmentation in
// `serverRoute.d.ts`, but it is exposed only via `export type *` from the
// package entry, which TS does not always evaluate for module augmentation.
// Importing the augmentation file via its package types here guarantees the
// `declare module '@tanstack/router-core'` block runs once for the project.

import type { AnyRequestMiddleware } from "@tanstack/react-start";
import type { AnyContext, AnyRoute, Constrain } from "@tanstack/router-core";

declare module "@tanstack/router-core" {
  interface FilebaseRouteOptionsInterface<
    TRegister,
    TParentRoute extends AnyRoute = AnyRoute,
    TId extends string = string,
    TPath extends string = string,
    TSearchValidator = undefined,
    TParams extends Record<string, unknown> = Record<string, unknown>,
    TLoaderDeps extends Record<string, unknown> = Record<string, unknown>,
    TLoaderFn = undefined,
    TRouterContext extends Record<string, unknown> = Record<string, unknown>,
    TRouteContextFn = AnyContext,
    TBeforeLoadFn = AnyContext,
    TRemountDepsFn = AnyContext,
    TSSR = unknown,
    TServerMiddlewares = unknown,
    THandlers = undefined,
  > {
    server?: {
      middleware?: Constrain<TServerMiddlewares, ReadonlyArray<AnyRequestMiddleware>>;
      handlers?: unknown;
    };
  }
}

export {};

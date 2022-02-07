import { UIRouter } from '@uirouter/core';
import { Injector, Injectable } from '@angular/core';

/** UIRouter Config Function  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  // Configure the initial state
  // If the browser URL doesn't matches any state when the router starts,
  // go to the `hello` state by default
  router.urlService.rules.initial({ state: 'home' });
}

import { UIRouter } from '@uirouter/core';
import { Injector, Injectable } from '@angular/core';

/** UIRouter Config Function  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  router.urlService.rules.initial({ state: 'home' });
}

export function uiRouterConfigCh(router: UIRouter, injector: Injector) {
  router.urlService.rules.initial({ state: 'home' });
}

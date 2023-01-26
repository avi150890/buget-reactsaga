import * as entriesSaga from './entriesSagas';

export function initSagas (sagaMiddleware) {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
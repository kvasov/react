import client from 'helpers/contentful';
import { assign, pick } from 'lodash/object';

function APICall({ data }) {
  const count = Object.keys(data)
    .map(p => data[p])
    .filter(v => v).length;

  return new Promise((resolve, reject) => {
    const c = client
      .getEntries(data)
      .then(response => {
        if (count == 2) {
          resolve(response.items[0].fields);
        } else {
          resolve(response.items);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => assign({}, action, data, { [API_CALL]: undefined });

export default store => next => action => {
  if (!action[API_CALL]) return next(action);

  const [requestType, successType, failureType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const promise = APICall(pick(action[API_CALL], ['data']));

  promise.then(
    response => next(nextAction(action, { response, type: successType })),
    error => next(nextAction(action, { error, type: failureType }))
  );

  return promise;
};

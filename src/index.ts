import { Router } from './router';
import { elderFuthark } from './elderFuthark';
import { parseUrl } from 'query-string';
import { IRune } from './interfaces/IRune';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

const jsonHandler = (json: any) => {
  const body = JSON.stringify(json);
  return new Response(body, {
    headers: { 'content-type': 'application/json' },
  });
};

async function handleRequest(request: Request) {
  const r = new Router();
  r.get(/\/elderfuthark/, elderFutharkHandler);
  return r.route(request);
}

// decorators pls
const elderFutharkHandler = (request: Request) => {
  const { query } = parseUrl(request.url);
  let retVal: IRune[] = JSON.parse(JSON.stringify(elderFuthark));

  if (query.aett) {
    retVal = elderFuthark.filter(rune => rune.aett === query.aett);
  }
  if (query.name) {
    retVal = retVal.filter(rune => rune.name === query.name);
  }

  return jsonHandler(retVal);
};

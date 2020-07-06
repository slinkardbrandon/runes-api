import { Router } from './router';
import { ElderFuthark } from './classes/ElderFuthark';
import { IRune } from './interfaces/IRune';
import { parse } from 'url';
import { Rune } from './classes/Rune';

const elderFuthark = new ElderFuthark();

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
  const systemHandlerMap: {
    [key: string]: (request: Request) => Response | Rune[];
  } = {
    elderfuthark: elderFutharkHandler,
    // TODO: Add handler support for multiple runic systems
    // youngerfuthark: youngerFutharkHandler,
  };

  Object.keys(systemHandlerMap).forEach(key => {
    r.get(new RegExp(`\/${key}(.+)?`), systemHandlerMap[key]);
  });
  return r.route(request);
}

// decorators pls
const elderFutharkHandler = (request: Request) => {
  const { href: url, pathname, query } = parse(request.url, true);

  switch (pathname) {
    case '/elderfuthark/find':
      return jsonHandler(elderFutharkFind(query));
    case '/elderfuthark/cast':
      return jsonHandler(elderFutharkCast(query));
    default:
      throw new Error('Endpoint not supported!');
  }
};

const elderFutharkCast = (query: { [key: string]: any }) => {
  return elderFuthark.pull(query.count);
};

const elderFutharkFind = (query: { [key: string]: any }) => {
  let retVal: IRune[] = JSON.parse(JSON.stringify(elderFuthark));

  if (query.aett) {
    retVal = elderFuthark.runes.filter(rune => rune.aett === query.aett);
  }
  if (query.name) {
    retVal = retVal.filter(rune => rune.name === query.name);
  }

  return retVal;
};

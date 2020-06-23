/**
 * Helper functions that when passed a request will return a
 * boolean indicating if the request uses that HTTP method,
 * header, host or referrer.
 */
const Method = (method: string) => (req: any) =>
  req.method.toLowerCase() === method.toLowerCase();
const Connect = Method('connect');
const Delete = Method('delete');
const Get = Method('get');
const Head = Method('head');
const Options = Method('options');
const Patch = Method('patch');
const Post = Method('post');
const Put = Method('put');
const Trace = Method('trace');

const Header = (header: string, val: string) => (req: Request) =>
  req.headers.get(header) === val;
const Host = (host: string) => Header('host', host.toLowerCase());
const Referrer = (host: string) => Header('referrer', host.toLowerCase());

const Path = (regExp: UrlMatcher) => (req: Request) => {
  const url = new URL(req.url);
  const path = url.pathname;
  const match = path.match(regExp) || [];
  return match[0] === path;
};

/**
 * The Router handles determines which handler is matched given the
 * conditions present for each request.
 */
type IRouteCondition =
  | [(req: Request) => boolean, (req: Request) => boolean]
  | Function;

type IRouteHandler = any;
type UrlMatcher = string | RegExp;

interface IRouterRoute {
  conditions: IRouteCondition;
  handler: IRouteHandler;
}

export class Router {
  constructor(private routes: IRouterRoute[] = []) {}

  handle(conditions: IRouteCondition, handler: IRouteHandler) {
    this.routes.push({
      conditions,
      handler,
    });
    return this;
  }

  connect(url: UrlMatcher, handler: IRouteHandler) {
    return this.handle([Connect, Path(url)], handler);
  }

  delete(url: UrlMatcher, handler: IRouteHandler) {
    return this.handle([Delete, Path(url)], handler);
  }

  get(url: UrlMatcher, handler: IRouteHandler) {
    return this.handle([Get, Path(url)], handler);
  }

  head(url: UrlMatcher, handler: IRouteHandler) {
    return this.handle([Head, Path(url)], handler);
  }

  options(url: UrlMatcher, handler: IRouteHandler) {
    return this.handle([Options, Path(url)], handler);
  }

  patch(url: UrlMatcher, handler: IRouteHandler) {
    return this.handle([Patch, Path(url)], handler);
  }

  post(url: UrlMatcher, handler: IRouteHandler) {
    return this.handle([Post, Path(url)], handler);
  }

  put(url: UrlMatcher, handler: IRouteHandler) {
    return this.handle([Put, Path(url)], handler);
  }

  trace(url: UrlMatcher, handler: IRouteHandler) {
    return this.handle([Trace, Path(url)], handler);
  }

  all(handler: IRouteHandler) {
    return this.handle([] as any, handler);
  }

  route(req: Request) {
    const route = this.resolve(req);

    if (route) {
      return route.handler(req);
    }

    return new Response('resource not found', {
      status: 404,
      statusText: 'not found',
      headers: {
        'content-type': 'text/plain',
      },
    });
  }

  /**
   * resolve returns the matching route for a request that returns
   * true for all conditions (if any).
   */
  resolve(req: Request) {
    return this.routes.find(r => {
      if (!r.conditions || (Array.isArray(r) && !r.conditions.length)) {
        return true;
      }

      if (typeof r.conditions === 'function') {
        return r.conditions(req);
      }

      return r.conditions.every(c => c(req));
    });
  }
}

import { handleRequest } from '../src/handler';
import { Request } from 'node-fetch';

describe('handler returns response with request method', () => {
  const methods = [
    'GET',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    'CONNECT',
    'OPTIONS',
    'TRACE',
    'PATCH',
  ];
  methods.forEach(method => {
    it(method, async () => {
      const request = new Request('/', { method });

      const result = await handleRequest(request);
      const text = await result.text();
      expect(text).toContain(method);
    });
  });
});

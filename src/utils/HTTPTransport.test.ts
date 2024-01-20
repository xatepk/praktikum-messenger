import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { expect } from 'chai';
import HTTPTransport from './HTTPTransport.ts';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  let requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.XMLHttpRequest = xhr;

    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    });

    instance = new HTTPTransport('');
  });

  afterEach(() => {
    requests = [];
  })

  describe('Get', () => {
    it('.get() should send GET request', () => {
      instance.get('/auth/user');

      const [request] = requests;

      expect(request.method).to.eq('Get');
    });

    it('.get() should send correct url', () => {
      instance.get('/auth/user');

      const [request] = requests;

      expect(request.url).to.eq('https://ya-praktikum.tech/api/v2/auth/user');
    });
  });

  describe('Post', () => {
    it('.post() should send Post request', () => {
      instance.post('/auth/logout');

      const [request] = requests;

      expect(request.method).to.eq('Post');
    });

    it('.post() should have requestBody', () => {
      instance.post('/auth/signin', { login: 'org_root@e.com' });

      const [request] = requests;

      expect(request.requestBody).to.eq('{"login":"org_root@e.com"}');
    });
  });



  it('.put() should send Put request', () => {
    instance.put('/user/password');

    const [request] = requests;

    expect(request.method).to.eq('Put');
  });

  it('.patch() should send Patch request', () => {
    instance.patch('/user/profile');

    const [request] = requests;

    expect(request.method).to.eq('Patch');
  });

  it('.delete() should send Delete request', () => {
    instance.delete('/chats');

    const [request] = requests;

    expect(request.method).to.eq('Delete');
  });
});

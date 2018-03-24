import cheerio from 'cheerio';
import supertest, { Response as SuperResponse } from 'supertest';
import app from '../src/app';
import { Error } from '../src/handlers/errors';

interface Response extends SuperResponse {
  headers: any[any];
}

describe('GET /size', () => {
  it('should return 302 OK', done => {
    supertest(app)
      .get('/size')
      .expect(302, done);
  });
});

describe('POST /size', () => {
  it('should return 200 OK', done => {
    supertest(app)
      .get('/')
      .end((err: Error, res: Response) => {
        const csrf = cheerio(res.text)
          .find('input[name=_csrf]')
          .val();

        supertest(app)
          .post('/size')
          .field('_csrf', csrf)
          .attach('file', './test/dummy.txt')
          .set('cookie', res.headers['set-cookie'])
          .expect(200, done);
      });
  });

  it('should return 500 Internal Server Error on large file', done => {
    supertest(app)
      .get('/')
      .end((err: Error, res: Response) => {
        const csrf = cheerio(res.text)
          .find('input[name=_csrf]')
          .val();

        supertest(app)
          .post('/size')
          .field('_csrf', csrf)
          .attach('file', './test/largedummy.txt')
          .set('cookie', res.headers['set-cookie'])
          .expect(500, done);
      });
  });

  it('should return 403 Forbidden on missing csrf token', done => {
    supertest(app)
      .post('/size')
      .attach('file', './test/dummy.txt')
      .expect(403, done);
  });
});

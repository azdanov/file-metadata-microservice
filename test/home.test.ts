import supertest from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    supertest(app).get('/')
      .expect(200, done);
  });
});

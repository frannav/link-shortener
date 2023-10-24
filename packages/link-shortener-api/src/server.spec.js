import request from 'supertest';
import {app, server} from './server';

describe('check endpoint', () => {
  afterAll(() => {
    server.close();
  });
  
  it('should return OK', async () => {
    const response = await request(app).get('/check');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});

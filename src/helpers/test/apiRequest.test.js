import axios from 'axios';
import { authenticateUser, registerUser } from '../apiRequests';

describe('Test for all user auth. request functions', () => {
  it('should authenticate user', async () => {
    const axiosPost = axios.post;
    const res = {
      data: {
        data: { }
      }
    };

    axios.post = jest.fn(() => Promise.resolve(res));
    const response = await authenticateUser();
    expect(response).toEqual(res);
    axios.post = axiosPost;
  });

  it('should register user', async () => {
    const axiosPost = axios.post;
    const res = {
      data: {
        data: {}
      }
    };

    axios.post = jest.fn(() => Promise.resolve(res));
    const response = await registerUser();
    expect(response).toEqual(res);
    axios.post = axiosPost;
  });
});

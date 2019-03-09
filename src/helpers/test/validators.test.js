import validator from '../validators';

describe('Test Validator', () => {
  const user = {
    name: '',
    password: ''
  };

  it('should trow error that username and password fields must not be empty', () => {
    expect(validator(user)).toEqual({
      name: 'Username field must not be empty',
      password: 'Password field must not be empty'
    });
  });

  it('should throw error that username field must not be empty', () => {
    user.name = 'fury';
    expect(validator(user)).toEqual({
      password: 'Password field must not be empty'
    });
  });

  it('should throw error that password field must not be empty', () => {
    user.name = '';
    user.password = 'fury';
    expect(validator(user)).toEqual({
      name: 'Username field must not be empty'
    });
  });
});

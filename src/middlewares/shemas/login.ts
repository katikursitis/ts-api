const loginValidator = {
    type: 'object',
    properties: {
      username: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    },
    additionalProperties: false,
    required: ['username', 'password']
  };
  

export default loginValidator;
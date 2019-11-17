const loginValidator = {
    type: 'object',
    properties: {
      token: {
        type: 'string'
      }
    },
    additionalProperties: false,
    required: ['token']
  };
  

export default loginValidator;
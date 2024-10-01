module.exports = {
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties:{
            _id:{
              type:'objectID',
              description:'task identification number',
              example:'78901348901349078134'
            },
            title:{
              type:'string',
              description:'task to create',
              example:'Aprendiendo swagger'
            },
            completed:{
              type:'boolean',
              description:'completed or not',
              example:'false'
            },
          }
        },
        TaskBody: {
          type: 'object',
          properties:{
            title:{
              type:'string',
              description:'task to create',
              example:'Aprendiendo swagger'
            },
          }
        },
        IllegalInput: {
          description: 'Input inválido',
        },
      },
    },
  };
  
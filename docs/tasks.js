module.exports = {
    paths: {
      '/': {
        get: {
          tags: ['Tasks'],
          description: 'Obtener todas las tareas',
          responses: {
            200: {
              description: 'Lista de todas las tareas',
            },
          }, 
          
        },
      },
    }, 
    //   '/create': {
    //     post: {COPIAR DE DATAAAAAAAAAAAAAA
    //       tags: ['Tasks'],
    //       description: 'crear una las tareas',
    //       responses: {
    //         200: {
    //           description: 'crear una tarea',
    //         },
    // }}}
  };
  
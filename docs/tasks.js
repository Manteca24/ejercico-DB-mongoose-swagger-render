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
  };
  
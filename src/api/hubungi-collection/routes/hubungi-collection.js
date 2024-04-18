module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/hubungi-collection/search',
     handler: 'hubungi-collection.search',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};

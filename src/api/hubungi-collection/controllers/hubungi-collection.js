'use strict';

/**
 * A set of functions called "actions" for `hubungi-collection`
 */

module.exports = {
  async search(ctx) {
    try {
      // Retrieve keywords and fetchAll parameter from the query parameters
      const { keyword, locationKeyword, fetchAll } = ctx.request.query;
      console.log('Keyword received:', keyword);
      console.log('Location Keyword received:', locationKeyword); // Log the location keyword
      console.log('Fetch All parameter received:', fetchAll); // Log the fetchAll parameter

      // Convert fetchAll to a boolean value
      const fetchAllBool = fetchAll === 'true';

      console.log('Performing search...');
      // Pass keywords and fetchAll parameter to the service function
      const results = await strapi.service('api::hubungi-collection.hubungi-collection').search(keyword, locationKeyword, fetchAllBool);
      console.log('Search results:', results);

      ctx.body = results;
    } catch (error) {
      console.error('Error in search controller:', error);
      ctx.internalServerError('Internal server error');
    }
  }
};

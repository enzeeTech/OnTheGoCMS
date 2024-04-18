'use strict';

/**
 * A set of functions called "actions" for `hubungi-collection`
 */

module.exports = {
  async search(ctx) {
    try {
      // Retrieve both keywords from the query parameters
      const { keyword, locationKeyword } = ctx.request.query;
      console.log('Keyword received:', keyword);
      console.log('Location Keyword received:', locationKeyword); // Log the location keyword

      // Check if both keywords are provided
      if (!keyword || !locationKeyword) {
        return ctx.badRequest('Both keyword and locationKeyword query parameters are required');
      }

      console.log('Performing search...');
      // Pass both keywords to the service function
      const results = await strapi.service('api::hubungi-collection.hubungi-collection').search(keyword, locationKeyword);
      console.log('Search results:', results);

      ctx.body = results;
    } catch (error) {
      console.error('Error in search controller:', error);
      ctx.internalServerError('Internal server error');
    }
  }
};

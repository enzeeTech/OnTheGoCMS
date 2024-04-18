'use strict';

/**
 * A set of functions called "actions" for `hubungi-collection`
 */

module.exports = {
  async search(ctx) {
    try {
      const { keyword } = ctx.request.query;
      console.log('Keyword received:', keyword);  // Check if keyword is being received correctly
  
      if (!keyword) {
        return ctx.badRequest('Keyword query parameter is required');
      }
  
      console.log('Performing search...');  // Confirm that the service function is being called
      const results = await strapi.service('api::hubungi-collection.hubungi-collection').search(keyword);
      console.log('Search results:', results);  // Check what the search function is returning
  
      ctx.body = results;
    } catch (error) {
      console.error('Error in search controller:', error);  // This will log the error details
      ctx.internalServerError('Internal server error');
    }
  }
  
};

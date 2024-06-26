'use strict';

/**
 * hubungi-collection service
 */

module.exports = () => ({
  async search(keyword, locationKeyword, fetchAll = false) {
      const queryPromises = [];
      const collections = ['lokasi-johor', 'lokasi-kedah', 'lokasi-kelantan', 'lokasi-melaka', 'lokasi-negeri-sembilan', 'lokasi-pahang', 'lokasi-perak', 'lokasi-perlis', 'lokasi-pulau-pinang', 'lokasi-sabah', 'lokasi-sarawak', 'lokasi-selangor', 'lokasi-terengganu', 'lokasi-wp-kuala-lumpur', 'lokasi-wp-labuan'];

      collections.forEach(collection => {
          let query;
          if (fetchAll) {
              query = strapi.db.query(`api::${collection}.${collection}`).findMany({
                  populate: ['BackgroundImage', 'Icon']
              });
          } else {
              query = strapi.db.query(`api::${collection}.${collection}`).findMany({
                  where: {
                      title: {
                          $containsi: keyword  
                      },
                      location_address: {
                          $containsi: locationKeyword
                      }
                  },
                  populate: ['BackgroundImage', 'Icon']
              });
          }

          queryPromises.push(query);
      });

      const results = await Promise.all(queryPromises);
      return results.flat();
  }
});

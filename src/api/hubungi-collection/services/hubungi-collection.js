'use strict';

/**
 * hubungi-collection service
 */

module.exports = () => ({
    async search(keyword) {
        const queryPromises = [];
        const collections = ['lokasi-johor', 'lokasi-kedah', 'lokasi-kelantan', 'lokasi-melaka', 'lokasi-negeri-sembilan', 'lokasi-pahang', 'lokasi-perak', 'lokasi-perlis', 'lokasi-pulau-pinang', 'lokasi-sabah', 'lokasi-sarawak', 'lokasi-selangor', 'lokasi-terengganu', 'lokasi-wp-kuala-lumpur', 'lokasi-wp-labuan'];  
    
        collections.forEach(collection => {
          queryPromises.push(
            strapi.db.query(`api::${collection}.${collection}`).findMany({
              where: {
                title: {
                  $containsi: keyword  
                }
              },
              populate: ['BackgroundImage']
            })
          );
        });
    
        const results = await Promise.all(queryPromises);
        return results.flat();
      }
});

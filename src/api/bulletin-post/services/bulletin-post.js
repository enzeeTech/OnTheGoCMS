'use strict';

/**
 * bulletin-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bulletin-post.bulletin-post');

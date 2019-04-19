'use strict';

/**
 * Url.js controller
 *
 * @description: A set of functions called "actions" for managing `Url`.
 */

module.exports = {

  /**
   * Retrieve url records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.url.search(ctx.query);
    } else {
      return strapi.services.url.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a url record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.url.fetch(ctx.params);
  },

  /**
   * Count url records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.url.count(ctx.query);
  },

  /**
   * Create a/an url record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.url.add(ctx.request.body);
  },

  /**
   * Update a/an url record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.url.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an url record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.url.remove(ctx.params);
  }
};

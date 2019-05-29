'use strict';

/**
 * Audit.js controller
 *
 * @description: A set of functions called "actions" for managing `Audit`.
 */

module.exports = {

  /**
   * Retrieve audit records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.audit.search(ctx.query);
    } else {
      return strapi.services.audit.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a audit record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.audit.fetch(ctx.params);
  },

  /**
   * Count audit records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.audit.count(ctx.query);
  },

  /**
   * Create a/an audit record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.audit.add(ctx.request.body);
  },

  /**
   * Update a/an audit record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.audit.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an audit record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.audit.remove(ctx.params);
  }
};

FROM node:11.15.0-alpine

WORKDIR /hub-app

RUN echo "unsafe-perm = true" >> ~/.npmrc

RUN npm install -g strapi@alpha

COPY strapi.sh ./
RUN chmod +x ./strapi.sh

EXPOSE 1337

COPY healthcheck.js ./
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s \
      CMD node /hub-app/healthcheck.js

CMD ["./strapi.sh"]

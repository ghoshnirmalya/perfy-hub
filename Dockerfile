FROM hasura/graphql-engine:v1.0.0-beta.2.cli-migrations

RUN mkdir /hub-app

WORKDIR /hub-app

COPY . /hub-app/

ENV HASURA_GRAPHQL_DATABASE_URL=postgres://admin:B8HkeRUi9M@dpg-bk294gdovq8urt8mqmt0/hub
ENV HASURA_GRAPHQL_ENABLE_CONSOLE=true

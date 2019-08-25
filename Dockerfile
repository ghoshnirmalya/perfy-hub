FROM hasura/graphql-engine:v1.0.0-beta.5

RUN mkdir /hub-app

WORKDIR /hub-app

COPY . /hub-app/

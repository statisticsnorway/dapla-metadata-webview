# dapla-metadata-webview

This application is built for in-house use in Statistics Norway and it aims to create a user interface against various
metadata exploration services such as
[exploration-lds](https://github.com/statisticsnorway/dapla-project/blob/master/localstack/docker-compose-exploration.yml).

Functionality includes:
* Searching, listing and exploring metadata through variables and datasets, powered by GraphQL

### Try this application locally
The first time you clone the repository, remember to run `yarn install`.

Run `yarn start` and navigate to `http://localhost:3000`.

`yarn test` runs all tests and `yarn coverage` calculates test coverage.

### Docker locally
* `yarn build`
* `docker build -t dapla-metadata-webview .`
* `docker run -p 8000:8180 dapla-metadata-webview:latest`
    * Alternatively with custom environment variables: `docker run -p 8000:8180 -e REACT_APP_API=http://localhost:29090 dapla-metadata-webview:latest`
* Navigate to `http://localhost:8000`

**Note** that this application requires [dapla-project localstack](https://github.com/statisticsnorway/dapla-project/blob/master/localstack/README.md)
running to function locally (or at least a running instance of [linked-data-store](https://github.com/statisticsnorway/linked-data-store-documentation)).

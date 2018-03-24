# Image Search Abstraction Layer

Image Search Abstraction Layer microservice made in node for freeCodeCamp

[Live version](https://image-search-api-node-azkbloorse.now.sh/api/search/)

Based on [Express](https://github.com/expressjs/express) web framework, its
ecosystem and deployed on [Now](https://zeit.co/now).

* [express](https://github.com/expressjs/express) - web framework
* [compression](https://github.com/expressjs/compression/) - enable gzip
* [mongoose](https://github.com/Automattic/mongoose/) - ODM for MongoDB
* [morgan](https://github.com/expressjs/morgan/) - logger for express
* [validator](https://github.com/chriso/validator.js/) - url validation
* [jest](https://github.com/facebook/jest/) - testing framework
* [nodemon](https://github.com/remy/nodemon/) - node development helper
* [nsp](https://github.com/nodesecurity/nsp/) - check installed packages for security issues
* [eslint](https://github.com/eslint/eslint/) - linting
* [prettier](https://github.com/prettier/prettier/) - formatting

---

**Example Usage:**

[https://image-search-api-node-azkbloorse.now.sh/api/search/](https://image-search-api-node-azkbloorse.now.sh/api/search/) - search for all items

[https://image-search-api-node-azkbloorse.now.sh/api/search/network](https://image-search-api-node-azkbloorse.now.sh/api/search/network) - search for `network`

[https://image-search-api-node-azkbloorse.now.sh/api/search/network?limit=10](https://image-search-api-node-azkbloorse.now.sh/api/search/network?limit=10) - search for `network` and only show first 10 items

[https://image-search-api-node-azkbloorse.now.sh/api/search/network?offset=5](https://image-search-api-node-azkbloorse.now.sh/api/search/network?offset=5) - search for `network` and skip first 5 items

[https://image-search-api-node-azkbloorse.now.sh/api/search/network?limit=10&offset=5](https://image-search-api-node-azkbloorse.now.sh/api/search/network?limit=10&offset=5) - search for `network`, show first 10 items and skip first 5 items

[https://image-search-api-node-azkbloorse.now.sh/api/latest](https://image-search-api-node-azkbloorse.now.sh/api/latest) - show latest search terms filtered by date

**_Accepted query parameters:_**

* limit - number of items to query _(default: 5)_
* offset - number of items to skip _(default: 0)_

**Example Output:**

```json
[
  {
    "_id": "5aa3c13a05a89f04fc6ead57",
    "url": "https://robohash.org/nihildebitisaut.bmp?size=50x50&set=set1",
    "description": "deploy wireless applications",
    "__v": 0
  },
  {
    "_id": "5aa3c13a05a89f04fc6ead58",
    "url": "https://robohash.org/nonporroratione.jpg?size=50x50&set=set1",
    "description": "integrate cross-media networks",
    "__v": 0
  },
  {
    "_id": "5aa3c13a05a89f04fc6ead59",
    "url": "https://robohash.org/velitsitest.bmp?size=50x50&set=set1",
    "description": "exploit wireless partnerships",
    "__v": 0
  },
  {
    "_id": "5aa3c13a05a89f04fc6ead5b",
    "url": "https://robohash.org/erroreosvoluptatum.jpg?size=50x50&set=set1",
    "description": "envisioneer revolutionary vortals",
    "__v": 0
  },
  {
    "_id": "5aa3c13a05a89f04fc6ead5a",
    "url": "https://robohash.org/rerumquaeratsunt.bmp?size=50x50&set=set1",
    "description": "envisioneer innovative users",
    "__v": 0
  }
]
```

## Development

Yarn or Npm can be used to run the commands.

`yarn dev` to start nodemon for development.

`yarn test` to run jest.

`yarn start` to start express app.

`yarn lint` to lint code using eslint and format with prettier.

`yarn lint:watch` to start linting in watch mode.

`yarn security` to check for security issues within packages.

## Development

Latest Node.js is required.

## License

[MIT](LICENSE)

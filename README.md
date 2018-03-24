# File Metadata Microservice

File Metadata Microservice made in node for freeCodeCamp

[Live version](https://file-metadata-microservice-otkvgkfslu.now.sh/)

Based on [Express](https://github.com/expressjs/express) web framework, its
ecosystem and deployed on [Now](https://zeit.co/now).

* [typescript](https://github.com/Microsoft/TypeScript) - a typed superset of javascript
* [express](https://github.com/expressjs/express) - web framework
* [csurf](https://github.com/expressjs/csurf) - csrf token middleware
* [body-parser](https://github.com/expressjs/body-parser) - body parsing middleware
* [cookie-parser](https://github.com/expressjs/cookie-parser) - parse http request cookies
* [cookie-parser](https://github.com/expressjs/cookie-parser) - parse http request cookies
* [multer](https://github.com/expressjs/multer) - middleware for handling __multipart/form-data__
* [pug](https://github.com/pugjs/pug) - template engine
* [filesize.js](https://github.com/avoidwork/filesize.js) - library to generate a human readable file size
* [cheerio](https://github.com/cheeriojs/cheerio) - implementation of core jquery designed for the server
* [npm-run-all](https://github.com/mysticatea/npm-run-all) - ltool to run multiple npm-scripts in parallel or sequential
* [supertest](https://github.com/visionmedia/supertest) - library for testing node.js http servers
* [jest](https://github.com/facebook/jest/) - testing framework
* [ts-jest](https://github.com/kulshekhar/ts-jest) - typescript preprocessor for jest
* [tslint](https://github.com/palantir/tslint) - linter for typescript
* [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb) - tsLint config for airbnb style
* [nodemon](https://github.com/remy/nodemon/) - node development helper
* [nsp](https://github.com/nodesecurity/nsp/) - check installed packages for security issues
* [prettier](https://github.com/prettier/prettier/) - formatting

---

**Example Usage:**

Upload a file less than 5 MB to receive a metadata summary:

```json
{
    "originalname": "composer.json",
    "mimetype": "application/json",
    "size": "214 B"
}
```


## Development

Yarn or Npm can be used to run the commands.

`yarn watch` to start nodemon for development and compile express server.

`yarn test` to run jest.

`yarn start` to start compiled express app.

`yarn tslint` to lint code using tslint and using rules from prettier.

`yarn security` to check for security issues within packages.

`yarn build:ts` to build files from `src/` to `dist/`

## Development

Latest Node.js is required.

## License

[MIT](LICENSE)

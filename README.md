# OpenFrontend.Framework

If you are a user of the framework, see https://openfrontend.tourismusweb.site for our docs.

## Contributing to the OpenFrontend.Framework

### System requirements

The OpenFrontend.Framework is based upon Bootstrap and self-documented in this repository using [Sculpin](https://sculpin.io).
In order to contribute, you have to have

- a functional JavaScript setup
- a functional PHP setup

On top of those, we use [Yarn](https://yarnpkg.com/getting-started/install) and [Composer](https://getcomposer.org/download/) which
need to be installed on your system as well.

### Install dependencies

Installing dependencies is as easy as runing Yarn and Composer:

1. `yarn install`
2. `composer install`

### Building the framework

Everything regarding the framework itself resides in `src`.

Development: Run `yarn encore dev` (and `--watch` if you want a file watcher). 
Production/Before you commit: Run `yarn encore production`.

### Building the documentation

Everything regarding the framework itself resides in `docs` plus the Sculpin specifics on root level. See Sculpin docs
for more details.

Development: Run `vendor/bin/sculpin generate --watch --server`.
Production/Before you commit: Run `vendor/bin/sculpin generate --env=prod`.
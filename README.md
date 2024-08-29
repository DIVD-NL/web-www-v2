# Prerequisites

- golang
- https://gohugo.io
- https://just.systems/ (optional)
- npm
- node ^16

# Setup

```sh
npm install
```

# Local development

## Website

[Hugo](https://gohugo.io) is used as framework to run the frontend application. You can start a local server with the following command:

```sh
hugo server
open http://localhost:1313
```

The project will require both people and teams data to be present. If not, these can be generated (or hugo will fail to build). To generate a test-set of people and teams, run the following scripts:

```sh
npm run gen-people
npm run gen-teams
```

## Local admin

```sh
just admin
open http://localhost:8000
just admin-stop #when done

# equivalent to:

npx decap-server
python3 -m http.server --directory ./admin/development
```

## Test production version

```sh
just prod-test
open http://localhost:8000

# equivalent to:

python3 serve.py
```

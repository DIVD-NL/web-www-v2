# DIVD website

If you notice anything that might need improvement or is just not working for you, let us know. Feel free to give feedback by sumbitting an issue. Bonuspoints for a detailled description and screenshots if possible.

# Chocolate Requests

A pull request is like a box of chocolate...
The first 10 pull requests that genuinely improve the website will receive a box of chocolates. Pull requests related to spelling or typographical errors do not count. We all like a challenge right?

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
npx vite
```

## Test production version

```sh
just prod-test
open http://localhost:8000

# equivalent to:

python3 serve.py
```

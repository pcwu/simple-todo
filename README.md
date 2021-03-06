Todo List
========

This is a simple todo list web application.

![screenshot.png](screenshot.png)

Used
--------

-   [Node.js](https://nodejs.org/)
-   [MongoDB](https://www.mongodb.com/)
-   [React](https://facebook.github.io/react/)
-   [Redux](https://redux.js.org/)
-   [Recompose](https://github.com/acdlite/recompose)
-   [Babel](https://babeljs.io/)
-   [Webpack](https://webpack.github.io/)
-   [Mateiral-UI](http://www.material-ui.com/)

Usage
--------

#### Requirements

-   [NPM](https://npmjs.com/)
-   [Node.js](https://nodejs.org/)
-   [MongoDB](https://www.mongodb.com/)


#### Install

```
$ npm install
```

#### Run Development

The server will run on [localhost:3000](localhost:3000).

```
$ npm run dev
```

#### Build

```
$ npm run build
```

#### Run Production

```
$ npm start
```

RESTful API
--------

Actions         |      URL      |HTTP Method |Request   | Response
:---------------|:--------------|:----------:|:--------:|:---------:
List all todos  | /api/todos    | GET        | --       | Todo JSON
Delete completed| /api/todos    | DELETE     | --       | --
Add a todo      | /api/todos    | POST       | Todo JSON| --
Get by id       | /api/todos/:id| GET        | --       | Todo JSON
Delete by id    | /api/todos/:id| DELETE     | --       | --
Update by id    | /api/todos/:id| PUT        | Todo JSON| --

License
--------

MIT

Todo List
========

This is a simple todo list web application.

Used
--------

-   [Node.js](https://nodejs.org/)
-   [MongoDB](https://www.mongodb.com/)
-   [React](https://facebook.github.io/react/)
-   [Redux](https://redux.js.org/)
-   [Babel](https://babeljs.io/)
-   [Webpack](https://webpack.github.io/)

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

#### Run Dev

The server will run on [localhost:3000](localhost:3000).

```
$ npm start
```

#### Build

```
$ npm build
```


RESTful API
--------

Actions         |     URL   |HTTP Method |Request   | Response
:---------------|:----------|:----------:|:--------:|:---------:
List all todos  | /todos    | GET        | --       | Todo JSON
Delete completed| /todos    | DELETE     | --       | --
Add a todo      | /todos    | POST       | Todo JSON| --
Get by id       | /todos/:id| GET        | --       | Todo JSON
Delete by id    | /todos/:id| DELETE     | --       | --
Update by id    | /todos/:id| PUT        | Todo JSON| --

License
--------

MIT

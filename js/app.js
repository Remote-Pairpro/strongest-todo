(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
class AppVersion {
}
AppVersion.version = "1.0.0";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppVersion;

},{}],2:[function(require,module,exports){
"use strict";
class StrongestTodo {
    constructor(initTodos) {
        this.todoList = initTodos;
    }
    add(newTodo) {
        this.todoList.push(newTodo);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StrongestTodo;

},{}],3:[function(require,module,exports){
"use strict";
const AppVersion_1 = require('./AppVersion');
const StrongestTodo_1 = require('./StrongestTodo');
const Todo_1 = require('./Todo');
class StrongestTodoViewModel {
    constructor() {
        this.appVersion = ko.observable(AppVersion_1.default.version);
        this.newContent = ko.observable("");
        this.todos = new StrongestTodo_1.default(ko.observableArray([]));
    }
    addTodo() {
        let content = this.newContent().trim();
        if (content.length == 0)
            return;
        this.todos.add(new Todo_1.default(content, false));
        this.newContent("");
    }
    get todoList() {
        return this.todos.todoList;
    }
}
ko.applyBindings(new StrongestTodoViewModel());

},{"./AppVersion":1,"./StrongestTodo":2,"./Todo":4}],4:[function(require,module,exports){
"use strict";
class Todo {
    constructor(content, check) {
        this.content = content;
        this.check = check;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Todo;

},{}]},{},[3]);

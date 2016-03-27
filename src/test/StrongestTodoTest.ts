/// <reference path="../typings/main.d.ts" />

import * as assert from 'power-assert';
import StrongestTodo from '../main/StrongestTodo';
import Todo from '../main/Todo';

import ko = require('knockout');

describe("StrongestTodo", () => {

    it("Newできるか(テスト自体のサンプル品)", () => {
        let actual = new StrongestTodo(ko.observableArray([]));
        assert.notEqual(actual, null);
    });

    it("Todoを追加出来る", () => {
        let sut = new StrongestTodo(ko.observableArray([]));
        let todo = new Todo("会いたかった", true);
        assert.equal(sut.todoList().length, 0);

        sut.add(todo);

        assert.equal(sut.todoList().length, 1);
    });

});


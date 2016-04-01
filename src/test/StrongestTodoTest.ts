/// <reference path="../typings/main.d.ts" />

import * as assert from 'power-assert';
import StrongestTodo from '../main/StrongestTodo';
import Todo from '../main/Todo';

import ko = require('knockout');

describe("StrongestTodo", () => {

    // ヘルパ関数。StrongestTodo作成＆初期化。
    function createSut(): StrongestTodo {
        return new StrongestTodo(ko.observableArray([]));
    }

    it("Newできるか(テスト自体のサンプル品)", () => {
        assert.notEqual(createSut(), null);
    });

    it("Todoを追加出来る", () => {
        let sut = createSut();
        let todo = new Todo("会いたかった", true);
        assert.equal(sut.todoList().length, 0);

        sut.add(todo);

        assert.equal(sut.todoList().length, 1);
    });

});


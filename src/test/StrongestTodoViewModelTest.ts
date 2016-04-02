/// <reference path="../typings/main.d.ts" />

import * as assert from 'power-assert';
import StrongestTodoViewModel from '../main/StrongestTodoViewModel';

import ko = require('knockout');

describe("StrongestTodoViewModel", () => {

    // ヘルパ関数。StrongestTodoViewModel作成＆初期化。
    function createSut(): StrongestTodoViewModel {
        return new StrongestTodoViewModel(ko);
    }

    it("画面の初期状態は入力欄空、リスト空である", () => {
        let sut = createSut();
        assert.equal(sut.todoList().length, 0);
        assert.equal(sut.newContent(), "");
        assert.equal(/[0-9]*\.[0-9]*\.[0-9]*/.test(sut.appVersion), true);
    });

    it("画面に入力したTODOが追加ボタンによりリストにたされ、入力域はクリアされる", () => {
        let sut = createSut();
        sut.newContent("新しいTODO");

        assert.equal(sut.todoList().length, 0);

        sut.addTodo();

        assert.equal(sut.todoList().length, 1);
        assert.equal(sut.todoList()[0].content, "新しいTODO");
        assert.equal(sut.newContent(), "");
    });

    it("入力域が空の状態なら、ボタン(orEnter)押されてもTODOが追加されない", () => {
        let sut = createSut();

        sut.newContent("");
        assert.equal(sut.todoList().length, 0);

        sut.addTodo();

        assert.equal(sut.todoList().length, 0);
    });

});


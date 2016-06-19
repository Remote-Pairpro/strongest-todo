/// <reference path="../typings/main.d.ts" />

import * as assert from 'power-assert';
import StrongestTodoViewModel from '../main/StrongestTodoViewModel';
import Todo from '../main/Todo';

import ko = require('knockout');

describe("StrongestTodoViewModel", () => {

    // ヘルパ関数。StrongestTodoViewModel作成＆初期化。
    function createSut(): StrongestTodoViewModel {
        return new StrongestTodoViewModel(ko, false);
    }

    it("画面の初期状態は入力欄空、リスト空である", () => {
        const sut = createSut();
        assert.equal(sut.todoList().length, 0);
        assert.equal(sut.newContent(), "");
        assert.equal(/[0-9]*\.[0-9]*\.[0-9]*/.test(sut.appVersion), true);
    });

    it("画面に入力したTODOが追加ボタンによりリストにたされ、入力域はクリアされる", () => {
        const sut = createSut();
        sut.newContent("新しいTODO");

        assert.equal(sut.todoList().length, 0);

        sut.addTodo();

        assert.equal(sut.todoList().length, 1);
        assert.equal(sut.todoList()[0].content, "新しいTODO");
        assert.equal(sut.newContent(), "");
    });

    it("入力域が空の状態なら、ボタン(orEnter)押されてもTODOが追加されない", () => {
        const sut = createSut();

        sut.newContent("");
        assert.equal(sut.todoList().length, 0);

        sut.addTodo();

        assert.equal(sut.todoList().length, 0);
    });

    it("フィルターのチェックボックスがOnなら表示件数が減る", () => {
        const sut = createSut();
        // 初期条件。TODO追加。
        sut.newContent("1st");
        sut.addTodo();
        sut.newContent("2nd");
        sut.addTodo();
        sut.newContent("3rd");
        sut.addTodo();
        sut.newContent("4th");
        sut.addTodo();
        sut.newContent("5th");
        sut.addTodo();
        // ２つくらいDoneする
        sut.todos.todoList()[2].done(true);
        sut.todos.todoList()[4].done(true);
        assert.equal(sut.todos.todoList().length, 5);
        
        // filterをON
        sut.hideDoneTasks(true);
        assert.equal(sut.filterTodo().length, 3);
        
        // filterをOFF、全件戻ってくる
        sut.hideDoneTasks(false);
        assert.equal(sut.filterTodo().length, 5);
    });

    it("入力域が空か否かを判定出来る", () => {
        const sut = createSut();
        sut.newContent("");
        assert.equal(sut.existNewContent(), false);
        // 文字を入力してみる。
        sut.newContent("1");
        assert.equal(sut.existNewContent(), true);
        // さらに入力してみる。
        sut.newContent("12");
        assert.equal(sut.existNewContent(), true);
    });

    it("Todoを指定した削除が出来る", () => {
        const sut = createSut();
        // 初期条件。TODO追加。
        sut.newContent("1st");
        sut.addTodo();
        sut.newContent("2nd");
        sut.addTodo();
        sut.newContent("3rd");
        sut.addTodo();
        // ふたつ目を選択し…
        const seccond: Todo = sut.todos.todoList()[1];
        assert.equal(seccond.content, "2nd");
        // 削除してみる
        sut.removeTodo(seccond);
        // ２つになって、１，3となっているはず
        const list: Todo[] = sut.todos.todoList();
        assert.equal(list.length, 2);
        assert.equal(list[0].content, "1st");
        assert.equal(list[1].content, "3rd");
    });

    it("論理値の文字列表現をboolean値に変換出来る", () => {
        const sut = createSut();
        assert.equal(sut.toBool("true"), true);
        assert.equal(sut.toBool("false"), false);
        assert.equal(sut.toBool("True"), false);
        assert.equal(sut.toBool("TRUE"), false);
        assert.equal(sut.toBool("False"), false);
        assert.equal(sut.toBool("FALSE"), false);
        assert.equal(sut.toBool(""), false);
        assert.equal(sut.toBool(null), false);
    });

});

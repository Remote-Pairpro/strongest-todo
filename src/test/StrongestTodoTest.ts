/// <reference path="../typings/main.d.ts" />

import * as assert from 'power-assert';
import StrongestTodo from '../main/StrongestTodo';
import Todo from '../main/Todo';

describe("StrongestTodo", () => {

    it("Newできるか(テスト自体のサンプル品)", () => {
        let actual = new StrongestTodo([]);
        assert.notEqual(actual, null);
    });
    
    it("引数に与えたTODOがそのまま出てくるか", () => {
        let item = new Todo("会いたかった",true);
        let actual = new StrongestTodo([item]);
        assert.equal(actual.todoList[0].content, "会いたかった");
        assert.equal(actual.todoList[0].check, true);
    });

    it("Todoを追加出来る", () => {
        let sut = new StrongestTodo([]);
        let todo = new Todo("会いたかった",true);
        assert.equal(sut.todoList.length , 0);
        
        sut.add(todo);
        
        assert.equal(sut.todoList.length , 1);
    });



});


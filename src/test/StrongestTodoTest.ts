/// <reference path="../typings/main.d.ts" />

import * as assert from 'power-assert';
import StrongestTodo from '../main/StrongestTodo';

describe("StrongestTodo", () => {

    var sut = new StrongestTodo();

    it("Newできるか(テスト自体のサンプル品)", () => {
        let actual = new StrongestTodo();
        assert.notEqual(actual, null);
    });

});


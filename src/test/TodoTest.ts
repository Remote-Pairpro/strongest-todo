/// <reference path="../typings/main.d.ts" />

import * as assert from 'power-assert';
import Todo from '../main/Todo';

describe("Todo", () => {

    it("素直に入れた値をそのまま返すか(テスト自体のサンプル)", () => {
        let actual = new Todo("TODOの内容", true);
        assert.equal(actual.content, "TODOの内容");
        assert.equal(actual.check, true);
    });

});

/// <reference path="../typings/main.d.ts" />

import * as assert from 'power-assert';
import Todo from '../main/Todo';

import ko = require('knockout');

describe("Todo", () => {

    it("素直に入れた値をそのまま返すか(テスト自体のサンプル)", () => {
        let actual = new Todo("TODOの内容", ko.observable(true));
        assert.equal(actual.content, "TODOの内容");
        assert.equal(actual.done(), true);
    });

});

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
    
    it("Id生成時、UUIDっぽいものが作成される", () => {
        let actual = new Todo("TODOの内容", ko.observable(true));
        assert.equal(actual.id.length, 36);
    });

    // FIXME この機構は暫定…シリアライズの問題が片付けばプロパティごと葬りたい…。
    it("シリアライズ周りで「doneにセットしてあればそれを」「セットしてなければ代替の値を」返す", () => {
        const actual = new Todo("TODOの内容", null); // doneがnull
        actual.doneForSerialize = true;
        // doneに値のセットがなければ、doneForSerializeの値を採用する。
        assert.equal(actual.doneForSerialize, true);
        // doneに値のセットがあれば、doneの値を優先する。
        actual.done = ko.observable(false);
        assert.equal(actual.doneForSerialize, false);
    });

});

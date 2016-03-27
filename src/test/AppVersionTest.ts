/// <reference path="../typings/main.d.ts" />

import * as assert from 'power-assert';
import AppVersion from '../main/AppVersion';

describe("AppVersion", () => {

    it("バージョン番号がある特定の書式に則った文字列で取得できる", () => {
        let actual = AppVersion.version;
        let regex = /[0-9]*\.[0-9]*\.[0-9]*/;
        assert.equal(regex.test(actual), true);
    });

});


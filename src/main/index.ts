/*
 * index.html とのエントリポイント。
 * ko(Knockoutのオブジェクト)とViewModelのインスタンス化＆ヒモ付しかしない。
 * (ViewModelだけで「GUIを介し無い単体テスト」目的で、ViewModelとkoを分離したかった。)
 */
/// <reference path="../typings/main.d.ts" />
import ko = require('knockout');
import StrongestTodoViewModel from '../main/StrongestTodoViewModel';
ko.applyBindings(new StrongestTodoViewModel(ko));
/// <reference path="../typings/main.d.ts" />

import AppVersion from './AppVersion';
import StrongestTodo from './StrongestTodo';
import Todo from './Todo';

export default class StrongestTodoViewModel {

    public newContent: KnockoutObservable<string>;

    // 本体となるエンジンみたいなの
    private todos: StrongestTodo;

    // コンストラクタ
    public constructor(ko: KnockoutStatic) {
        this.newContent = ko.observable("");

        // 本体初期化。
        this.todos = new StrongestTodo(ko.observableArray([]));
    }

    // 画面上部の入力域の内容で、Todoを一つ足す。
    public addTodo() {
        let content = this.newContent().trim();
        if (content.length == 0) return;
        this.todos.add(new Todo(content, false));
        this.newContent("");
    }

    // プロパティ(ReadOnly)
    public get todoList(): KnockoutObservableArray<Todo> {
        return this.todos.todoList;
    }
    
    // アプリケーションのバージョン表示
    public get appVersion() {
        return (new AppVersion()).version;
    }

}

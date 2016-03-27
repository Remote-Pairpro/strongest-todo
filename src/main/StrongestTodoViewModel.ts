/// <reference path="../typings/main.d.ts" />

import AppVersion from './AppVersion';
import StrongestTodo from './StrongestTodo';
import Todo from './Todo';

class StrongestTodoViewModel {

    public appVersion: KnockoutObservable<string>;
    
    public newContent: KnockoutObservable<string>;
    
    // 本体となるエンジンみたいなの
    private todos: StrongestTodo;

    // コンストラクタ
    public constructor() {
        // アプリケーションのバージョン表示用オブジェクト。
        this.appVersion = ko.observable(AppVersion.version);
        this.newContent = ko.observable("");

        // 本体初期化。
        this.todos = new StrongestTodo(ko.observableArray([]));       
    }

    // 画面上部の入力域の内容で、Todoを一つ足す。
    public addTodo() {
        let todo = new Todo(this.newContent(),false);
        this.todos.add(todo);
    }


    // プロパティ(ReadOnly)
    public get todoList():KnockoutObservableArray<Todo> {
        return this.todos.todoList;
    }

}

ko.applyBindings(new StrongestTodoViewModel());

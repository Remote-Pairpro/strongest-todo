/// <reference path="../typings/main.d.ts" />

import AppVersion from './AppVersion';
import StrongestTodo from './StrongestTodo';
import Todo from './Todo';

class StrongestTodoViewModel {

    public appVersion: KnockoutObservable<string>;
    
    public todoList:KnockoutObservableArray<Todo>;

    public newContent: KnockoutObservable<string>;
    
    // 本体となるエンジンみたいなの
    private todos: StrongestTodo;

    // コンストラクタ
    public constructor() {
        // アプリケーションのバージョン表示用オブジェクト。
        this.appVersion = ko.observable(AppVersion.version);
        this.newContent = ko.observable("");

        // 本体初期化。
        this.todoList = ko.observableArray([]);
        this.todos = new StrongestTodo(this.todoList());
        
    }

    // 画面上部の入力域の内容で、Todoを一つ足す。
    public addTodo() {
        let todo = new Todo(this.newContent(),false);
        this.todos.add(todo);
    }

}

ko.applyBindings(new StrongestTodoViewModel());

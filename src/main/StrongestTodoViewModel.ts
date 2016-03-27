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
        var innerTodo:Todo[] = [];
        this.todoList = ko.observableArray(innerTodo);
        this.todos = new StrongestTodo(innerTodo);
        
    }

    public addTodo() {
        let todo = new Todo(this.newContent(),false);
        this.todos.add(todo);
        
        alert("中の配列っぽいヤツは… " + this.todos.todoList.length);
        
    }

}

ko.applyBindings(new StrongestTodoViewModel());

/// <reference path="../typings/main.d.ts" />

import AppVersion from './AppVersion';
import StrongestTodo from './StrongestTodo';
import Todo from './Todo';

class StrongestTodoViewModel {

    public appVersion: KnockoutObservable<string>;
    
    public todoList:KnockoutObservableArray<Todo>;
    
    
    // 本体となるエンジンみたいなの
    private todos: StrongestTodo;

    // コンストラクタ
    public constructor() {
        // アプリケーションのバージョン表示用オブジェクト。
        this.appVersion = ko.observable(AppVersion.version);
        // 本体初期化。
        this.todoList = ko.observableArray([]);
        this.todos = new StrongestTodo(this.todoList());
        
    }

}

ko.applyBindings(new StrongestTodoViewModel());

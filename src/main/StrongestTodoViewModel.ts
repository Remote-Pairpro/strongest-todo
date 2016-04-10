/// <reference path="../typings/main.d.ts" />

import AppVersion from './AppVersion';
import StrongestTodo from './StrongestTodo';
import Todo from './Todo';

export default class StrongestTodoViewModel {

    private ko: KnockoutStatic;

    public newContent: KnockoutObservable<string>;
    public filterdTodoList: KnockoutComputed<any>;
    
    public hideDoneTasks: KnockoutObservable<boolean>;

    // 本体となるエンジンみたいなの
    private todos: StrongestTodo;

    // コンストラクタ
    public constructor(ko: KnockoutStatic) {
        
        this.ko = ko;
        
        this.newContent = this.ko.observable("");
        this.hideDoneTasks = this.ko.observable(false);

        // 本体初期化。
        this.todos = new StrongestTodo(ko.observableArray([]));
        
        // フィルターイベント
        this.filterdTodoList = this.ko.computed(() => {
            // 「Doneのものを表示しない」チェックボックスがOnならフィルターかける
            if (!this.hideDoneTasks()) return this.todos.todoList();
            return ko.utils.arrayFilter(this.todos.todoList(), (i:Todo) => {
                return !i.done();
            });
        }, this);
    }

    // 画面上部の入力域の内容で、Todoを一つ足す。
    public addTodo() {
        let content = this.newContent().trim();
        if (content.length == 0) return;
        this.todos.add(new Todo(content, this.ko.observable(false)));
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

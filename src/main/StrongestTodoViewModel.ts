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
    public todos: StrongestTodo;

    // コンストラクタ
    public constructor(ko: KnockoutStatic) {

        this.ko = ko;

        this.newContent = this.ko.observable("");
        this.hideDoneTasks = this.ko.observable(false);

        // 本体初期化。
        this.todos = new StrongestTodo(ko.observableArray([]));
        
        // フィルターイベント
        this.filterdTodoList = this.ko.computed(() => {
            return this.filterTodo();
        }, this);
    }

    // 画面上部の入力域の内容で、Todoを一つ足す。
    public addTodo() {
        let content = this.newContent().trim();
        if (content.length == 0) return;
        this.todos.add(this.createTodo(content, false));
        this.newContent("");
    }

    // プロパティ(ReadOnly)
    public get todoList(): KnockoutObservableArray<Todo> {
        return this.todos.todoList;
    }
    
    // 「Doneのものを表示しない」チェックボックスがOnならフィルターかける
    public filterTodo(): Todo[] {
        if (!this.hideDoneTasks()) return this.todos.todoList();
        return this.todos.todoList().filter((i: Todo) => {
            return !i.done();
        });
    }
    
    // 新規Todoを作成し、返す。(Observable注入)
    public createTodo(content: string, done: boolean): Todo {
        return new Todo(content, this.ko.observable(done));
    }
    
    // アプリケーションのバージョン表示
    public get appVersion() {
        return (new AppVersion()).version;
    }

}

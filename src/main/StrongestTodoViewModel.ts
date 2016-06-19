/// <reference path="bindingHandlers.d.ts" />

import AppVersion from './AppVersion';
import StrongestTodo from './StrongestTodo';
import Todo from './Todo';
import TodoStore from './TodoStore';

export default class StrongestTodoViewModel {

    private ko: KnockoutStatic;

    public newContent: KnockoutObservable<string>;
    public filterdTodoList: KnockoutComputed<any>;

    public hideDoneTasks: KnockoutObservable<boolean>;

    // 本体となるエンジンみたいなの
    public todos: StrongestTodo;

    // ローカル保存してくれるヤーツ。
    private store = new TodoStore();
    
    
    // コンストラクタ
    public constructor(ko: KnockoutStatic, onSave: boolean = true) {
        this.ko = ko;
        
        this.newContent = this.ko.observable("");
        this.hideDoneTasks = this.ko.observable(false);

        // 本体初期化。
        this.store.localSave = onSave;
        const lastTodos: Todo[] = this.store.load();
        // 復元した状態では「doneがovservableになってない」ため、ダミーのプロパティから移し替える。
        // ついでに「クリックした時のイベント」を仕込みたいので、通常で「追加」された時と同じ動きを指せる。
        const todos: Todo[] = [];
        lastTodos.forEach((v: Todo, i) => {
            todos.push(this.createTodo(v.content
                        ,this.toBool(v.doneForSerialize)));
        });
        this.todos = new StrongestTodo(ko.observableArray(todos));
        
        // フィルターイベント
        this.filterdTodoList = this.ko.computed(() => {
            return this.filterTodo();
        }, this);
        
        ko.bindingHandlers.fadeVisible = {
        };
    }
    
    // 画面上部の入力域の内容で、Todoを一つ足す。
    public addTodo() {
        const content = this.newContent().trim();
        if (content.length == 0) return;
        this.todos.add(this.createTodo(content, false));
        this.newContent("");
        this.save();
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
        const doneObs: KnockoutObservable<boolean> = this.ko.observable(done);
        // 子（Todoオブジェクト）の変更の時も、
        // 親(つまり自分,ViewModel)のイベントを起こしたいので、ここで登録。
        doneObs.subscribe((newValue: boolean) => {
            this.save();
        });
        return new Todo(content, doneObs);
    }

    public removeTodo = (todo: Todo) => {
        this.todos.remove(todo);
        this.save();
    }
    
    // アプリケーションのバージョン表示
    public get appVersion() {
        return (new AppVersion()).version;
    }
    
    /**
     * 追加ボタンの制御
     */
    public existNewContent(): boolean {
        return this.newContent().length > 0;
    }
    
    // Drag Drop まわり
    
    public dragStart(item:any) {
        item.dragging(true);
    }

    public dragEnd(item) {
        item.dragging(false);
    };

    /**
     * Stringでの「論理値表現」をboolean型に変換する。<br/>
     * js的には「文字列はから文字でなければ、true」なので、標準APIでの変換が期待出来ないため。
     */
    public toBool(value: String): boolean {
        return value == String(true);
    }
        
    /**
     * 現在のTodo(明細だけ)の情報を永続化。
     */
    public save = () => {
        // 保存用のプロパティにdoneの内容を移植(Observableでは保存出来ないため)
        this.todos.todoList().forEach((v: Todo, i) => { v.doneForSerialize = String(v.done()); });
        this.store.save(this.todoList());
    }
}

// ko.bindingHandlers.fadeVisible = {
//     init:  (element:any, valueAccessor:any) => {
//         // 最初に、値に応じて即座にエレメントの 可視/不可視 を設定します。
//         var value = valueAccessor();
//         // Observable かどうかがわからない値は、"unwrapObservable" を使って処理することができます。
//         $(element).toggle(ko.utils.unwrapObservable(value));
//     },
//     update: function(element:any, valueAccessor:any) {
//         // 値の変化に応じて、ゆっくりと 可視/不可視 の切り替えを行います。
//         var value = valueAccessor();
//         ko.utils.unwrapObservable(value) ? $(element).fadeIn() : $(element).fadeOut();
//     }
// }
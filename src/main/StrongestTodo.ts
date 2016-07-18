/// <reference path="../typings/main.d.ts" />

import Todo from './Todo';

/**
 * 本体っぽい「TODOリスト」のクラス。
 */
export default class StrongestTodo {
    
    // 中のTodo列
    public todoList: KnockoutObservableArray<Todo>;
    
    // コンストラクタ
    public constructor(initTodos: KnockoutObservableArray<Todo>) {
        this.todoList = initTodos;
    }
    
    // Todoを追加。
    public add(newTodo: Todo) {
        this.todoList.push(newTodo);
    }
    
    // Todoを削除。
    public remove(todo: Todo) {
        this.todoList.remove(todo);
    }

    /**
     * TODOを指定位置に移動(指定したTODOの前に挿入)。
     */
    public insertMove(src:Todo, target:Todo) {
        console.log("最初の件数:" + this.todoList().length);
        this.todoList.remove(src);
        console.log("削除後の件数:" + this.todoList().length);
        const i:number = this.todoList.indexOf(target);
        console.log("挿入位置:" + i);
        this.todoList.splice(i,0,src);
        console.log("挿入後件数:" +  this.todoList().length);
    }

}

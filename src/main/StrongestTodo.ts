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
    public insertMove(src: Todo, target: Todo) {
        // 移動元を配列から削除
        this.todoList.remove(src);
        // 指定先の場所を割り出し、その前に挿入。
        const k: number = this.todoList.indexOf(target);
        this.todoList.splice(k, 0, src);
    }

}

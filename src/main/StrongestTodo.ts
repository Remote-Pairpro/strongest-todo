/// <reference path="../typings/main.d.ts" />

import Todo from './Todo';

/**
 * 本体っぽい「TODOリスト」のクラス。
 */
export default class StrongestTodo {
    
    // 中のTodo列
    public todoList:KnockoutObservableArray<Todo>;

    
    // コンストラクタ
    public constructor(initTodos:KnockoutObservableArray<Todo>) {
        this.todoList = initTodos;
    }
    
    // Todoを追加。
    public add(newTodo:Todo) {
        this.todoList.push(newTodo);
    }
        
}

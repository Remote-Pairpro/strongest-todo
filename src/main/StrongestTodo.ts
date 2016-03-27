/// <reference path="../typings/main.d.ts" />

import Todo from './Todo';

/**
 * 本体っぽい「TODOリスト」のクラス。
 */
export default class StrongestTodo {
    
    // 中のTodo列
    public todoList:Todo[];
    
    // コンストラクタ
    public constructor(initTodos:Todo[]) {
        this.todoList = initTodos;
    }
    
}


/// <reference path="../typings/main.d.ts" />

import Todo from './Todo';
import StrongestTodo from './Todo';

// Todoを永続化するクラス。
export default class TodoStore {
    // localStrageに保存するキー文字列。
    private static KEY: string = 'StrongestTodo';

    // 内部保存するかフラグ
    public localSave: boolean = true;

    public load(): Todo[] {
        let loaded: Todo[] = [];
        let json = null;
        if (this.localSave) {
            json = localStorage.getItem(TodoStore.KEY);
        }
        if (json !== null) {
            loaded = JSON.parse(json);
        }
        return loaded;
    }

    public save(todos: Todo[]) {
        // JSON文字列にしてlocalStrage保存。
        const json: string = JSON.stringify(todos);
        if (this.localSave) {
            localStorage.setItem(TodoStore.KEY, json);
        }
    }

}
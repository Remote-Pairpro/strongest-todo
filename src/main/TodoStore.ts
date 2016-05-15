
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
        console.log("ロード手前。");
        let json: string = null;
        if (this.localSave) {
            localStorage.getItem(TodoStore.KEY);
        }
        console.log("ロード後。");
        if (this.localSave && json !== null) {
            console.log("json:" + json);
            loaded = JSON.parse(json);
        }
        return loaded;
    }

    public save(todos: Todo[]) {
        console.log("セーブ前、件数" + todos.length);
        // JSON文字列にしてlocalStrage保存。
        let json: string = JSON.stringify(todos);
        console.log("json:" + json);
        if (this.localSave) {
            localStorage.setItem(TodoStore.KEY, json);
        }
    }

}
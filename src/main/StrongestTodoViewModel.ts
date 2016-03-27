/// <reference path="../typings/main.d.ts" />

import AppVersion from './AppVersion';
import StrongestTodo from './StrongestTodo';

class StrongestTodoViewModel {

    public appVersion: KnockoutObservable<string>;
    
    // 本体となるエンジンみたいなの
    private todos: StrongestTodo;

    // コンストラクタ
    public constructor() {
        // アプリケーションのバージョン表示用オブジェクト。
        this.appVersion = ko.observable(AppVersion.version);
        // 本体初期化。
        this.todos = new StrongestTodo;
        
    }

}

ko.applyBindings(new StrongestTodoViewModel());

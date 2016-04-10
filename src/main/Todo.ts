/// <reference path="../typings/main.d.ts" />

/**
 * TODO一個になるケースクラスみたいなん。
 */
export default class Todo {

    public constructor(
        public content: string
        , public done: KnockoutObservable<boolean>
    ) {
    }

}

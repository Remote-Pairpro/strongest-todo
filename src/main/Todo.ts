/// <reference path="../typings/main.d.ts" />

/**
 * TODO一個になるケースクラスみたいなん。
 */
export default class Todo {

    private innerId: string;

    public constructor(
        public content: string
        , public done: KnockoutObservable<boolean> = null
        , public doneForSerialize: string = "false"  // JSONによるSerializeのための領域、普段は使わない
    ) {
        this.innerId = this.makeId();
    }

    // UUID(っぽいもの)を作る。
    private makeId(): string {
        const pattern: number[] = [2, 1, 1, 1, 3];
        let id: string = "";
        for (let i = 0; i < pattern.length; i++) {
            if (i > 0) {
                id += "-";
            }
            for (let j = 0; j < pattern[i]; j++) {
                id += this.makeRandStr4();
            }
        }
        return id;
    }

    // ランダムな英数４字を作る。
    private makeRandStr4(): string {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    public get id() {
        return this.innerId;
    }

}

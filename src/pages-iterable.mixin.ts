import { Item } from "./item";

export interface IteratorResult<T> {
    done: boolean;
    value: T | null;
}

export const PagesIterableMixin = (superClass: any) => class extends superClass {
    public pointer = 0;

    [Symbol.iterator]() {
        let pointer = 0;
        this.pointer = pointer
        const ctx = this;

        return {
            next(): IteratorResult<Item> {
                if (pointer < ctx.pages.pages.length) {
                    return {
                        done: false,
                        // @ts-ignore
                        value: ctx.toString(ctx.pages.pages[pointer++])
                    }
                } else {
                    return {
                        done: true,
                        value: null
                    }
                }
            }
        }
    }
}

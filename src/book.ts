import {Pages} from "./pages";
import {Item} from "./item";
import {PagesIterableMixin} from "./pages-iterable.mixin";
import {Page} from "./page";

export class Book extends PagesIterableMixin(Item) {
    constructor(public title: string, public author: string, public pages: Pages) {
        super();
    }

    public toString(page: Page): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.pages.length}, ${page.toString()}`
    }
}

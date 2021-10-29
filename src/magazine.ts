import {PagesIterableMixin} from "./pages-iterable.mixin";
import {Item} from "./item";
import {Pages} from "./pages";
import {Page} from "./page";

export class Magazine extends PagesIterableMixin(Item) {
    constructor(public title: string, public pages: Pages) {
        super();
    }

    public toString(page: Page): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.pages.length}, ${page.toString()}`
    }
}

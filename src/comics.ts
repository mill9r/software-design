import {PagesIterableMixin} from "./pages-iterable.mixin";
import {Item} from "./item";
import {Pages} from "./pages";
import {Page} from "./page";

export class Comics extends PagesIterableMixin(Item) {
    constructor(public title: string, public author: string, public artist: string, public pages: Pages) {
        super();
    }

public toString(page: Page): string {
         return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.pages.length}, ${page.toString()}`
    }
}

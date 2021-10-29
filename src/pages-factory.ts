import {Page} from "./page";

export const PAGES_TYPE = {
    BOOK: 'book',
    COMICS: 'comics',
    MAGAZINE: 'magazine'
}


export class PagesFactory {
    public static getPage(pageType: string, amountOfPage: number): Array<Page> {
        switch (pageType) {
            case PAGES_TYPE.BOOK :
                return PagesFactory.generateArray(amountOfPage).map((item, index) => new Page(index, 'with text', 'simple paper'));
            case PAGES_TYPE.COMICS :
                return PagesFactory.generateArray(amountOfPage).map((item, index) => new Page(index, 'with images', 'glossy paper'));
            default:
                return PagesFactory.generateArray(amountOfPage).map((item, index) => new Page(index, 'with article', 'glossy paper'));
        }

    }

    private static generateArray(length: number): any[] {
        return new Array(length);
    }
}

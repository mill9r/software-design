import {Item} from "./Item";
import {ItemComparator} from "./ItemComparator";

export class Inventory {
    private items: Array<Item>;

    public constructor() {
        this.items = []
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public sort(comparator?: ItemComparator): void {
        if(!comparator) {
            this.items.sort();
        }
        this.items.sort(comparator.compare)
    }

    public toString(): string {
        return this.items.join(', ')
    }
}

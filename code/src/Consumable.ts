import {Item} from "./Item";

export abstract class Consumable extends Item {
    private consumed: boolean;

    protected constructor(
        protected name: string,
        protected value: number,
        protected weight: number,
        protected spoiled: boolean
    ) {
      super(name, value, weight);
      this.consumed = false;
    }

    public use(): void | string {
        if(this.consumed) {
            return 'There is nothing left of the bread to consume.';
        }
        return this.eat();
    }

    public abstract eat(): string;

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled;
    }

    public toString(): string {
        return super.toString();
    }
}

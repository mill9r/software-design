import {Consumable} from "./Consumable";

export class Pizza extends Consumable {
    public constructor(private numberOfSlices: number, protected spoiled: boolean) {
        super('pizza', 5, 2.5, spoiled);
    }

    public eat(): string {
        if(!this.spoiled) {
            return `You eat the ${this.name}.`
        }
        return `You eat the ${this.name}. You feel sick.`;
    }
}

import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private numberOfItems: number;
    private id: number;

    protected constructor(private name: string, private value: number, private weight: number) {
        this.id = id++;
    }

    public abstract use(): void | string;

    public compareTo(other: Item): number {
        if(this.value === other.value) {
            return this.name.localeCompare(other.name);
        }

        return this.value > other.value ? 1 : -1;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    public reset(): void {
        this.numberOfItems = 0;
    };

    public getId(): number {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        if(weight <= 0) {
            new Error('Weight should be positive value')
        }
        this.weight = weight;
    }

    public getNumberOfItems(): number {
        return this.weight;
    }
}

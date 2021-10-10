import {Weapon} from "./Weapon";

export class Bow extends Weapon {
    private maxDurability = 1;
    public constructor(
        protected value: number,
        protected weight: number,
        protected baseDamage: number,
        protected damageModifier: number,
        protected baseDurability: number,
        protected durabilityModifier: number) {
        super('bow',value, weight, baseDamage, damageModifier, baseDurability, durabilityModifier);
    }

    public polish(): void {
        const previousDurability = this.baseDurability;
        this.baseDamage = this.baseDurability + this.MODIFIER_CHANGE_RATE;
        if(this.baseDamage > this.maxDurability) {
            this.baseDamage = previousDurability;
        }
    }

}

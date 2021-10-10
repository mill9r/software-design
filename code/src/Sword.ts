import {Weapon} from "./Weapon";

export class Sword extends Weapon {
    private maxBaseDamage: number;
    private maxPercentageDamageImprovement: number = 0.25;
    public constructor(
            protected baseDamage: number,
            protected baseDurability: number,
            protected value: number,
            protected weight: number,) {
        super('sword',value, weight, baseDamage, 0.3, baseDurability, 0.35);
        this.maxBaseDamage = this.getMaxPossibleSwordBaseDamage();
    }

    public polish(): void {
        const previousBaseDamage = this.baseDamage;
        this.baseDamage = this.baseDamage + this.MODIFIER_CHANGE_RATE;
        if(this.baseDamage > this.maxBaseDamage) {
            this.baseDamage = previousBaseDamage;
        }
    }

    private getMaxPossibleSwordBaseDamage(): number {
        return super.getDamage() + super.getDamage() * this.maxPercentageDamageImprovement;
    }
}

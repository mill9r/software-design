import {Item} from "./Item";

export abstract class Weapon extends Item {
  protected MODIFIER_CHANGE_RATE = 0.05
  protected durability: number;
  protected damage: number;

  protected constructor (
          protected name: string,
          protected value: number,
          protected weight: number,
          protected baseDamage: number,
          protected damageModifier: number,
          protected baseDurability: number,
          protected durabilityModifier: number) {
    super(name, value, weight);
    this.durability = baseDurability + durabilityModifier;
    this.damage = baseDamage + damageModifier;
  }

  public abstract polish(): void;

  public getDamage(): number {
      return this.damage;
  }

  public getDurability(): number {
      return this.durability;
  }


  public toString(): string {
      return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability() * 100}`;
  }


  public use(): string {
      if(this.getDurability() <= 0) {
          return `You can't use the ${this.getName()}, it is broken.`
      }

      this.durability = this.getDurability() - this.MODIFIER_CHANGE_RATE;

      if(this.getDurability() <= 0) {
          return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage. The hammer breaks.`
      }

      return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`
  }

}

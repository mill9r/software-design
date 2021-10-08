import {Item} from "./Item";

export abstract class Weapon extends Item{
  protected MODIFIER_CHANGE_RATE = 0.05
  protected durability: number;
  protected damage: number;

  public constructor(
                  public name: string,
                  public value: number,
                  public weight: number,
                  private baseDamage: number,
                  private damageModifier: number,
                  private baseDurability: number,
                  private durabilityModifier: number) {
    super(name, value, weight);
    this.durability = baseDurability + durabilityModifier;
    this.damage = this.baseDamage + this.damageModifier;
  }

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
          return `You use the ${this.getName()}, dealing ${this.getDamage} points of damage. The hammer breaks.`
      }

      return `You use the ${this.getName()}, dealing ${this.getDamage} points of damage.`
  }


}// your code goes here

import {IShipper} from "./shipper";

export class ChicagoSprintShipper implements IShipper {
    private chargePerOunce = 42;

    getCost(weight: number): number {
        return this.chargePerOunce * weight;
    }
}

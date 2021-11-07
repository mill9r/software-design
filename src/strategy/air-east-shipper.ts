import {IShipper} from "./shipper";

export class AirEastShipper implements IShipper {
    private chargePerOunce = 39;

    getCost(weight: number): number {
        return this.chargePerOunce * weight;
    }
}

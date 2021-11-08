import {IShipper} from "./shipper";

export class PacificParcelShipper implements IShipper {
    private chargePerOunce = 51;

    getCost(weight: number): number {
        return this.chargePerOunce * weight;
    }
}

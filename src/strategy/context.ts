import {IShipper} from "./shipper";

export class Context {
    private strategy: IShipper | undefined;

    setStrategy(s: IShipper) {
        this.strategy = s;
    }

    executeStrategy(weight: number): number {
        if(!this.strategy) {
            throw Error(`Strategy wasn't set`);
        }
        return this.strategy.getCost(weight);
    }
}

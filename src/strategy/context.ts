import {IShipper} from "./shipper";
import {ChicagoSprintShipper} from "./chicago-sprint-shipper";
import {PacificParcelShipper} from "./pacific-parcel-shipper";
import {AirEastShipper} from "./air-east-shipper";

export const strategyName = {
    chicagoSprintShipper: 'ChicagoSprintShipper',
    pacificParcelShipper: 'PacificParcelShipper',
    airEastShipper: 'AirEastShipper'
}

export class Context {
    private strategy = new Map<string, IShipper>();

    setStrategy(strategyName: string, s: IShipper) {
        this.strategy.set(strategyName, s);
    }

    getStrategy(zipCode: string): IShipper {

        const firstZipCodeLetter = zipCode[0];
        switch (firstZipCodeLetter){
            case ('4'):
            case ('5'):
            case ('6'): {
                return this.findStrategy(strategyName.chicagoSprintShipper);
            }
            case ('7'):
            case ('8'):
            case ('9'): {
                return this.findStrategy(strategyName.pacificParcelShipper);
            }
            default : {
                return this.findStrategy(strategyName.airEastShipper);
            }
        }
    }

    private findStrategy(strategyName: string): IShipper {
        const strategy = this.strategy.get(strategyName);
        if(!strategy) {
            throw Error(`Strategy wasn't set`);
        }

        return strategy;
    }
}

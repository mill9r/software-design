import {State} from "./state";
import {Context} from "./strategy/context";
import {ChicagoSprintShipper} from "./strategy/chicago-sprint-shipper";
import {PacificParcelShipper} from "./strategy/pacific-parcel-shipper";
import {AirEastShipper} from "./strategy/air-east-shipper";

export class Shipment {
  private state: State;
  constructor(state: State, private context: Context) {
      this.state = state;
  }
  public getShipmentId(): string {
      return `${this.state.shipmentId}`;
  };

  public ship(): number {
      const firstZipCodeLetter = this.state.fromZipCode[0];
     switch (firstZipCodeLetter){
         case ('4'):
         case ('5'):
         case ('6'): {
             this.context.setStrategy(new ChicagoSprintShipper());
             return this.context.executeStrategy(this.state.weight);
         }
         case ('7'):
         case ('8'):
         case ('9'): {
             this.context.setStrategy(new PacificParcelShipper());
             return this.context.executeStrategy(this.state.weight);
         }
         default : {
             this.context.setStrategy(new AirEastShipper());
             return this.context.executeStrategy(this.state.weight);
         }
     }
  }

  public shipStep1(): string{
      return this.state.toString();
  }
}

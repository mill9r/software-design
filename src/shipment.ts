import {State} from "./state";
import {Context} from "./strategy/context";

export class Shipment {
  private state: State;
  constructor(state: State, private context: Context) {
      this.state = state;
  }
  public getShipmentId(): string {
      return `${this.state.shipmentId}`;
  };

  public ship(): number {
     return this.context.getStrategy(this.state.fromZipCode).getCost(this.state.weight)
  }

  public shipStep1(): string{
      return this.state.toString();
  }
}

import {State} from "./state";
import {Shipment} from "./shipment";

export class Gui {
    on(eventType: string, callback:(state: State) => void):void {};
    trigger(eventType: string,state: Shipment): void {}
}

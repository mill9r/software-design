import {State} from "../src/state";
import {ShipmentIdGenerator} from "../src/shipment-id-generator";
import {Shipment} from "../src/shipment";
import {IShipper} from "../src/strategy/shipper";
import {Context} from "../src/strategy/context";


describe('Shipment', () => {
  it('ship', () => {
    const state = new State(
        ShipmentIdGenerator.getShipmentId(),
        'Minsk, Esenina 123',
        'Wroclaw, Tadeusza 143',
        '20345',
        '40549',
        100
    )
    const context = new Context();
    const shipment = new Shipment(state, context);

    expect(ShipmentIdGenerator.getCurrentId().toString()).toEqual(shipment.getShipmentId());

    expect(shipment.shipStep1()).toEqual(`${ShipmentIdGenerator.getCurrentId()} was sent from Wroclaw, Tadeusza 143: 40549 to Minsk, Esenina 123: 20345.
         The cost is ${3900}`)
  });
});

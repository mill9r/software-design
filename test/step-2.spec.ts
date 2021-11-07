import {State} from "../src/state";
import {ShipmentIdGenerator} from "../src/shipment-id-generator";
import {Shipment} from "../src/shipment";
import {Context} from "../src/strategy/context";


describe('Shipment strategy ChicagoSprintShipper', () => {
    it('ship', () => {
        const context = new Context();

        const state = new State(
            ShipmentIdGenerator.getShipmentId(),
            'Minsk, Esenina 123',
            'Wroclaw, Tadeusza 143',
            '20345',
            '40549',
            100
        )

        const shipment = new Shipment(state, context);

        expect(shipment.ship()).toEqual(4200)
    });
});

describe('Shipment strategy AirEastShipper', () => {
    it('ship', () => {
        const context = new Context();

        const state = new State(
            ShipmentIdGenerator.getShipmentId(),
            'Minsk, Esenina 123',
            'Wroclaw, Tadeusza 143',
            '20345',
            '10549',
            100
        )

        const shipment = new Shipment(state, context);

        expect(shipment.ship()).toEqual(3900)
    });
});


describe('Shipment strategy PacificParcelShipper', () => {
    it('ship', () => {
        const context = new Context();

        const state = new State(
            ShipmentIdGenerator.getShipmentId(),
            'Minsk, Esenina 123',
            'Wroclaw, Tadeusza 143',
            '20345',
            '80549',
            100
        )

        const shipment = new Shipment(state, context);

        expect(shipment.ship()).toEqual(5100)
    });
});


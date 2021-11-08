import {State} from "../src/state";
import {ShipmentIdGenerator} from "../src/shipment-id-generator";
import {Shipment} from "../src/shipment";
import {Context, strategyName} from "../src/strategy/context";
import {AirEastShipper} from "../src/strategy/air-east-shipper";
import {PacificParcelShipper} from "../src/strategy/pacific-parcel-shipper";
import {ChicagoSprintShipper} from "../src/strategy/chicago-sprint-shipper";


describe('Shipment strategy ChicagoSprintShipper', () => {
    it('ship', () => {
        const context = new Context();
        context.setStrategy(strategyName.airEastShipper,new AirEastShipper());
        context.setStrategy(strategyName.pacificParcelShipper,new PacificParcelShipper());
        context.setStrategy(strategyName.chicagoSprintShipper,new ChicagoSprintShipper());

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
        context.setStrategy(strategyName.airEastShipper,new AirEastShipper());
        context.setStrategy(strategyName.pacificParcelShipper,new PacificParcelShipper());
        context.setStrategy(strategyName.chicagoSprintShipper,new ChicagoSprintShipper());

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
        context.setStrategy(strategyName.airEastShipper,new AirEastShipper());
        context.setStrategy(strategyName.pacificParcelShipper,new PacificParcelShipper());
        context.setStrategy(strategyName.chicagoSprintShipper,new ChicagoSprintShipper());

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


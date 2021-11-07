export class ShipmentIdGenerator {
    private static shipmentId = 0;
    public static getShipmentId(): number {
        return ++ShipmentIdGenerator.shipmentId;
    }

    public static getCurrentId(): number {
        return ShipmentIdGenerator.shipmentId;
    }
}

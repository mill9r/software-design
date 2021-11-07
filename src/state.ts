export class State {
    private static readonly zipCodeLength = 5
    private static readonly perOuncePrice = 39;

    public toZipCode: string;
    public fromZipCode: string;

    constructor(
        public shipmentId: number,
        public toAddress: string,
        public fromAddress: string,
        toZipCode: string,
        fromZipCode: string,
        public weight: number,
        public marks?: Array<string>
    ){
        if(toZipCode.length !== State.zipCodeLength || fromZipCode.length !== State.zipCodeLength) {
            throw Error(`zip code length doesn't match ${State.zipCodeLength}`)
        }

        this.toZipCode = toZipCode;
        this.fromZipCode = fromZipCode;
    }

    toString(): string {
        return `${this.shipmentId} was sent from ${this.fromAddress}: ${this.fromZipCode} to ${this.toAddress}: ${this.toZipCode}.
         The cost is ${this.weight * State.perOuncePrice}`
    }
}

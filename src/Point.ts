const defaultPoint = {
    x: 0,
    y: 0
}

export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        if (!x && !y) {
            this.x = 0;
            this.y = 0;
        }

        if (typeof x === 'number' && typeof y === 'number') {
            this.x = x;
            this.y = y;
        }
    }

    public distance(): number
    public distance(other: Point): number
    public distance(xOrOther?: number | Point, y?: number): number {
        if (xOrOther instanceof Point) {
            return this.calculateDistance(this.x, this.y, xOrOther.x, xOrOther.y);
        }
        if (typeof xOrOther === 'number' && typeof y === 'number') {
            return this.calculateDistance(this.x, this.y, xOrOther, y);
        }
        if (!xOrOther && !y) {
            return this.calculateDistance(this.x, this.y, defaultPoint.x, defaultPoint.y);
        }
    }


    public toString(): string {
        return `(${this.x}, ${this.y})`
    }

    private calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
    }
}

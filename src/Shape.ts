import {Point} from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Array<Point>;

    constructor(points: Array<Point>);
    constructor(points: Array<Point>, color?: string, filled?: boolean);
    constructor(points: Array<Point>, color?: string, filled?: boolean) {
        // fast fail
        if (points.length < 3) {
            throw Error('Shape should contains at least 3 points');
        }
        if (typeof filled === 'undefined' && typeof color === 'undefined') {
            this.points = points;
            this.filled = true
            this.color = 'green';
        } else {
            this.points = points;
            this.filled = filled;
            this.color = color;
        }
    }

    public toString(): string {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.points.join(', ')}.`
    }

    public getPerimeter(): number {
        return this.points.reduce((acc, point, index, array) => {
            if (index !== array.length - 1) {
                acc = acc + point.distance(array[index + 1]);
            } else {
                acc = acc + point.distance(array[0]);
            }
            return acc
        }, 0)
    }

    abstract getType(): string;
}

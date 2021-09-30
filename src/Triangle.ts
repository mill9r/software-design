import {Shape} from './Shape';
import {Point} from "./Point";

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point);
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean);
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        super([point1, point2, point3], color, filled);
    }

    public toString(): string {
        const firstPoint = `${this.points[0].toString()}`;
        const secondPoint = `${this.points[1].toString()}`;
        const thirdPoint = `${this.points[2].toString()}`;
        return `Triangle[v1=${firstPoint},v2=${secondPoint},v3=${thirdPoint}]`
    }

    getType(): string {
        const firstSide = this.points[0].distance(this.points[1]);
        const secondSide = this.points[1].distance(this.points[2]);
        const thirdSide = this.points[2].distance(this.points[0]);
        if (this.checkIfTwoSidesEqual(firstSide, secondSide)
            && this.checkIfTwoSidesEqual(firstSide, thirdSide)
        ) {
            return 'equilateral triangle';
        }
        if (this.checkIfTwoSidesEqual(firstSide, secondSide)
            || this.checkIfTwoSidesEqual(firstSide, thirdSide)
            || this.checkIfTwoSidesEqual(secondSide, thirdSide)
        ) {
            return 'isosceles triangle';
        }
        return 'scalene triangle';
    }

    private checkIfTwoSidesEqual(first: number, second: number): boolean {
        return first === second
    }
}

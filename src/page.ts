export class Page {
    constructor(public pageNumber: number, public pageType: string, public pageMaterials: string) {}

    public toString(): string {
        return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterials}`;
    }
}

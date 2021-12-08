class SingleCurrencyModel {
    private subject = new Subject();
    private exchangeState = {
        eurToUsd: {
            fromCurrency: 0,
            toCurrency: 0,
            htmlId: ''
        },
        eurToRub: {
            fromCurrency: 0,
            toCurrency: 0,
            htmlId: ''
        }
    }

    public getState(): Subject {
        return this.subject;
    }

    public updateState(key: string, exchangedCourse: number, originCourse: number, id: string): void {
        this.subject.next(updateCurrency(key, exchangedCourse, originCourse, this.exchangeState, id));
    }
}

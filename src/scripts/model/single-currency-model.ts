class SingleCurrencyModel implements Exchange {
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

    public getState$(): Subject {
        return this.subject;
    }

    public getStateValue(): State {
        return this.exchangeState;
    }

    public updateState(state: State): void {
        console.log(state)
        this.exchangeState = {...state};
        this.subject.next(this.exchangeState);
    }
}

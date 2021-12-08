class SharedCurrencyModel implements Exchange {
    private subject = new Subject();
    private exchangeState = {
        eurToUsd: {
            fromCurrency: 0,
            toCurrency: 0,
            htmlId: 'usdInputControl'
        },
        eurToRub: {
            fromCurrency: 0,
            toCurrency: 0,
            htmlId: 'rubInputControl'
        }
    }

    public getState$(): Subject {
        return this.subject;
    }

    public getStateValue(): State {
        return this.exchangeState;
    }

    public updateState(state: State): void {
        this.exchangeState = {...state};
        console.log(this.exchangeState);
        this.subject.next(this.exchangeState);
    }
}

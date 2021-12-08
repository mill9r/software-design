const exchangeRate = {
    eurToUsd: 1.12,
    eurToRub: 83
}

class InputCurrencyController {
    public mode = false;
    public isShareMode = false;
    private state$: Subject = new Subject();
    private model: Exchange;

    constructor(private inputContext: InputContext) {

        this.model = this.inputContext.getStrategy(InputStrategy.singleInput)

        const euro$ = Observable.fromEvent($id('euroInputControl'), 'input');
        euro$
            .map((value: any) => {
                const euroValue = Number(value.target.value);
                this.model.updateState(adaptCurrency(this.isShareMode, 'eurToUsd', euroValue, this.model.getStateValue(), exchangeRate, 'usdInputControl'));
            })
            .subscribe({
                next() {
                }
            });

        const rub$ = Observable.fromEvent($id('euroInputControl1'), 'input');
        rub$
            .map((value: any) => {
                const rubValue = Number(value.target.value);
                this.model.updateState(adaptCurrency(this.isShareMode, 'eurToRub', rubValue, this.model.getStateValue(), exchangeRate, 'rubInputControl'));
            })
            .subscribe({
                next() {
                }
            });

        this.updateSubscription(this.model);
    }

    public getState(value: boolean): void {
        console.log('isShareMode:', value)
        this.isShareMode = value;
        this.model = this.isShareMode ? this.inputContext.getStrategy(InputStrategy.sharedInput) : this.inputContext.getStrategy(InputStrategy.singleInput);
        this.updateSubscription(this.model);
        console.log(this.model);
    }


    private updateSubscription(model: Exchange): void {
        this.state$ = model.getState$();

        this.state$
            .map((state: State) => updateView(state, this.mode))
            .subscribe({
                next() {
                }
            })
    }
}

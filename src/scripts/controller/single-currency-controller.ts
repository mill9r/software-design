const exchangeRate = {
    eurToUsd: 1.12,
    eurToRub: 83
}

class SingleCurrencyController {
    public mode = false;
    public isShareMode = false;
    private state$: Subject;

    constructor(private model: SingleCurrencyModel) {

        const euro$ = Observable.fromEvent($id('euroInputControl'), 'input');
        euro$
            .map((value: any) => {
                const euroValue = Number(value.target.value);
                const exchanged = euroValue * exchangeRate.eurToUsd;
                model.updateState('eurToUsd', exchanged, euroValue, 'usdInputControl');
            })
            .subscribe({
                next() {
                }
            });

        const rub$ = Observable.fromEvent($id('euroInputControl1'), 'input');
        rub$
            .map((value: any) => {
                const rubValue = Number(value.target.value);
                const exchanged = rubValue * exchangeRate.eurToRub;
                model.updateState('eurToRub', exchanged, rubValue, 'rubInputControl');
            })
            .subscribe({
                next() {
                }
            });

        this.state$ = model.getState();

        this.state$
            .map((state: State) => updateView(state))
            .subscribe({
                next() {
                }
            })
    }


    public getState(value: boolean): void {
        this.isShareMode = value;
    }

    // key, value
    private applyShareMode(keys: State, value: number): void {
        const result = Object.keys(keys)
        // this.model.updateAllFieldsOnModel()
    }
}

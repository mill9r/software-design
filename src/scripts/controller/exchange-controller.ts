const exchangeRate = {
    eurToUsd: 1.12,
    eurToRub: 83
}

class ExchangeController {
    public mode = false;
    public isShareMode = false;
    private view: ExchangeView;
    private state$: Subject = new Subject();
    private model: Exchange;

    constructor(private modelContext: ModelContext,
                private viewContext: ViewContext,
                private containerId: string,
                private defaultViewStrategy: string,
                private defaultModelStrategy: string
    ) {

        this.view = viewContext.getStrategy(defaultViewStrategy);
        this.view.drawLayout(this.containerId);
        this.model = this.modelContext.getStrategy(defaultModelStrategy)
        this.updateModelSubscriptionRef(this.model);
        this.updateViewInputRef(defaultModelStrategy);
        this.updateStateRef();
    }


    public switchView(state: boolean): void {
        if (state) {
            this.view = this.viewContext.getStrategy(ViewStrategy.rangeView);
        } else {
            this.view = this.viewContext.getStrategy(ViewStrategy.inputView);
        }
        this.view.drawLayout(this.containerId);
        this.updateStateRef();
        this.updateViewInputRef(this.defaultModelStrategy);
    }

    private updateStateRef() {
        this.view.getState$()
            .map((state: string) => {
                this.model = this.modelContext.getStrategy(state);

                this.updateModelSubscriptionRef(this.model);
                this.updateViewInputRef(state)
                return state;
            })
            .subscribe(
                {
                    next(e) {
                    }
                }
            )
    }

    private updateViewInputRef(inputStrategy: string) {
        const euro$ = Observable.fromEvent($id('euroInputControl'), 'input');
        euro$
            .map((value: any) => {
                const euroValue = Number(value.target.value);
                this.model.updateState(adaptCurrency(inputStrategy, 'eurToUsd', euroValue, this.model.getStateValue(), exchangeRate, 'usdInputControl', 'euroInputControl'));
            })
            .subscribe({
                next() {
                }
            });

        const rub$ = Observable.fromEvent($id('euroInputControl1'), 'input');
        rub$
            .map((value: any) => {
                const rubValue = Number(value.target.value);
                this.model.updateState(adaptCurrency(inputStrategy, 'eurToRub', rubValue, this.model.getStateValue(), exchangeRate, 'rubInputControl', 'euroInputControl1'));
            })
            .subscribe({
                next() {
                }
            })
    }

    private updateModelSubscriptionRef(model: Exchange): void {
        this.state$ = model.getState$();

        this.state$
            .map((state: State) => this.view.updateLayout(state, this.mode))
            .subscribe({
                next() {
                }
            })
    }
}

abstract class ExchangeView {
    protected state = new Subject();

    protected getSelectedState(inputName: string): string {
        const exchangeMode = document.querySelectorAll(inputName);
        let selectedValue = '';
        for (const node of exchangeMode) {
            const inputEl = node as HTMLInputElement;
            if (inputEl.checked) {
                selectedValue = inputEl.value;
                break;
            }
        }
        return selectedValue
    }

    public getState$(): Subject {
        return this.state;
    }

    protected updateState(state: boolean): void {
        this.state.next(state);
    }

    protected startChangeModeSubscription(input: string, radioButtonsGroup: string, radioGroupName: string): void {
        Observable.fromEvent($id(input), 'change')
            .map(() => {
                const selectedValue = this.getSelectedState(radioButtonsGroup);
                this.updateState(selectedValue === radioGroupName);
            })
            .subscribe({
                next() {
                }
            })
    }

    public abstract drawLayout(id: string): void;
    public abstract updateLayout(items: State, isHtmlValueIgnored?: boolean): void;
}

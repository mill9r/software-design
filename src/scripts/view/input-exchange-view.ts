class InputExchangeView extends ExchangeView {
    private template = `
    <section>
        <h2>Apply converted value to all currencies?</h2>
        <form id="inputExchangeModeForm" name="exchangeMode">
            <input type="radio" value="sharedInput" id="yesLabel" name="shareInput"><label
                for="yesLabel">Yes</label>
            <input type="radio" value="singleInput" id="noLabel" name="shareInput" checked><label
                for="noLabel">No</label>
        </form>
    </section>
    <section>
        <h2>EUR to USD section</h2>
        <div>
            <label for="euroInputControl">EUR</label>
            <input id="euroInputControl" type="number" value="">
        </div>
        <div>
            <label for="usdInputControl">USD</label>
            <input id="usdInputControl" type="number" value="">
        </div>
        <h2>EUR to RUB section</h2>
        <div>
            <label for="euroInputControl1">EUR</label>
            <input id="euroInputControl1" type="number" value="">
        </div>
        <div>
            <label for="rubInputControl">RUB</label>
            <input id="rubInputControl" type="number" value="">
        </div>
    </section>`


    constructor() {
        super();
    }

    public drawLayout(id: string): void {
        deleteChildNodes(id);
        setView(stringToHtml(this.template), id);
        this.startChangeModeSubscription('inputExchangeModeForm', 'input[name="shareInput"]');
    }

    public updateLayout(items: State, isHtmlValueIgnored?: boolean): void {
        updateView(items, isHtmlValueIgnored)
    }
}

class RangeExchangeView extends ExchangeView {
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
            <div>
                EUR: <span id="euroInputControl_value"></span>
            </div>
            <label for="euroInputControl">EUR</label>
            <input id="euroInputControl" type="range" value="" max="100">
        </div>
        <div>
            <div>
                USD: <span id="usdInputControl_value"></span>
            </div>
            <label for="usdInputControl">USD</label>
            <input id="usdInputControl" type="range" value="" max="200">
        </div>
        <h2>EUR to RUB section</h2>
        <div>
            <div>
                EUR: <span id="euroInputControl1_value"></span>
            </div>
            <label for="euroInputControl1">EUR</label>
            <input id="euroInputControl1" type="range" value="" max="100">
        </div>
        <div>
            <div>
                RUB: <span id="rubInputControl_value"></span>
            </div>
            <label for="rubInputControl">RUB</label>
            <input id="rubInputControl" type="range" value="" max="100000">
        </div>
    </section>`

    constructor() {
        super();
    }


    public drawLayout(id: string): void{
        deleteChildNodes(id);
        setView(stringToHtml(this.template), id);
        this.startChangeModeSubscription('inputExchangeModeForm', 'input[name="shareInput"]');
    }

    public updateLayout(items: State, isHtmlValueIgnored?: boolean): void {
        updateRangeView(items, isHtmlValueIgnored)
    }
}

class ViewContext {
    private strategy = new Map<string, ExchangeView>();

    public setStrategy(strategyName: string, s: ExchangeView) {
        this.strategy.set(strategyName, s);
    }

    public getStrategy(strategyName: string): ExchangeView {
        const strategy = this.strategy.get(strategyName);
        if (!strategy) {
            throw Error(`Strategy wasn't set`);
        }

        return strategy;
    }
}

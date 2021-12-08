class InputContext {
    private strategy = new Map<string, Exchange>();

    public setStrategy(strategyName: string, s: Exchange) {
        this.strategy.set(strategyName, s);
    }

    public getStrategy(strategyName: string): Exchange {
        const strategy = this.strategy.get(strategyName);
        if (!strategy) {
            throw Error(`Strategy wasn't set`);
        }

        return strategy;
    }
}

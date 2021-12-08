function $id(id: string): HTMLInputElement {
    const element = document.getElementById(id);
    if (!element) {
        throw Error('HTMLElement was not found!')
    }

    return element as HTMLInputElement;
}

function updateView(items: State): void {
    Object.keys(items).forEach(
        key => {
            const htmlValue = (items[key] as ExchangeCurrency).htmlId;
            const currencyValue = (items[key] as ExchangeCurrency).toCurrency;

            if (isNotEmpty(htmlValue) && isNotEmpty(currencyValue)) {
                $id(htmlValue).value = String(currencyValue);
            }
        }
    )
}

function isNotEmpty(value: string | number): boolean {
    return !!value;
}

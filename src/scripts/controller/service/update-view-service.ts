function $id(id: string): HTMLInputElement {
    const element = document.getElementById(id);
    if (!element) {
        throw Error('HTMLElement was not found!')
    }

    return element as HTMLInputElement;
}

function updateView(items: State, isHtmlValueIgnored?:  boolean): void {
    Object.keys(items).forEach(
        key => {
            const htmlValue = (items[key] as ExchangeCurrency).htmlId;
            const currencyValue = (items[key] as ExchangeCurrency).toCurrency;

            if ((isHtmlValueIgnored || isNotEmpty(htmlValue)) && isNotEmpty(currencyValue)) {
                $id(htmlValue).value = convertToValidHtmlInput(currencyValue);
            }
        }
    )
}

function isNotEmpty(value: string | number): boolean {
    return !!value;
}

function convertToValidHtmlInput(value:number): string {
    return String(toFixedAfterDecimalPoint(value))
}

function toFixedAfterDecimalPoint(number: number, digits = 2): number {
    return Number(number.toFixed(digits));
}

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) =>
    obj[key];

function stringToHtml(htmlString: string): HTMLElement {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body;
}

function deleteNode(node: HTMLElement): void {
    node.remove();
}

function deleteChildNodes(id: string): void {
    try {
        const element = $id(id);
        while (element.firstChild) {
            if(element && element.lastChild) {
                element.removeChild(element.lastChild);
            }
        }
    } catch (e) {
        console.log('Warning:', e);
    }
}

function setView(node: HTMLElement, id: string): void {
    $id(id).append(node);
}

function $id(id: string): HTMLInputElement {
    const element = document.getElementById(id);
    if (!element) {
        throw Error('HTMLElement was not found!')
    }

    return element as HTMLInputElement;
}

function updateView(items: State, isHtmlValueIgnored?: boolean): void {
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

function updateRangeView(items: State, isHtmlValueIgnored?: boolean): void {
    Object.keys(items).forEach(
        key => {
            const htmlValue = (items[key] as ExchangeCurrency).htmlId;
            const fromHtmlId = (items[key] as ExchangeCurrency).fromHtmlId;
            const currencyValue = (items[key] as ExchangeCurrency).toCurrency;
            const initialCurrencyValue = (items[key] as ExchangeCurrency).fromCurrency;
            if ((isHtmlValueIgnored || isNotEmpty(htmlValue)) && isNotEmpty(currencyValue)) {
                $id(htmlValue).value = convertToValidHtmlInput(currencyValue);
                $id(`${htmlValue}_value`).innerText = convertToValidHtmlInput(currencyValue);

                if (fromHtmlId) {
                    $id(`${fromHtmlId}_value`).innerText = convertToValidHtmlInput(initialCurrencyValue);
                }
            }
        }
    )
}

function isNotEmpty(value: string | number): boolean {
    return !!value;
}

function convertToValidHtmlInput(value: number): string {
    return String(toFixedAfterDecimalPoint(value))
}

function toFixedAfterDecimalPoint(number: number, digits = 2): number {
    return Number(number.toFixed(digits));
}

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) =>
    obj[key];


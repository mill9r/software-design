interface ExchangeCurrency {
    fromCurrency: number;
    toCurrency: number;
    htmlId: string;
}

interface IObjectKeys {
    [key: string]: string | number | ExchangeCurrency;
}

interface State extends IObjectKeys{
    eurToUsd: ExchangeCurrency;
    eurToRub: ExchangeCurrency;
}

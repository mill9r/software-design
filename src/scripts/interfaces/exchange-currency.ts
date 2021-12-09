interface ExchangeCurrency {
    fromCurrency: number;
    toCurrency: number;
    htmlId: string;
    fromHtmlId?: string;
}

interface IObjectKeys {
    [key: string]: string | number | ExchangeCurrency;
}

interface State extends IObjectKeys{
    eurToUsd: ExchangeCurrency;
    eurToRub: ExchangeCurrency;
}

interface ExchangeRate {
    eurToUsd: number;
    eurToRub: number;
}

type exchangeRateType = keyof ExchangeRate;

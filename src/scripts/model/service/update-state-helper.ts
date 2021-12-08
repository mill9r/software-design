function adaptCurrency(shareMode: boolean, key: string, originCourse: number, state: State, exchangeRate: ExchangeRate, htmlId: string): State {

    if (!shareMode) {
        return adaptSingleCurrency(key, originCourse, state, exchangeRate, htmlId)
    }

    return updateCurrencyForAll(originCourse, exchangeRate, state)
}

function adaptSingleCurrency(key: string, originCourse: number, state: State, exchangeRate: ExchangeRate, htmlId: string): State {
    return {
        ...state,
        [key]: {
            fromCurrency: originCourse,
            toCurrency: toFixedAfterDecimalPoint(originCourse * getKeyValue(exchangeRate)(key as exchangeRateType), 2),
            htmlId
        }
    };
}

function updateCurrencyForAll(originCourse: number, exchangeRate: ExchangeRate, state: State): State {
    const updatedState  = Object.keys(exchangeRate).reduce((acc: any, key: string) => {
            const exchangedValue = toFixedAfterDecimalPoint(getKeyValue(exchangeRate)(key as exchangeRateType) * originCourse);
            const tempState = getKeyValue(state)(key as exchangeRateType) as ExchangeCurrency
            tempState.toCurrency = exchangedValue;
            return {
                ...acc,
                [key] : tempState
            }
        }, {})

    return updatedState;
}

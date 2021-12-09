function adaptCurrency(shareMode: string, key: string, originCourse: number, state: State, exchangeRate: ExchangeRate, htmlId: string, fromHtmlId?: string): State {
    if (shareMode === InputStrategy.singleInput) {
        return adaptSingleCurrency(key, originCourse, state, exchangeRate, htmlId, fromHtmlId)
    }

    return updateCurrencyForAll(key, originCourse, exchangeRate, state, fromHtmlId)
}

function adaptSingleCurrency(key: string, originCourse: number, state: State, exchangeRate: ExchangeRate, htmlId: string, fromHtmlId?: string): State {
    return {
        ...state,
        [key]: {
            fromCurrency: originCourse,
            toCurrency: toFixedAfterDecimalPoint(originCourse * getKeyValue(exchangeRate)(key as exchangeRateType), 2),
            htmlId,
            fromHtmlId
        }
    };
}

function updateCurrencyForAll(stateKey: string, originCourse: number, exchangeRate: ExchangeRate, state: State, fromHtmlId?: string): State {
    const updatedState = Object.keys(exchangeRate).reduce((acc: any, key: string) => {
        const exchangedValue = toFixedAfterDecimalPoint(getKeyValue(exchangeRate)(key as exchangeRateType) * originCourse);
        const tempState = tryUpdateState(getKeyValue(state)(key as exchangeRateType) as ExchangeCurrency, stateKey, key, originCourse, fromHtmlId);
        tempState.toCurrency = exchangedValue;
        return {
            ...acc,
            [key]: tempState
        }
    }, {})
    return updatedState;
}

function tryUpdateState(state: ExchangeCurrency, stateKey: string, key: string, originCourse: number, fromHtmlId?: string): ExchangeCurrency {
    const stateCopy = {...state};
    if (stateKey === key) {
        stateCopy.fromCurrency = originCourse;
        stateCopy.fromHtmlId = fromHtmlId;
    }
    return stateCopy;
}

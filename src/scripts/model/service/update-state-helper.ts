function updateCurrency(key: string, exchangedCourse: number, originCourse: number, state: State, htmlId: string): State {
    return {
        ...state,
        [key]: {
            fromCurrency: originCourse,
            toCurrency: exchangedCourse,
            htmlId
        }
    };
}

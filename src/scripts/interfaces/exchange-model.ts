interface Exchange {
    getState$: () => Subject;
    getStateValue: () => State;
    updateState: (state: State) => void;
}

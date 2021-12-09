interface Observer {
    next?: (value: any) => void;
    error?: (error: any) => void;
    complete?: () => void;
}

interface Subscription {
    unsubscribe(): void;
}

interface IObservable {
    subscribe(observer: Observer): Subscription;
}

class Observable implements IObservable{
    public _subscription: (observer:Observer) => Subscription;

    constructor(subscription: (observer:Observer) => Subscription) {
        this._subscription = subscription;
    }

    static fromEvent(dom: HTMLElement, eventName: string): Observable {
        return new Observable(function subscribe(observer: Observer): Subscription {
            const handler = (ev: any) => {
                if (observer && observer.next) {
                    observer.next(ev);
                }
            }
            dom.addEventListener(eventName, handler);

            return {
                unsubscribe() {
                    dom.removeEventListener(eventName, handler);
                }
            }
        })
    }

    subscribe(observer:Observer): Subscription{
        return this._subscription(observer);
    }

    map(projection: any): Observable {
        const self = this;
        return new Observable(function subscribe(observer: Observer): Subscription {
            const subscription = self.subscribe({
                next(v) {
                    if (observer && observer.next) {
                        observer.next(projection(v))
                    }
                },
                error(err) {
                    if (observer && observer.error) {
                        observer.error(err)
                    }

                },
                complete() {
                    if (observer && observer.complete) {
                        observer.complete();
                    }
                }
            });

            return subscription;
        })
    }

    filter(predicate: any): Observable {
        const self = this;
        return new Observable(function subscribe(observer: Observer): Subscription {
            const subscription = self.subscribe({
                next(v) {
                    if (observer && observer.next) {
                        if(predicate(v)) {
                            observer.next(v)
                        }
                    }
                },
                error(err) {
                    if (observer && observer.error) {
                        observer.error(err)
                    }

                },
                complete() {
                    if (observer && observer.complete) {
                        observer.complete();
                    }
                }
            });

            return subscription;
        })
    }
}

class Subject extends Observable {
    private observers: Set<Observer> = new Set();

    constructor() {
        super(function subscribe(observer: Observer): Subscription {
            // @ts-ignore
            const self = this;
            self.observers.add(observer);

            return {
                unsubscribe() {
                    self.observers.delete(observer)
                }
            }
        });
    }

    next(value?: any): void {
        for (let observer of [...this.observers]) {
            if (observer && observer.next) {
                observer.next(value);
            }
        }
    }

    error(value: any): void {
        for (let observer of [...this.observers]) {
            if (observer && observer.error) {
                observer.error(value);
            }
        }
    }

    complete(): void {
        for (let observer of [...this.observers]) {
            if (observer && observer.complete) {
                observer.complete();
            }
        }
    }
}

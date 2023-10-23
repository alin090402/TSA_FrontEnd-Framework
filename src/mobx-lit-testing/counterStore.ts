import { action, observable } from "mobx";

// create a mobx observable
class Counter {
    @observable
    public count = 0;

    @action
    public increment() {
        // eslint-disable-next-line no-plusplus
        this.count++;
    }
}

// create instance that can be shared across components
export const counter = new Counter();
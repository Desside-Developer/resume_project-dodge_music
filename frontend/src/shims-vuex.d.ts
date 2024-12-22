declare module 'vuex' {
    import { Store, StoreOptions } from 'vuex';
    export function createStore<S>(options: StoreOptions<S>): Store<S>;
}
import { Mixed, ReadonlyArrayC, TypeOf } from 'technoidentity-utils';
import { URLs } from './urls';
export interface Repository<T extends Record<string, any>, ID extends keyof T, V extends number | string = T[ID]> {
    all(): Promise<ReadonlyArray<T>>;
    create(value: Omit<T, ID>): Promise<T>;
    one(id: V): Promise<T>;
    edit(value: T): Promise<T>;
    remove(id: V): Promise<T>;
}
export interface APIArgs<RT extends Mixed, ID extends keyof TypeOf<RT>> {
    readonly baseURL: string;
    readonly value: RT;
    readonly id: ID;
    readonly resource: string;
    readonly listValue?: ReadonlyArrayC<RT>;
    readonly urls?: URLs;
}
export interface APIRepository<RT extends Mixed, ID extends keyof TypeOf<RT>> extends Repository<TypeOf<RT>, ID>, Required<APIArgs<RT, ID>> {
}
export declare function api<RT extends Mixed, ID extends keyof TypeOf<RT>>({ baseURL, value, id, resource, listValue, urls, }: APIArgs<RT, ID>): APIRepository<RT, ID>;
//# sourceMappingURL=api.d.ts.map
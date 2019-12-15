/// <reference types="react" />
import { Mixed, TypeOf } from 'technoidentity-utils';
export interface SimpleCrudProps<RT extends Mixed> {
    readonly baseURL: string;
    readonly value: RT;
    readonly id: keyof TypeOf<RT>;
    readonly resource?: string;
    readonly basePath?: string;
}
export declare const SimpleCrud: <T extends Mixed>(args: SimpleCrudProps<T>) => JSX.Element;
//# sourceMappingURL=SimpleCrud.d.ts.map
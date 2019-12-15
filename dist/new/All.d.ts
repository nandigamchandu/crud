import { API, APIQuery } from 'devfractal-api';
import React from 'react';
import { ObjC, Props, TypeOf } from 'technoidentity-utils';
export declare const ClientQuery: ObjC<{
    page: import("technoidentity-utils").IntFromStringC;
    limit: import("technoidentity-utils").IntFromStringC;
    asc: import("io-ts").StringC;
    desc: import("io-ts").StringC;
}, {}>;
export interface AllComponentProps<T> {
    readonly data: ReadonlyArray<T>;
    readonly page: number;
    onPageChange(page: number): void;
}
interface ChildrenProps<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>> {
    readonly api: API<Opt, Req, ID>;
    readonly list: React.FC<AllComponentProps<TypeOf<ObjC<Opt, Req>>>>;
    queryFn?(search: string): APIQuery<TypeOf<ObjC<Opt, Req>>>;
}
export interface AllComponentProps<T> {
    readonly data: ReadonlyArray<T>;
}
export interface AllProps<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>> extends ChildrenProps<Opt, Req, ID> {
    readonly path: string;
}
export declare function All<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>>({ path, ...props }: AllProps<Opt, Req, ID>): JSX.Element;
export {};
//# sourceMappingURL=All.d.ts.map
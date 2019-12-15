import { TypeOf } from 'technoidentity-utils';
declare const idRT: import("io-ts").UnionC<[import("io-ts").BrandC<import("io-ts").NumberC, import("io-ts").IntBrand>, import("io-ts").StringC]>;
declare type ID = TypeOf<typeof idRT>;
export interface URLs {
    all(): string;
    create(): string;
    one(id: ID): string;
    edit(id: ID): string;
    remove(id: ID): string;
}
interface URLsArgs {
    readonly baseURL: string;
    readonly resource: string;
    readonly paths?: string | readonly string[];
    readonly query?: string | Object;
}
export declare function apiURLs({ baseURL, // eg: 'https://localhost:3000'
resource, }: URLsArgs): URLs;
export {};
//# sourceMappingURL=urls.d.ts.map
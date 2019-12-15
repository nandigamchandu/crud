/// <reference types="react" />
import { Mixed, TypeOf } from 'technoidentity-utils';
import { APIRepository } from './api';
import { ComponentsResult } from './Components';
import { paths as ps } from './new';
export interface CrudProps<RT extends Mixed, ID extends keyof TypeOf<RT>> {
    readonly api: APIRepository<RT, ID>;
    readonly basePath: string;
    readonly paths?: ReturnType<typeof ps>;
    readonly components?: ComponentsResult;
}
export declare function Crud<RT extends Mixed, ID extends keyof TypeOf<RT>>({ basePath, api, paths, components, }: CrudProps<RT, ID>): JSX.Element;
//# sourceMappingURL=Crud.d.ts.map
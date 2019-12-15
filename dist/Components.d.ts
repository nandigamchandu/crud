import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Mixed, TypeOf } from 'technoidentity-utils';
import { APIRepository, Repository } from './api';
import { CrudViewsResult } from './Views';
interface ComponentsArgsBase<RT extends Mixed, ID extends keyof TypeOf<RT>, R extends Repository<TypeOf<RT>, ID> = Repository<TypeOf<RT>, ID>> {
    readonly api: R;
    readonly basePath: string;
    readonly Views?: CrudViewsResult<RT, ID>;
}
interface ComponentsArgs<RT extends Mixed, ID extends keyof TypeOf<RT>> extends ComponentsArgsBase<RT, ID> {
    readonly value: RT;
    readonly id: ID;
    readonly resource: string;
}
interface APIComponentsArgs<RT extends Mixed, ID extends keyof TypeOf<RT>> extends ComponentsArgsBase<RT, ID, APIRepository<RT, ID>> {
}
export interface ComponentsResult {
    readonly List: React.FC<RouteComponentProps>;
    readonly Create: React.FC<RouteComponentProps>;
    readonly Edit: React.FC<RouteComponentProps<{
        readonly id: string;
    }>>;
    readonly View: React.FC<RouteComponentProps<{
        readonly id: string;
    }>>;
}
export declare function components<RT extends Mixed, ID extends keyof TypeOf<RT>>(args: ComponentsArgs<RT, ID> | APIComponentsArgs<RT, ID>): ComponentsResult;
export {};
//# sourceMappingURL=Components.d.ts.map
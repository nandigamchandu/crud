import React from 'react';
import { Mixed, TypeOf } from 'technoidentity-utils';
export interface ListProps<T> {
    readonly data: ReadonlyArray<T>;
    readonly page: number;
    onPageChange(page: number): void;
}
export declare function listComponent<Spec extends Mixed>(spec: Spec, Component: React.FC<ListProps<TypeOf<Spec>>>): React.FC<ListProps<TypeOf<Spec>>>;
//# sourceMappingURL=ListComponent.d.ts.map
import { SimpleTableProps } from 'devfractal-simple';
import React from 'react';
export interface ActionsProps {
    readonly editTo: string;
    onDelete?(): void;
}
export declare const Actions: React.FC<ActionsProps>;
export interface CrudTableProps<T extends Record<string, any>, EK extends string, Select extends keyof T = keyof T> extends Pick<SimpleTableProps<T, EK, Select>, 'select' | 'override' | 'extra' | 'onRowClicked'> {
    readonly data: ReadonlyArray<T>;
    editTo(value: T): string;
    onDelete?(value: T): void;
}
export declare function CrudTable<T extends Record<string, any>, EK extends string>({ data, select, override, extra, editTo, onDelete, onRowClicked, }: CrudTableProps<T, EK>): JSX.Element;
//# sourceMappingURL=CrudTable.d.ts.map
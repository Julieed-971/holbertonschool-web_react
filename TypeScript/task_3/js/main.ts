/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
    firstName: "Silva",
    lastName: "Zoldyck",
}
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
    firstName: row.firstName,
    lastName: row.lastName,
    age: 53,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
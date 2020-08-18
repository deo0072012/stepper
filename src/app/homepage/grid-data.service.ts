import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor() { }

 
  columnDefs = [
    {headerName: 'Branch id', field: 'branchid', sortable: true, filter: true, checkboxSelection: true,},
    {headerName: 'Bankname', field: 'Bankname', sortable: true, filter: true, },
    {headerName: 'Utkarsh', field: 'utkarsh', sortable: true, filter: true},
    {headerName: 'Branch', field: 'branch', sortable: true, filter: true },
    {headerName: 'Mode', field: 'mode', sortable: true, filter: true},
    {headerName: 'Bank Branch Name', field: 'bankbranchname', sortable: true , filter: true},
    {headerName: 'Bank Branch code', field: 'bankbranchcode', sortable: true , filter: true},
  ];

  rowDataS = [
    { branchid: '1022', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: '1033', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '1024', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8},
    { branchid: '1026', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: '1056', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '1021', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8},
    { branchid: '1022', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: '8585', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '3125', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8},
    { branchid: '1027', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: 'Ford', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '156', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8}, 
    { branchid: '1029', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: 'Ford', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '7693', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8},
    { branchid: '1029', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: 'Ford', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '2165', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8}, 
    { branchid: '1035', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: 'Ford', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: 'Porsche', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8},
    { branchid: '1037', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: 'Ford', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '5412', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8}, 
    { branchid: '1040', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: '1890', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '2313', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8},
    { branchid: '1045', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: 'Ford', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '8945', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8}, 
    { branchid: '1036', Bankname: 'HDFC', utkarsh: 35000, branch: 'ramnagar', mode: 'draft', bankbranchname: 1990, bankbranchcode: 10},
    { branchid: '1654', Bankname: 'Bank Of cheque', utkarsh: 32000, branch: 'ramnagar', mode: 'cheque', bankbranchname: 1995, bankbranchcode: 12},
    { branchid: '2365', Bankname: 'Punjab National Bank', utkarsh: 72000,  branch: 'holasuru', mode: 'online', bankbranchname: 1996, bankbranchcode: 8},
  ];
  getcolumnDefs(){
    return this.columnDefs;
  }
  getrowData(){
    return this.rowDataS;
  }

}

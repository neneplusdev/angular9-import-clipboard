import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9-import-clipboard';
  copiedData: any = [];
  displayedColumns: any;

  pasteData(event:ClipboardEvent) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text');
    let row_data = pastedText.split('\n');
    let columns = row_data[0].split('\t');
    delete row_data[0];
    let data = [];
    this.copiedData = [];
    row_data.forEach((row_data, rowIndex) => {
      let row = {};
      if (row_data) {
        columns.forEach((a, index)=>{
          row[a]= row_data.split('\t')[index]
        });
        data.push(row);
      }
    })
    this.copiedData = data;
    this.displayedColumns = columns;
  }
}

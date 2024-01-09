// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css',
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}
  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar.open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable({
      columnnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });

    this.getData();
  }
  ngOnInit(): void {}

  getData(): void {
    console.log('getData()');

    var url =
      'https://openexchangerates.org/api/latest.json?app_id=b5200fa5d1a940c9a3f0b7199c34073d';
    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD : ' + idr2);
      var row = [1, 'USD', idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, 'en-US', '', 'SGD');
      console.log('SGD : ' + sgd2);
      row = [2, 'SGD', sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, 'en-US', '', 'BND');
      console.log('BND : ' + bnd2);
      row = [3, 'BND', bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, 'en-US', '', 'HKD');
      console.log('HKD : ' + hkd2);
      row = [4, 'HKD', hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, 'en-US', '', 'BTC');
      console.log('BTC : ' + btc2);
      row = [5, 'BTC', btc2];
      this._table1.row.add(row);

      var bdt = rates.IDR / rates.BDT;
      var bdt2 = formatCurrency(bdt, 'en-US', '', 'BDT');
      console.log('BDT : ' + bdt2);
      row = [6, 'BDT', bdt2];
      this._table1.row.add(row);

      var bwp = rates.IDR / rates.BWP;
      var bwp2 = formatCurrency(bwp, 'en-US', '', 'BWP');
      console.log('BWP : ' + bwp2);
      row = [7, 'BWP', bwp2];
      this._table1.row.add(row);

      var clf = rates.IDR / rates.CLF;
      var clf2 = formatCurrency(clf, 'en-US', '', 'CLF');
      console.log('CLF : ' + clf2);
      row = [8, 'CLF', clf2];
      this._table1.row.add(row);

      var bzd = rates.IDR / rates.BZD;
      var bzd2 = formatCurrency(bzd, 'en-US', '', 'BZD');
      console.log('BZD : ' + bzd2);
      row = [9, 'BZD', bzd2];
      this._table1.row.add(row);

      var bob = rates.IDR / rates.BOB;
      var bob2 = formatCurrency(bob, 'en-US', '', 'BOB');
      console.log('BOB : ' + bob2);
      row = [10, 'BOB', bob2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}

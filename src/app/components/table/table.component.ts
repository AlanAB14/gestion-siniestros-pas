import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Siniestro } from 'src/app/core/interfaces/siniestro.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableComponent implements AfterViewInit, OnInit{

  public dataSource = new MatTableDataSource([]);

  @Input() displayedColumns!: string[];
  columnsToDisplayWithExpand!: string[];

  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  expandedElement!: Siniestro | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private router: Router  ) { }

  ngOnInit(): void {
      this.columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setTableDataSource(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  goToSiniestro( siniestro: Siniestro ) {
    console.log(siniestro)
    const nroSiniestro = siniestro ? siniestro.NroSiniestro : null;
    this.router.navigate(['/siniestro', { id: nroSiniestro }])
  }

}

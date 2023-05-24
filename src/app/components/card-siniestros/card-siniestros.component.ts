import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SiniestroRes } from 'src/app/core/interfaces/siniestro.interface';

@Component({
  selector: 'app-card-siniestros',
  templateUrl: './card-siniestros.component.html',
  styleUrls: ['./card-siniestros.component.scss']
})
export class CardSiniestrosComponent {

  pageIndex = 0;
  pageSize = 5;
  
  @Input() dataSiniestros!: SiniestroRes[];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor( private changeDetectorRef: ChangeDetectorRef ) { }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();

  }
}

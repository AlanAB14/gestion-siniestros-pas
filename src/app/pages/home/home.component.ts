import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Rama, Siniestro } from 'src/app/core/interfaces/siniestro.interface';
import { SiniestrosService } from 'src/app/services/siniestros.service';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit{

  dataSiniestros: Siniestro[] = [];
  ramasData: Rama[] = [];
  displayedColumns = ['NroSiniestro', 'FechaOcurrencia', 'Asegurado', 'Riesgo', 'Rama'];
  formData: FormGroup = this.fb.group({
    rama: [0],
    siniestro: [''],
    poliza: [''],
    riesgo: [''],
    socio: [''],
    nroReferencia: [''],
  })


  constructor( private siniestrosService: SiniestrosService,
               private fb: FormBuilder ) { }
  
  ngOnInit(): void {
    this.getRamas();
    this.getSiniestros();
  }

  getSiniestros() {
    this.siniestrosService.getSiniestros()
      .subscribe( (resp: Siniestro[]) => {
        console.log(resp);
        this.dataSiniestros = resp;
      })
  }

  getRamas() {
    this.siniestrosService.getRama()
      .subscribe( (resp: Rama[]) => {
        console.log(resp);
        this.ramasData = resp;
      })
  }

  searchData() {
    console.log(this.formData.value)
  }
}




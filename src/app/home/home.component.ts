import { Component } from '@angular/core';
import { ServiciosApiComponent } from '../servicios-api/servicios-api.component';
import { NgbAccordion, NgbPanel, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbAccordion, NgbPanel, NgbAccordionModule]
})

export class HomeComponent {

  pokearreglo: any[] = [];
  showAccordion: boolean = false;
  isEstadisticasAbiertas = false;
  isvalor = false;
  valorCard: any = "estadisticas";
  panelesActivos: string[] = [];
  tama: number = 0;
  pokebatalla: any[] = [];

  constructor(
    private ServiciosApiComponent: ServiciosApiComponent,
    private accordion: NgbAccordion,
    private panel: NgbPanel,
    private paneld: NgbAccordionModule,
  ) { }

  ngOnInit() {

    var valor = "";
    for (let i = 1; i < 152; i++) {
      this.ServiciosApiComponent.getPkemoEspe(i).subscribe((data: any) => {
        if (data.id >= 10) {
          valor = "0"
        }
        if (data.id <= 9) {
          valor = "00"
        }
        if (data.id > 99) {
          valor = ""
        }
        this.pokearreglo.push({
          imagen: "../../assets/imagenes/pokeImagenes/" + valor + data.id + ".png",
          nombre: data.name,
          id: data.id,
          tipos: data.types,
          stats: data.stats
        })
        this.pokearreglo.sort((a, b) => a.id - b.id);
      });
    }


    console.log(this.pokearreglo);
  }


  toggleEstadisticasdos(id: number, batalla: any) {
    const index = this.pokearreglo.findIndex(poke => poke.id === id);
    const panelId = `estadisticas${id}`;
    if (this.panelesActivos.includes(panelId)) {
      this.panelesActivos = this.panelesActivos.filter(id => id !== panelId);
      let index = this.pokebatalla.indexOf(id);
      if (index > -1) {
        this.pokebatalla.splice(index, 1);
      }
    } else {
      this.pokebatalla.push(batalla.id);
      this.panelesActivos.push(panelId);
    }
    this.tama = this.panelesActivos.length;
  }

  batalla() {
    for (let i = 0; i < this.pokebatalla.length; i++) {
      this.ServiciosApiComponent.getPKtype(this.pokebatalla[i]).subscribe((data: any) => {
        console.log(data.damage_relations)
      });

    }

  }








}



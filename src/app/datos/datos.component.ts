import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit{

  data: any[] = [];
  public page!: number;

  queryTypes: string[] = ["games", "characters", "places", "monsters", "bosses", "items", "dungeons"]

  constructor(private apiService: ApiService){
    console.log('El componente se ha creado');
  }

  option = '';

  llenarDatos(){
    this.apiService.getData(this.option).subscribe(data => {this.data = data.data
    console.log(this.data)})
  }

  ngOnInit(): void {
      console.log('El componente se ha inicializado');
  }




}

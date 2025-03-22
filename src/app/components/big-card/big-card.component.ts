import { Component, OnInit, Input} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  photoCover:string = "https://wallpapers.com/images/hd/iron-man-pictures-cfycee82exgsj73t.jpg"
  cardTitle:string ="NOVO HOMEM DE FERRO EM 3D"
  cardDescription:string= "Marvel Studios anunciam novo filme do Homem de Ferro em 3D"

  @Input()
  Id:string ="0"

  constructor(){

  }
  ngOnInit(): void {
      
  }

}

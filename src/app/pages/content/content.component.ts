import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../components/data/dataFake';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  
  photoCover:string = "https://recreio.com.br/media/_versions/marvel/tony_stark_capa_widelg.jpg"
  contentTitle:string ="TITULO"
  contentDescription:string="Ola mundo"
  private id:string = "0"

  ngOnInit(): void {

  }

  constructor(private route:ActivatedRoute){
    
  }
  
}

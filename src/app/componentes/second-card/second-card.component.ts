import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.css']
})
export class SecondCardComponent implements OnInit {
  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

  textoAcercaDe = "Ingeniero Químico. Doctor en Ingeniería Química pronto...";
  mostrarInput = "none";  

  onClick(){
    this.mostrarInput ="block";
  }

  cambiarTextoAcercaDe(valor: string){
    this.textoAcercaDe=valor;
  }
}


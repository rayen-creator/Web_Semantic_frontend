import { Component,OnInit } from '@angular/core';
import { Company } from 'src/app/core/models/company';
import { Contrat } from 'src/app/core/models/contrat';
import { ContratService } from 'src/app/core/services/Contrat.service';
@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

  selectedType: any = '';

  constructor(private contratService: ContratService) { }
  contrats: any[] = [];
  company:any;
  contrat:any="";
  ngOnInit(): void {
    this.contratService.getContrat().subscribe((data:any)=>{
     this.contrats = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
      console.warn("ff",this.contrats);

    })

  }

  getByType():void{
    this.contratService.getByType(this.selectedType).subscribe((data:any)=>{
      this.contrat=data;})
      console.log(this.contrat)
      this.contrats=[];

}}

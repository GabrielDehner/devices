import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts'; // Asegúrate de importar Highcharts de esta forma
import { HighchartsChartModule } from 'highcharts-angular';
import { DeviceService } from '../services/device.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temperature-widget',
  imports:[HighchartsChartModule, HttpClientModule, CommonModule],
  standalone: true,
  providers:[DeviceService],
  templateUrl: './temperature-widget.component.html',
  styleUrls: ['./temperature-widget.component.css'],
})
export class TemperatureWidgetComponent implements OnInit {
  constructor(private deviceService: DeviceService) {}

  deviceData: any;
  
  // Definimos chartOptions con una estructura básica
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line' // Tipo de gráfico: línea
    },
    title: {
      text: 'Temperature Data'
    },
    xAxis: {
      title: {
        text: 'Time'
      },
      categories: []  // Las categorías serán actualizadas con los datos de la API
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    series: [{
      name: 'Temperature',
      type: 'line', // Especifica el tipo de la serie (línea)
      data: []  // Las temperaturas serán actualizadas con los datos de la API
    }] as Highcharts.SeriesLineOptions[]
  };

  async ngOnInit() {
    // Llamar al servicio para obtener los datos
   try{

     this.deviceData = await  this.deviceService.getDeviceData();
     const temperaturas = this.deviceData?.map((t: any)=>t.data.temperatura)
     const dias = this.deviceData?.map((t: any)=>t.data.temperatura)
     
     // Asumiendo que la API devuelve un array de temperaturas en 'temperatures' y un índice de tiempo
     if (temperaturas) {
       // Generar categorías para el eje X (Tiempo, que puede ser 1, 2, 3...)
       const timeCategories = temperaturas.map((_: any, index: any) => index + 1); // Usamos el índice + 1 para tiempo
       // Asignar los valores al gráfico (esto se hará automáticamente en el HTML)
       (<any>this.chartOptions).xAxis.categories = timeCategories;  // Actualizar categorías con el tiempo
       (<any>this.chartOptions).series[0].data = temperaturas;  // Actualizar los datos de la serie
      }
    }catch(err){
     console.error(err)
    }
  }

  isEnabled(){
    return (<any> this.chartOptions)?.series?.[0]?.data?.length
  }

  Highcharts = Highcharts;  // Asignar Highcharts al componente
}

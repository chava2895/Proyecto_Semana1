import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedorautos',
  templateUrl: './contenedorautos.component.html',
  styleUrls: ['./contenedorautos.component.css']
})
export class ContenedorautosComponent implements OnInit {

  constructor() { }
 // Arreglo que contiene todos los autos disponibles
 Autos = [
  { Name: "Auto 1", Portada: "https://www.grangermotors.com/assets/misc/5897/719777.jpg", src: "/pelicula", Clasificacion: "Auto", Tipo: 1, Destacado: true },
  { Name: "Auto 2", Portada: "https://acs2.blob.core.windows.net/imgcatalogo/xl/VA_889d3f69a95d4a44b6a916769a61f3f1.jpg", src: "", Clasificacion: "Auto", Tipo: 1, Destacado: false },
  { Name: "Auto 3", Portada: "http://www.elfagr.com/upload/photo/news/237/3/600x338o/698.jpg?q=2", src: "", Clasificacion: "Camioneta", Tipo: 2, Destacado: true },
  { Name: "Auto 4", Portada: "http://www.escobarford.com.ar/wp-content/uploads/2016/03/Destacado.png", src: "", Clasificacion: "Auto", Tipo: 1, Destacado: false },
  { Name: "Auto 5", Portada: "https://images.dealer.com/ddc/vehicles/2018/Ford/Expedition/SUV/trim_Platinum_24576d/color/White%20Platinum%20Metallic%20Tri-Coat-UG-210%2C206%2C206-640-en_US.jpg?impolicy=resize&w=650", src: "", Clasificacion: "Camioneta", Tipo: 2, Destacado: true },
  { Name: "Auto 6", Portada: "http://www.escobarford.com.ar/wp-content/uploads/2016/03/Destacado.png", src: "", Clasificacion: "Auto", Tipo: 1, Destacado: true },
  { Name: "Auto 7", Portada: "https://images.dealer.com/ddc/vehicles/2018/Ford/Expedition/SUV/trim_Platinum_24576d/color/White%20Platinum%20Metallic%20Tri-Coat-UG-210%2C206%2C206-640-en_US.jpg?impolicy=resize&w=650", src: "", Clasificacion: "Camioneta", Tipo: 2, Destacado: false },
  { Name: "Auto 8", Portada: "http://www.elfagr.com/upload/photo/news/237/3/600x338o/698.jpg?q=2", src: "", Clasificacion: "Camioneta" },
  { Name: "Auto 9", Portada: "http://www.escobarford.com.ar/wp-content/uploads/2016/03/Destacado.png", src: "", Clasificacion: "Auto", Tipo: 1, Destacado: true },
  { Name: "Auto 10", Portada: "https://images.dealer.com/ddc/vehicles/2018/Ford/Expedition/SUV/trim_Platinum_24576d/color/White%20Platinum%20Metallic%20Tri-Coat-UG-210%2C206%2C206-640-en_US.jpg?impolicy=resize&w=650", src: "", Clasificacion: "Auto", Tipo: 1, Destacado: false },
  { Name: "Auto 11", Portada: "http://www.escobarford.com.ar/wp-content/uploads/2016/03/Destacado.png", src: "", Clasificacion: "Camioneta", Tipo: 2, Destacado: false },
  { Name: "Auto 12", Portada: "https://images.dealer.com/ddc/vehicles/2018/Ford/Expedition/SUV/trim_Platinum_24576d/color/White%20Platinum%20Metallic%20Tri-Coat-UG-210%2C206%2C206-640-en_US.jpg?impolicy=resize&w=650", src: "", Clasificacion: "Camioneta", Tipo: 2, Destacado: true }
]

//arreglo que contendar el filtrado de los autos segun el boton precionado
//por default carga los autos destacados.
AutosFiltrados: Array<object> = this.AutosFiltrados = this.Autos.filter(x => x.Destacado == true);

//funcion que obtendra el valor del boton precionado para realizar el filtrado
CambioAutos(Tipo: string) {
  if (Tipo == "0") {
    this.AutosFiltrados = this.Autos.filter(x => x.Destacado == true);
    console.log("0")
  }
  else if (Tipo == "1") {
    this.AutosFiltrados = this.Autos.filter(x => x.Tipo == Number(Tipo));
    console.log("1" + this.AutosFiltrados)
  }
  else if (Tipo == "2") {
    this.AutosFiltrados = this.Autos.filter(x => x.Tipo == Number(Tipo));
    console.log("2" + this.AutosFiltrados)
  }
  else if (Tipo == "Todos") {
    this.AutosFiltrados = this.Autos;
    console.log("otro" + this.AutosFiltrados)
  }
}
  ngOnInit() {
  }

}

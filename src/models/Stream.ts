import { Categoria } from "./Categoria";

export class Stream {
  private categorias: Categoria[];

  constructor() {
    this.categorias = [];
  }

  public obtenerCategorias(): Categoria[] {
    return this.categorias;
  }

  public agregarCategoria(categoria: Categoria): void {
    this.categorias.push(categoria);
  }


  //Implementaciones

  public mostrarDetalleStream(): void {
    console.log("Detalle del Stream:");
    console.log("Categorías:");
    this.categorias.forEach((categoria) => {
      console.log("- " + categoria.obtenerNombre());
    });
  }

}

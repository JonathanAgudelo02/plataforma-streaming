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

  public eliminarCategoria(categoria: Categoria): void {
    const indice = this.categorias.indexOf(categoria);
    if (indice !== -1) {
      this.categorias.splice(indice, 1);
    }
  }
}

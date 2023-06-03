export class Categoria {
    private nombre: string;
    private descripcion: string;
    private imagen: string;
  
    constructor(nombre: string, descripcion: string, imagen: string) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagen = imagen;
    }
  
    public obtenerNombre(): string {
      return this.nombre;
    }
  
    public obtenerDescripcion(): string {
      return this.descripcion;
    }
  
    public obtenerImagen(): string {
      return this.imagen;
    }
  }
  
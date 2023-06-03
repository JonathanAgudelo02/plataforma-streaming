export class RedSocial {
    private nombre: string;
    private url: string;
  
    constructor(nombre: string, url: string) {
      this.nombre = nombre;
      this.url = url;
    }
  
    public obtenerNombre(): string {
      return this.nombre;
    }
  
    public obtenerUrl(): string {
      return this.url;
    }
  }
  
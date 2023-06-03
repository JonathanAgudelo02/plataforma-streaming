export class Empresa {
    private nombre: string;
    private nit: string;
  
    constructor(nombre: string, nit: string) {
      this.nombre = nombre;
      this.nit = nit;
    }
  
    public obtenerNombre(): string {
      return this.nombre;
    }
  
    public obtenerNit(): string {
      return this.nit;
    }
  }
  
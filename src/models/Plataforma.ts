import { Canal } from "./Canal";
import { Empresa } from "./Empresa";

export class Plataforma {
  private nombre: string;
  private logo: string;
  private descripcion: string;
  private empresaPatrocinadora: Empresa;
  private canales: Canal[];

  constructor(nombre: string, logo: string, descripcion: string, empresaPatrocinadora: Empresa) {
    this.nombre = nombre;
    this.logo = logo;
    this.descripcion = descripcion;
    this.empresaPatrocinadora = empresaPatrocinadora;
    this.canales = [];
  }

  public obtenerNombre(): string {
    return this.nombre;
  }

  public obtenerLogo(): string {
    return this.logo;
  }

  public obtenerDescripcion(): string {
    return this.descripcion;
  }

  public obtenerEmpresaPatrocinadora(): Empresa {
    return this.empresaPatrocinadora;
  }

  public obtenerCanales(): Canal[] {
    return this.canales;
  }

  public agregarCanal(canal: Canal): void {
    this.canales.push(canal);
  }

  public eliminarCanal(canal: Canal): void {
    const indice = this.canales.indexOf(canal);
    if (indice !== -1) {
      this.canales.splice(indice, 1);
    }
  }
}

import { Canal } from "./Canal";
import { Empresa } from "./Empresa";
import { Streamer } from "./Streamer";

export class Plataforma {
  private nombre: string;
  private logo: string;
  private descripcion: string;
  private empresaPatrocinadora: Empresa;
  private canales: Canal[];
  private streamers: Streamer[];

  constructor(nombre: string, logo: string, descripcion: string, empresaPatrocinadora: Empresa) {
    this.nombre = nombre;
    this.logo = logo;
    this.descripcion = descripcion;
    this.empresaPatrocinadora = empresaPatrocinadora;
    this.canales = [];
    this.streamers = [];
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

  //Implementaciones

  public static mostrarListadoPlataformas(plataformas: Plataforma[]): void {
    console.log("Listado de Plataformas:");
    plataformas.forEach((plataforma) => {
      console.log("- " + plataforma.obtenerNombre());
    });
  }

  public mostrarDetallePlataforma(): void {
    console.log("Detalles de la Plataforma:");
    console.log("Nombre: " + this.obtenerNombre());
    console.log("Logo: " + this.obtenerLogo());
    console.log("Descripción: " + this.obtenerDescripcion());
    console.log("Empresa Patrocinadora: " + this.obtenerEmpresaPatrocinadora().obtenerNombre());
  }

  public mostrarListadoCanales(): void {
    console.log("Listado de Canales de la Plataforma " + this.obtenerNombre() + ":");
    this.obtenerCanales().forEach((canal) => {
      console.log("- " + canal.obtenerNombre());
    });
  }

  public mostrarListadoStreamers(): void {
    console.log("Listado de Streamers de la Plataforma " + this.obtenerNombre() + ":");
    const streamers = new Set<Streamer>(); // Utilizamos un Set para evitar duplicados
    this.obtenerCanales().forEach((canal) => {
      streamers.add(canal.obtenerStreamer());
    });
    streamers.forEach((streamer) => {
      console.log("- " + streamer.obtenerNickname());
    });
  }

  public agregarCanal(canal: Canal): void {
    this.canales.push(canal);
  }

  public agregarStreamer(streamer: Streamer): void {
    this.streamers.push(streamer);
  }

}

import { Streamer } from "./Streamer";

export class Canal {
  private nombre: string;
  private banner: string;
  private streamer: Streamer;
  private descripcion: string;

  constructor(nombre: string, banner: string, streamer: Streamer, descripcion: string) {
    this.nombre = nombre;
    this.banner = banner;
    this.streamer = streamer;
    this.descripcion = descripcion;
  }

  public obtenerNombre(): string {
    return this.nombre;
  }

  public obtenerBanner(): string {
    return this.banner;
  }

  public obtenerStreamer(): Streamer {
    return this.streamer;
  }

  public obtenerDescripcion(): string {
    return this.descripcion;
  }

  //Implementaciones

  public mostrarDetalle(): void {
    console.log("Detalle del Canal:");
    console.log("Nombre: " + this.nombre);
    console.log("Banner: " + this.banner);
    console.log("Streamer: " + this.streamer.obtenerNickname());
    console.log("Descripción: " + this.descripcion);
  }  

}

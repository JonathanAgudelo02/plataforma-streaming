import { RedSocial } from "./RedSocial";
import { Stream } from "./Stream";
import { Canal } from "./Canal";

export class Streamer {
  private nickname: string;
  private descripcion: string;
  private redesSociales: RedSocial[];
  private streams: Stream[];
  private canales: Canal[];

  constructor(nickname: string, descripcion: string) {
    this.nickname = nickname;
    this.descripcion = descripcion;
    this.redesSociales = [];
    this.streams = [];
    this.canales = [];
  }

  public obtenerNickname(): string {
    return this.nickname;
  }

  public obtenerDescripcion(): string {
    return this.descripcion;
  }

  public agregarRedSocial(redSocial: RedSocial): void {
    this.redesSociales.push(redSocial);
  }

  public obtenerRedesSociales(): RedSocial[] {
    return this.redesSociales;
  }

  public obtenerStreams(): Stream[] {
    return this.streams;
  }

  //Implementaciones

  public mostrarDetalleStreamer(): void {
    console.log("Detalles del Streamer:");
    console.log("Nickname: " + this.obtenerNickname());
    console.log("Descripción: " + this.obtenerDescripcion());
    console.log("Redes Sociales:");
    this.obtenerRedesSociales().forEach((redSocial) => {
      console.log("- " + redSocial.obtenerNombre() + ": " + redSocial.obtenerUrl());
    });
  }

  public mostrarListadoStreams(): void {
    console.log("Listado de Streams del Streamer " + this.obtenerNickname() + ":");
    this.obtenerStreams().forEach((stream) => {
      console.log("- Stream ID: " + stream.obtenerCategorias());
    });
  }

  public agregarStreamaStreamer(stream: Stream): void {
    this.streams.push(stream);
  }

  public agregarCanalaStreamer(canal: Canal): void {
    this.canales.push(canal);
  }
}

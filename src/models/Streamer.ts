import { RedSocial } from "./RedSocial";
import { Stream } from "./Stream";

export class Streamer {
  private nickname: string;
  private descripcion: string;
  private redesSociales: RedSocial[];
  private streams: Stream[];

  constructor(nickname: string, descripcion: string) {
    this.nickname = nickname;
    this.descripcion = descripcion;
    this.redesSociales = [];
    this.streams = [];
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

  public agregarStream(stream: Stream): void {
    this.streams.push(stream);
  }

  public eliminarStream(stream: Stream): void {
    const indice = this.streams.indexOf(stream);
    if (indice !== -1) {
      this.streams.splice(indice, 1);
    }
  }
}

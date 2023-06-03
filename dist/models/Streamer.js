"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streamer = void 0;
class Streamer {
    constructor(nickname, descripcion) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = [];
        this.streams = [];
    }
    obtenerNickname() {
        return this.nickname;
    }
    obtenerDescripcion() {
        return this.descripcion;
    }
    agregarRedSocial(redSocial) {
        this.redesSociales.push(redSocial);
    }
    obtenerRedesSociales() {
        return this.redesSociales;
    }
    obtenerStreams() {
        return this.streams;
    }
    agregarStream(stream) {
        this.streams.push(stream);
    }
    eliminarStream(stream) {
        const indice = this.streams.indexOf(stream);
        if (indice !== -1) {
            this.streams.splice(indice, 1);
        }
    }
}
exports.Streamer = Streamer;

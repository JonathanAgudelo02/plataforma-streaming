"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streamer = void 0;
class Streamer {
    constructor(nickname, descripcion) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = [];
        this.streams = [];
        this.canales = [];
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
    //Implementaciones
    mostrarDetalleStreamer() {
        console.log("Detalles del Streamer:");
        console.log("Nickname: " + this.obtenerNickname());
        console.log("Descripción: " + this.obtenerDescripcion());
        console.log("Redes Sociales:");
        this.obtenerRedesSociales().forEach((redSocial) => {
            console.log("- " + redSocial.obtenerNombre() + ": " + redSocial.obtenerUrl());
        });
    }
    mostrarListadoStreams() {
        console.log("Listado de Streams del Streamer " + this.obtenerNickname() + ":");
        this.obtenerStreams().forEach((stream) => {
            console.log("- Stream ID: " + stream.obtenerCategorias());
        });
    }
    agregarStreamaStreamer(stream) {
        this.streams.push(stream);
    }
    agregarCanalaStreamer(canal) {
        this.canales.push(canal);
    }
}
exports.Streamer = Streamer;

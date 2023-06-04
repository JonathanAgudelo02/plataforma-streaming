"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canal = void 0;
class Canal {
    constructor(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerBanner() {
        return this.banner;
    }
    obtenerStreamer() {
        return this.streamer;
    }
    obtenerDescripcion() {
        return this.descripcion;
    }
    //Implementaciones
    mostrarDetalle() {
        console.log("Detalle del Canal:");
        console.log("Nombre: " + this.nombre);
        console.log("Banner: " + this.banner);
        console.log("Streamer: " + this.streamer.obtenerNickname());
        console.log("Descripción: " + this.descripcion);
    }
}
exports.Canal = Canal;

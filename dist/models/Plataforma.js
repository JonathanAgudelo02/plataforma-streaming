"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
class Plataforma {
    constructor(nombre, logo, descripcion, empresaPatrocinadora) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = [];
        this.streamers = [];
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerLogo() {
        return this.logo;
    }
    obtenerDescripcion() {
        return this.descripcion;
    }
    obtenerEmpresaPatrocinadora() {
        return this.empresaPatrocinadora;
    }
    obtenerCanales() {
        return this.canales;
    }
    //Implementaciones
    static mostrarListadoPlataformas(plataformas) {
        console.log("Listado de Plataformas:");
        plataformas.forEach((plataforma) => {
            console.log("- " + plataforma.obtenerNombre());
        });
    }
    mostrarDetallePlataforma() {
        console.log("Detalles de la Plataforma:");
        console.log("Nombre: " + this.obtenerNombre());
        console.log("Logo: " + this.obtenerLogo());
        console.log("Descripción: " + this.obtenerDescripcion());
        console.log("Empresa Patrocinadora: " + this.obtenerEmpresaPatrocinadora().obtenerNombre());
    }
    mostrarListadoCanales() {
        console.log("Listado de Canales de la Plataforma " + this.obtenerNombre() + ":");
        this.obtenerCanales().forEach((canal) => {
            console.log("- " + canal.obtenerNombre());
        });
    }
    mostrarListadoStreamers() {
        console.log("Listado de Streamers de la Plataforma " + this.obtenerNombre() + ":");
        const streamers = new Set(); // Utilizamos un Set para evitar duplicados
        this.obtenerCanales().forEach((canal) => {
            streamers.add(canal.obtenerStreamer());
        });
        streamers.forEach((streamer) => {
            console.log("- " + streamer.obtenerNickname());
        });
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    agregarStreamer(streamer) {
        this.streamers.push(streamer);
    }
}
exports.Plataforma = Plataforma;

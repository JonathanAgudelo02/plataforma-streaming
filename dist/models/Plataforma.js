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
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    eliminarCanal(canal) {
        const indice = this.canales.indexOf(canal);
        if (indice !== -1) {
            this.canales.splice(indice, 1);
        }
    }
}
exports.Plataforma = Plataforma;

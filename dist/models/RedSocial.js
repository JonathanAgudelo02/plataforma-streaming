"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedSocial = void 0;
class RedSocial {
    constructor(nombre, url) {
        this.nombre = nombre;
        this.url = url;
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerUrl() {
        return this.url;
    }
}
exports.RedSocial = RedSocial;

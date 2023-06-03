"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nombre, nit) {
        this.nombre = nombre;
        this.nit = nit;
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerNit() {
        return this.nit;
    }
}
exports.Empresa = Empresa;

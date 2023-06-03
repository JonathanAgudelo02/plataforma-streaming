"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerDescripcion() {
        return this.descripcion;
    }
    obtenerImagen() {
        return this.imagen;
    }
}
exports.Categoria = Categoria;

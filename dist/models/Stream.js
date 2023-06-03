"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = void 0;
class Stream {
    constructor() {
        this.categorias = [];
    }
    obtenerCategorias() {
        return this.categorias;
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    eliminarCategoria(categoria) {
        const indice = this.categorias.indexOf(categoria);
        if (indice !== -1) {
            this.categorias.splice(indice, 1);
        }
    }
}
exports.Stream = Stream;

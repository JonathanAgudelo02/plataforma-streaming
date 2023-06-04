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
    //Implementaciones
    mostrarDetalleStream() {
        console.log("Detalle del Stream:");
        console.log("Categorías:");
        this.categorias.forEach((categoria) => {
            console.log("- " + categoria.obtenerNombre());
        });
    }
}
exports.Stream = Stream;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Plataforma_1 = require("./models/Plataforma");
const Canal_1 = require("./models/Canal");
const Streamer_1 = require("./models/Streamer");
const RedSocial_1 = require("./models/RedSocial");
const Stream_1 = require("./models/Stream");
const Categoria_1 = require("./models/Categoria");
const Empresa_1 = require("./models/Empresa");
// Crear instancias de las clases
const empresa = new Empresa_1.Empresa("Amazon", "123456789");
const plataforma = new Plataforma_1.Plataforma("Twitch", "logo.png", "Plataforma estadounidense perteneciente a la empresa Amazon, Inc., que permite realizar transmisiones en vivo. ", empresa);
const streamer = new Streamer_1.Streamer("Cande", " Candelaria, 23 años, de Argentina, mi nombre 'artistico' Tsuneko.");
const canal = new Canal_1.Canal("xTsuneko", "banner.png", streamer, "Qué ondii, soy Cande y amo compartir los juegos que me gustan, asi que si te gusta el VALORANT, Dead by Daylight, y entre otros jueguitos random, estás en el lugar indicado ;)");
const redSocial = new RedSocial_1.RedSocial("TikTok", "https://www.tiktok.com/@xtsuneko");
const stream = new Stream_1.Stream();
const categoria = new Categoria_1.Categoria("Valorant", "Hero shooter en primera persona multijugador gratuito", "imagen.png");
// Establecer asociaciones
plataforma.agregarCanal(canal);
canal.obtenerStreamer().agregarRedSocial(redSocial);
streamer.agregarStream(stream);
stream.agregarCategoria(categoria);
// Ejemplo de uso
console.log("Nombre de la plataforma:", plataforma.obtenerNombre());
console.log("Canales de la plataforma:", plataforma.obtenerCanales());
console.log("Redes sociales del streamer:", canal.obtenerStreamer().obtenerRedesSociales());
console.log("Categorías del stream:", stream.obtenerCategorias());

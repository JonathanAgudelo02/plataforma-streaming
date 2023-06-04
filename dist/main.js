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
const redSocial1 = new RedSocial_1.RedSocial("TikTok", "https://www.tiktok.com/@xtsuneko");
const redSocial2 = new RedSocial_1.RedSocial("Instagram", "https://www.instagram.com/candelaria.monje/");
streamer.agregarRedSocial(redSocial1);
streamer.agregarRedSocial(redSocial2);
const canal = new Canal_1.Canal("xTsuneko", "banner.png", streamer, "Qué ondii, soy Cande y amo compartir los juegos que me gustan, asi que si te gusta el VALORANT, Dead by Daylight, y entre otros jueguitos random, estás en el lugar indicado ;)");
const categoria1 = new Categoria_1.Categoria("Valorant", "Hero shooter en primera persona multijugador gratuito", "imagen.png");
const categoria2 = new Categoria_1.Categoria("Genshin Impact", "videojuego de rol de acción de mundo abierto y gratuito2", "imagen.png");
const stream1 = new Stream_1.Stream();
stream1.agregarCategoria(categoria1);
stream1.agregarCategoria(categoria2);
streamer.agregarStreamaStreamer(stream1);
// Agregar los canales y streamers a la plataforma
plataforma.agregarCanal(canal);
plataforma.agregarStreamer(streamer);
// Mostrar el listado de plataformas
Plataforma_1.Plataforma.mostrarListadoPlataformas([plataforma]);
// Mostrar el detalle de una plataforma
plataforma.mostrarDetallePlataforma();
// Mostrar el listado de canales
plataforma.mostrarListadoCanales();
// Mostrar el detalle de un canal
canal.mostrarDetalle();
// Mostrar el listado de streamers
plataforma.mostrarListadoStreamers();
// Ver el detalle de un streamer
streamer.mostrarDetalleStreamer();
// Mostrar el listado de streams
streamer.mostrarListadoStreams();
// Mostrar el detalle de un stream
stream1.mostrarDetalleStream();

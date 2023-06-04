import { Plataforma } from "./models/Plataforma";
import { Canal } from "./models/Canal";
import { Streamer } from "./models/Streamer";
import { RedSocial } from "./models/RedSocial";
import { Stream } from "./models/Stream";
import { Categoria } from "./models/Categoria";
import { Empresa } from "./models/Empresa";

// Crear instancias de las clases
const empresa = new Empresa("Amazon", "123456789");

const plataforma = new Plataforma("Twitch", "logo.png", "Plataforma estadounidense perteneciente a la empresa Amazon, Inc., que permite realizar transmisiones en vivo. ", empresa);

const streamer = new Streamer("Cande", " Candelaria, 23 años, de Argentina, mi nombre 'artistico' Tsuneko.");
const redSocial1 = new RedSocial("TikTok", "https://www.tiktok.com/@xtsuneko");
const redSocial2 = new RedSocial("Instagram", "https://www.instagram.com/candelaria.monje/");
streamer.agregarRedSocial(redSocial1);
streamer.agregarRedSocial(redSocial2);

const canal = new Canal("xTsuneko", "banner.png", streamer, "Qué ondii, soy Cande y amo compartir los juegos que me gustan, asi que si te gusta el VALORANT, Dead by Daylight, y entre otros jueguitos random, estás en el lugar indicado ;)");

const categoria1 = new Categoria("Valorant", "Hero shooter en primera persona multijugador gratuito", "imagen.png");
const categoria2 = new Categoria("Genshin Impact", "videojuego de rol de acción de mundo abierto y gratuito2", "imagen.png");

const stream1 = new Stream();
stream1.agregarCategoria(categoria1);
stream1.agregarCategoria(categoria2);
streamer.agregarStreamaStreamer(stream1);

// Agregar los canales y streamers a la plataforma
plataforma.agregarCanal(canal);
plataforma.agregarStreamer(streamer);

// Mostrar el listado de plataformas
Plataforma.mostrarListadoPlataformas([plataforma]);

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

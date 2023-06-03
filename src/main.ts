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
const canal = new Canal("xTsuneko", "banner.png", streamer, "Qué ondii, soy Cande y amo compartir los juegos que me gustan, asi que si te gusta el VALORANT, Dead by Daylight, y entre otros jueguitos random, estás en el lugar indicado ;)");
const redSocial = new RedSocial("TikTok", "https://www.tiktok.com/@xtsuneko");
const stream = new Stream();
const categoria = new Categoria("Valorant", "Hero shooter en primera persona multijugador gratuito", "imagen.png");

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

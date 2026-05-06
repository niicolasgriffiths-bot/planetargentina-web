import { Language } from "@/components/language-provider";

export type ExperienceVisibility = "visible" | "partial" | "locked";
export type LocalizedText = { es: string; en: string; pt?: string };
export type TerritoryGalleryItem = {
  image: string;
  kind: LocalizedText;
};

export type ArchiveCategory = {
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  imagePosition?: string;
  href: string;
};

export type NavigationItem = {
  href: string;
  label: LocalizedText;
  tier: "primary" | "secondary";
};

export type StoryProfile = {
  slug: string;
  name: LocalizedText;
  place: LocalizedText;
  summary: LocalizedText;
  image: string;
  cardImage?: string;
};

export type Experience = {
  slug: string;
  title: LocalizedText;
  duration: LocalizedText;
  difficulty: LocalizedText;
  spots: LocalizedText;
  visibility: ExperienceVisibility;
  summary: LocalizedText;
  territory: string;
};

export type Territory = {
  slug: string;
  name: LocalizedText;
  region: LocalizedText;
  stage: LocalizedText;
  status: LocalizedText;
  route: LocalizedText;
  mapImage: string;
  heroPosition?: string;
  intro: LocalizedText;
  image: string;
  homeImage?: string;
  homeImagePosition?: string;
  listingImage?: string;
  listingImagePosition?: string;
  collectionImage?: string;
  collectionImagePosition?: string;
  narrative: LocalizedText;
  highlights: LocalizedText[];
  gallery: TerritoryGalleryItem[];
  experiences: string[];
};

export const navigation: NavigationItem[] = [
  { href: "/explore", label: { es: "Explorar", en: "Explore", pt: "Explorar" }, tier: "primary" },
  { href: "/coleccion", label: { es: "Colección", en: "Collection", pt: "Coleção" }, tier: "primary" },
  { href: "/experiences", label: { es: "Experiencias", en: "Experiences", pt: "Experiências" }, tier: "primary" },
  { href: "/nosotros", label: { es: "Nosotros", en: "About", pt: "Sobre" }, tier: "secondary" },
  { href: "/acompanar", label: { es: "Acompañan", en: "Support", pt: "Acompanham" }, tier: "secondary" }
];

export const homeStory = [
  {
    title: "Territories held in light and distance.",
    body: "Across salt, wind and altitude, the landscape reveals itself slowly.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Stories told through surface and silence.",
    body: "A photographic archive where journeys remain partially withheld.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Experiences are disclosed by degree, not by menu.",
    body: "Visibility is part of the invitation. Access is earned, not assumed.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
  }
];

export const archiveCategories: ArchiveCategory[] = [
  {
    name: { es: "Historias", en: "Stories", pt: "Histórias" },
    description: {
      es: "Historias de vida, retratos y oficios.",
      en: "Life stories, portraits and craft.",
      pt: "Histórias de vida, retratos e ofícios."
    },
    image: "/archive/historias-persona.jpg",
    imagePosition: "center 18%",
    href: "/stories"
  },
  {
    name: { es: "Territorios", en: "Territories", pt: "Territórios" },
    description: {
      es: "Regiones, mapas y recorridos de cada etapa.",
      en: "Regions, maps and routes for each stage.",
      pt: "Regiões, mapas e percursos de cada etapa."
    },
    image: "/editorial/fn38-salt-shadows.jpg",
    imagePosition: "center center",
    href: "/territories"
  },
  {
    name: { es: "Experiencias", en: "Experiences", pt: "Experiências" },
    description: {
      es: "Vivir el proyecto en campo.",
      en: "Live the project in the field.",
      pt: "Viver o projeto em campo."
    },
    image: "/editorial/fn56-night-camp.jpg",
    imagePosition: "center 58%",
    href: "/experiences"
  }
];

export const storyProfiles: StoryProfile[] = [
  {
    slug: "gabriela-zapana",
    name: { es: "Gabriela Zapana", en: "Gabriela Zapana" },
    place: { es: "Un paso adelante", en: "A step forward" },
    summary: {
      es: "Gabriela nació en Santa Ana, en altura, donde el frío forma parte de la vida cotidiana. Desde muy joven aprendió a leer el clima, cuidar animales y organizar el año según el movimiento del ganado entre la puna y las yungas. Más tarde salió de su pueblo, trabajó en otras provincias y volvió con otra mirada: entendió que abrir la puerta al visitante no tenía por qué significar perder la identidad. Con el tiempo convirtió su casa en el primer hospedaje para turistas de Santa Ana y abrió una nueva forma de relación entre el pueblo y el exterior.",
      en: "Gabriela was born in Santa Ana, at altitude, where cold is part of daily life. From an early age she learned to read the weather, care for animals and organize the year around the movement of livestock between the puna and the yungas. Later she left her town, worked in other provinces and returned with a different perspective: she understood that opening the door to visitors did not have to mean losing identity. In time she turned her home into Santa Ana’s first lodging for travelers and opened a new relationship between the town and the outside world."
    },
    image: "/stories/gabriela-zapana.jpg",
    cardImage: "/stories/listing/gabriela-zapana.jpg"
  },
  {
    slug: "juana-quiroga",
    name: { es: "Juana Quiroga", en: "Juana Quiroga" },
    place: { es: "Amor por la familia", en: "Love for family" },
    summary: {
      es: "Juana aparece como una de esas presencias que condensan permanencia, trabajo y una relación íntima con el paisaje andino. Su retrato abre la puerta a una memoria silenciosa del territorio, donde la vida cotidiana, los afectos y el tiempo compartido forman parte de la manera en que la puna se sostiene y se transmite.",
      en: "Juana appears as one of those presences that condense continuity, work and an intimate relationship with the Andean landscape. Her portrait opens the door to a quiet memory of the territory, where daily life, affection and shared time are part of how the puna is sustained and passed on."
    },
    image: "/stories/juana-quiroga.jpg",
    cardImage: "/stories/listing/juana-quiroga.jpg"
  },
  {
    slug: "petrona-correa",
    name: { es: "Petrona Correa", en: "Petrona Correa" },
    place: { es: "Arte con lana", en: "Wool craft" },
    summary: {
      es: "Petrona aprendió a hilar a los cinco años, cuando su abuela le enseñó el proceso completo de trabajar la lana, desde el animal hasta el hilo. A lo largo de su vida convirtió ese aprendizaje en una práctica cotidiana y luego en un oficio, reconociendo con las manos cada fibra, limpiándola, cardándola y transformándola con el huso. Sus tejidos no son piezas separadas de la vida: forman parte de su casa, de su abrigo y de su memoria. Hoy sigue siendo una referencia viva para quienes quieren aprender ese saber en Fiambalá.",
      en: "Petrona learned to spin at the age of five, when her grandmother taught her the full process of working wool, from the animal to the thread. Throughout her life she turned that learning into a daily practice and then into a craft, recognizing each fiber with her hands, cleaning it, carding it and transforming it with the spindle. Her textiles are not separate objects from life: they are part of her home, her warmth and her memory. Today she remains a living reference for those who want to learn that knowledge in Fiambala."
    },
    image: "/stories/petrona-correa.jpg",
    cardImage: "/stories/listing/petrona-correa.jpg"
  },
  {
    slug: "roberto-puca",
    name: { es: "Roberto Puca", en: "Roberto Puca" },
    place: { es: "Profesor de Telar", en: "Loom teacher" },
    summary: {
      es: "Roberto nació en la puna salteña y dejó su casa siendo apenas un adolescente, cruzando a caballo grandes distancias hasta llegar a Humahuaca. Allí trabajó, aprendió oficios y más tarde encontró en el telar una práctica que marcaría su vida. Con el tiempo se convirtió en maestro tejedor y llevó ese saber a escuelas y comunidades de la puna, enseñando a preparar la lana, armar el telar y sostener el ritmo del tejido. Su historia muestra cómo un oficio puede convertirse en trabajo, transmisión y permanencia cultural.",
      en: "Roberto was born in the Salta puna and left home as a teenager, crossing great distances on horseback until he reached Humahuaca. There he worked, learned trades and later found in weaving a practice that would shape his life. In time he became a weaving teacher and carried that knowledge to schools and communities across the puna, teaching how to prepare wool, set up the loom and sustain the rhythm of weaving. His story shows how a craft can become work, transmission and cultural continuity."
    },
    image: "/stories/roberto-puca.jpg",
    cardImage: "/stories/listing/roberto-puca.jpg"
  },
  {
    slug: "feliza-catalina-rajido",
    name: { es: "Feliza Catalina Rajido", en: "Feliza Catalina Rajido" },
    place: { es: "Sal y trueque", en: "Salt and barter" },
    summary: {
      es: "Catalina pasó gran parte de su vida en una estancia aislada de la puna, donde el trabajo estaba organizado alrededor de la recolección de sal en altura y su intercambio por alimentos. Durante años hizo esos viajes con caballos y mulas, sosteniendo un sistema de trueque que fue esencial para la subsistencia en regiones donde el dinero circulaba poco. Su historia conserva la memoria de una práctica casi desaparecida y de una forma de vida marcada por el esfuerzo, la distancia y la adaptación al territorio.",
      en: "Catalina spent much of her life on an isolated estancia in the puna, where work was organized around collecting salt at altitude and exchanging it for food. For years she made those journeys with horses and mules, sustaining a barter system essential for survival in regions where money circulated little. Her story preserves the memory of a nearly vanished practice and of a way of life shaped by effort, distance and adaptation to the land."
    },
    image: "/stories/feliza-catalina-rajido.jpg",
    cardImage: "/stories/listing/feliza-catalina-rajido.jpg"
  },
  {
    slug: "felipe-morales",
    name: { es: "Felipe Santiago Morales", en: "Felipe Santiago Morales" },
    place: { es: "Coplero", en: "Coplero" },
    summary: {
      es: "Felipe creció en el campo puneño, en un paisaje de frío, viento y grandes distancias. Desde niño conoció el trabajo con animales, la recolección de sal y la dureza de una vida marcada por la intemperie. Más adelante encontró en la copla algo más que un canto: una forma de encuentro, memoria y comunicación en un territorio donde las distancias separan a las personas. Hoy su historia permite entender cómo esa tradición sigue viva como parte profunda de la cultura de la puna.",
      en: "Felipe grew up in the puna countryside, in a landscape of cold, wind and great distances. From childhood he knew work with animals, salt gathering and the harshness of a life marked by exposure. Later he found in copla more than a song: a form of encounter, memory and communication in a territory where distance separates people. Today his story helps explain how that tradition remains alive as a deep part of puna culture."
    },
    image: "/stories/felipe-morales.jpg",
    cardImage: "/stories/listing/felipe-morales.jpg"
  }
];

export const experiences: Experience[] = [
  {
    slug: "salt-traverse",
    title: { es: "Travesía de sal", en: "Salt Traverse" },
    duration: { es: "4 días", en: "4 days" },
    difficulty: { es: "Media", en: "Measured" },
    spots: { es: "6 lugares", en: "6 places" },
    visibility: "visible",
    summary: {
      es: "Un cruce contenido entre cuencas, cielo y silencio mineral.",
      en: "A restrained crossing between basins, sky and mineral silence."
    },
    territory: "puna"
  },
  {
    slug: "night-altitude",
    title: { es: "Noche en altura", en: "Night at Altitude" },
    duration: { es: "2 noches", en: "2 nights" },
    difficulty: { es: "Exigente", en: "Demanding" },
    spots: { es: "4 lugares", en: "4 places" },
    visibility: "partial",
    summary: {
      es: "Observación astral, refugio mínimo y largos intervalos de quietud.",
      en: "Astral observation, minimal shelter and long intervals of stillness."
    },
    territory: "puna"
  },
  {
    slug: "wetland-residency",
    title: { es: "Residencia en humedales", en: "Wetland Residency" },
    duration: { es: "5 días", en: "5 days" },
    difficulty: { es: "Abierta", en: "Open" },
    spots: { es: "8 lugares", en: "8 places" },
    visibility: "visible",
    summary: {
      es: "Aves, embarcaciones y notas de campo en los márgenes del Iberá.",
      en: "Birdlife, boats and field notes across the Ibera margins."
    },
    territory: "selvas-humedales"
  },
  {
    slug: "stone-circle",
    title: { es: "Círculo de piedra", en: "Stone Circle" },
    duration: { es: "3 días", en: "3 days" },
    difficulty: { es: "Media", en: "Measured" },
    spots: { es: "3 lugares", en: "3 places" },
    visibility: "locked",
    summary: {
      es: "Un encuentro de escala contenida, disponible más adelante.",
      en: "A contained-format gathering, available later."
    },
    territory: "patagonia-cordillerana"
  },
  {
    slug: "southern-winter",
    title: { es: "Invierno austral", en: "Southern Winter" },
    duration: { es: "6 días", en: "6 days" },
    difficulty: { es: "Exigente", en: "Demanding" },
    spots: { es: "5 lugares", en: "5 places" },
    visibility: "locked",
    summary: {
      es: "Una salida que aparece más adelante, cuando la relación con el proyecto ya es más cercana.",
      en: "An outing that appears later, once the relationship with the project has grown closer."
    },
    territory: "patagonia-atlantica"
  }
];

export const territories: Territory[] = [
  {
    slug: "puna",
    name: { es: "Puna", en: "Puna" },
    region: { es: "Noroeste argentino", en: "Northwest Argentina" },
    stage: { es: "Primera etapa", en: "First stage" },
    status: { es: "Concluida", en: "Completed" },
    route: { es: "Catamarca, Salta y Jujuy", en: "Catamarca, Salta and Jujuy" },
    mapImage: "/maps/puna-map.png",
    intro: {
      es: "Altiplanicie entre 3.500 y 5.000 metros, volcanes, salares y uno de los paisajes más extremos del continente.",
      en: "A high plateau between 3,500 and 5,000 meters, with volcanoes, salt flats and one of the continent’s most extreme landscapes."
    },
    image: "/stages/puna/hero-sg1.jpg",
    homeImage: "/stages/puna/gallery-landscape.jpg",
    listingImage: "/stages/puna/gallery-presence.jpg",
    collectionImage: "/collection/intro-saltforms.jpg",
    collectionImagePosition: "center 54%",
    narrative: {
      es: "La primera etapa de Planeta Argentina está dedicada a La Puna, uno de los territorios más extraordinarios y singulares del país. Un paisaje de altura donde volcanes, salares y extensiones abiertas conforman uno de los entornos naturales más extremos de Sudamérica. En este territorio, las comunidades han desarrollado una relación profunda con el paisaje, construyendo formas de vida, tradiciones y culturas estrechamente ligadas al entorno.",
      en: "The first stage of Planeta Argentina is devoted to the Puna, one of the country’s most extraordinary and singular territories. A high-altitude landscape where volcanoes, salt flats and open expanses create one of South America’s most extreme natural environments. Here, communities have forged a deep relationship with the land, building ways of life, traditions and cultures closely tied to their surroundings."
    },
    highlights: [
      {
        es: "Volcanes entre los más altos del mundo y salares interminables.",
        en: "Volcanoes among the highest in the world and seemingly endless salt flats."
      },
      {
        es: "Noches de -20 grados y oxígeno escaso que condicionan cada movimiento.",
        en: "Nights dropping below -20 degrees and scarce oxygen shaping every movement."
      },
      {
        es: "Comunidades aisladas que aprendieron a habitar uno de los entornos más extremos del continente.",
        en: "Isolated communities that learned to inhabit one of the continent’s most extreme environments."
      }
    ],
    gallery: [
      {
        image: "/stages/puna/gallery-detail-salt.jpg",
        kind: { es: "Detalle", en: "Detail" }
      },
      {
        image: "/stages/puna/gallery-detail-cactus.jpg",
        kind: { es: "Detalle", en: "Detail" }
      },
      {
        image: "/stages/puna/gallery-territory-landscape-vertical.jpg",
        kind: { es: "Territorio", en: "Territory" }
      },
      {
        image: "/stages/puna/gallery-territory-presence-vertical.jpg",
        kind: { es: "Territorio", en: "Territory" }
      }
    ],
    experiences: ["salt-traverse", "night-altitude"]
  },
  {
    slug: "selvas-humedales",
    name: { es: "Selvas y Humedales", en: "Jungles and Wetlands" },
    region: { es: "Noreste argentino", en: "Northeast Argentina" },
    stage: { es: "Segunda etapa", en: "Second stage" },
    status: { es: "Próximamente...", en: "Upcoming stage" },
    route: { es: "Misiones, Corrientes y Chaco", en: "Misiones, Corrientes and Chaco" },
    mapImage: "/maps/selvas-humedales-map.png",
    intro: {
      es: "Selvas cerradas y humedales abiertos que cambian con las estaciones y concentran una de las mayores biodiversidades del país.",
      en: "Closed jungle and open wetlands that shift with the seasons and hold some of the country’s greatest biodiversity."
    },
    image: "/stages/selvas-humedales/hero-monkey.jpg",
    homeImage: "/stages/selvas-humedales/gallery-capybara-resting.jpg",
    listingImage: "/stages/selvas-humedales/gallery-capybara-water.jpg",
    heroPosition: "center 46%",
    narrative: {
      es: "Selvas y Humedales reúne ecosistemas donde la densidad de vida cambia el ritmo de la observación. Es una región atravesada por selvas subtropicales, corredores de aves migratorias, esteros abiertos y comunidades que viven en relación íntima con el monte y el agua.",
      en: "Jungles and Wetlands brings together ecosystems where the density of life changes the rhythm of observation. It is a region shaped by subtropical jungle, migratory bird corridors, open marshes and communities living in intimate relationship with forest and water."
    },
    highlights: [
      {
        es: "Hábitat del jaguar, yacarés, monos y especies endémicas.",
        en: "Habitat for jaguars, caimans, monkeys and endemic species."
      },
      {
        es: "Comunidades autóctonas que habitan en relación directa con la selva.",
        en: "Indigenous communities living in direct relationship with the jungle."
      },
      {
        es: "Corredores naturales donde miles de aves migratorias encuentran refugio y alimento.",
        en: "Natural corridors where thousands of migratory birds find shelter and food."
      }
    ],
    gallery: [
      {
        image: "/stages/selvas-humedales/gallery-capybara-blackbird.jpg",
        kind: { es: "Presencia", en: "Presence" }
      }
    ],
    experiences: ["wetland-residency"]
  },
  {
    slug: "cuyo",
    name: { es: "Cuyo", en: "Cuyo" },
    region: { es: "Centro-oeste argentino", en: "Central-west Argentina" },
    stage: { es: "Tercera etapa", en: "Third stage" },
    status: { es: "Próximamente...", en: "Upcoming stage" },
    route: { es: "Mendoza, San Juan y La Rioja", en: "Mendoza, San Juan and La Rioja" },
    mapImage: "/maps/cuyo-map.png",
    intro: {
      es: "Montaña, desierto y altura en una región donde la escala del paisaje redefine el cuerpo y la mirada.",
      en: "Mountain, desert and altitude in a region where the scale of the landscape redefines body and gaze."
    },
    image: "/stages/cuyo/hero.jpg",
    homeImage: "/stages/cuyo/gallery-high-altitude-lagoon.jpg",
    listingImage: "/stages/cuyo/gallery-desert-forms.jpg",
    heroPosition: "center center",
    narrative: {
      es: "Cuyo condensa algunas de las geografías más radicales del país: desiertos abiertos, valles de altura, poblados nacidos a la sombra de la montaña y cielos atravesados por el vuelo del cóndor. Es una región donde la montaña ordena la escala y el tiempo.",
      en: "Cuyo brings together some of the country’s most radical geographies: open deserts, high valleys, settlements born in the mountain’s shadow and skies cut by the flight of condors. It is a region where the mountain orders scale and time."
    },
    highlights: [
      {
        es: "Aconcagua, la montaña más alta de América.",
        en: "Aconcagua, the highest mountain in the Americas."
      },
      {
        es: "Desiertos infinitos que ponen a prueba la resistencia.",
        en: "Vast deserts that test endurance."
      },
      {
        es: "Poblados que crecieron a la sombra de la montaña.",
        en: "Settlements that grew in the mountain’s shadow."
      }
    ],
    gallery: [
      {
        image: "/stages/cuyo/gallery-mountain-layers.jpg",
        kind: { es: "Desierto", en: "Desert" }
      }
    ],
    experiences: []
  },
  {
    slug: "patagonia-cordillerana",
    name: { es: "Patagonia Cordillerana", en: "Andean Patagonia" },
    region: { es: "Sur andino argentino", en: "Argentine Andean South" },
    stage: { es: "Cuarta etapa", en: "Fourth stage" },
    status: { es: "Próximamente...", en: "Upcoming stage" },
    route: { es: "Neuquén, Río Negro, Chubut y Santa Cruz", en: "Neuquen, Rio Negro, Chubut and Santa Cruz" },
    mapImage: "/maps/patagonia-cordillerana-map.png",
    intro: {
      es: "Cumbres, glaciares y valles de roca donde el frío y el silencio definen la experiencia.",
      en: "Summits, glaciers and rock valleys where cold and silence define the experience."
    },
    image: "/stages/patagonia-cordillerana/hero.jpg",
    homeImage: "/stages/patagonia-cordillerana/gallery-landscape.jpg",
    listingImage: "/stages/patagonia-cordillerana/gallery-winter-road.jpg",
    narrative: {
      es: "La Patagonia Cordillerana abre una geografía de cumbres vírgenes, glaciares eternos y agujas de granito. Es el territorio del puma silencioso, de los gauchos curtidos por el viento y de una intemperie que exige preparación y lectura fina del paisaje.",
      en: "Andean Patagonia opens into a geography of virgin summits, eternal glaciers and granite spires. It is the territory of the silent puma, of gauchos weathered by wind and of exposure that demands preparation and a fine reading of the land."
    },
    highlights: [
      {
        es: "Cumbres vírgenes y paredes de granito.",
        en: "Virgin summits and granite walls."
      },
      {
        es: "Nieves y glaciares eternos.",
        en: "Snowfields and ancient glaciers."
      },
      {
        es: "Gauchos patagónicos y presencia silenciosa del puma.",
        en: "Patagonian gauchos and the silent presence of the puma."
      }
    ],
    gallery: [
      {
        image: "/stages/patagonia-cordillerana/gallery-mountain-lake.jpg",
        kind: { es: "Territorio", en: "Territory" }
      },
      {
        image: "/stages/patagonia-cordillerana/gallery-lake-peak.jpg",
        kind: { es: "Lago", en: "Lake" }
      },
      {
        image: "/stages/patagonia-cordillerana/gallery-forest-road.jpg",
        kind: { es: "Bosque", en: "Forest" }
      },
      {
        image: "/stages/patagonia-cordillerana/gallery-snow-range.jpg",
        kind: { es: "Nieve", en: "Snow" }
      }
    ],
    experiences: ["stone-circle"]
  },
  {
    slug: "patagonia-atlantica",
    name: { es: "Patagonia Atlántica", en: "Atlantic Patagonia" },
    region: { es: "Costa patagónica argentina", en: "Argentine Patagonian Coast" },
    stage: { es: "Quinta etapa", en: "Fifth stage" },
    status: { es: "Próximamente...", en: "Upcoming stage" },
    route: { es: "Río Negro, Chubut, Santa Cruz y Tierra del Fuego", en: "Rio Negro, Chubut, Santa Cruz and Tierra del Fuego" },
    mapImage: "/maps/patagonia-atlantica-map.png",
    heroPosition: "center 34%",
    intro: {
      es: "Olas, viento, fauna marina y comunidades que viven de la costa y la pesca artesanal.",
      en: "Waves, wind, marine wildlife and communities shaped by coast and artisan fishing."
    },
    image: "/stages/patagonia-atlantica/hero.jpg",
    homeImage: "/stages/patagonia-atlantica/gallery-whale-aerial.jpg",
    listingImage: "/stages/patagonia-atlantica/gallery-sea-lions.jpg",
    narrative: {
      es: "La Patagonia Atlántica se define por costas abiertas, viento constante y una fauna marina que vuelve cada temporada. Orcas, ballenas, pingüinos, toninas, lobos y elefantes marinos conviven con comunidades que todavía sostienen una relación directa con el océano y la pesca artesanal.",
      en: "Atlantic Patagonia is defined by open coasts, constant wind and marine wildlife returning every season. Orcas, whales, penguins, dolphins, sea lions and elephant seals coexist with communities that still sustain a direct relationship with the ocean and artisan fishing."
    },
    highlights: [
      {
        es: "Orcas con una estrategia de caza única.",
        en: "Orcas with a unique hunting strategy."
      },
      {
        es: "Ballenas y pingüinos que eligen estas costas cada año.",
        en: "Whales and penguins returning to these coasts each year."
      },
      {
        es: "Comunidades que viven de la pesca artesanal.",
        en: "Communities living from artisan fishing."
      }
    ],
    gallery: [
      {
        image: "/stages/patagonia-atlantica/gallery-whale-tail.jpg",
        kind: { es: "Paisaje", en: "Landscape" }
      }
    ],
    experiences: ["southern-winter"]
  }
];

export const foundationStats = [
  { value: "5", label: { es: "etapas territoriales que organizan la mirada del proyecto", en: "territorial stages shaping the project" } },
  { value: "12", label: { es: "aliados locales de pequeña escala por temporada", en: "small-scale local partners engaged each season" } },
  { value: "1", label: { es: "principio compartido: primero el territorio, nunca la extracción", en: "shared principle: territory first, extraction never" } }
];

export function localizeText(text: LocalizedText, language: Language) {
  return text[language] ?? text.es ?? text.en;
}

// Define los campeones del conjunto actual de TFT con sus sinergias
const campeones = [
  { nombre: "Aatrox", sinergias: ["Darkin", "Coloso", "Fulminador"] },
  { nombre: "Heimerdinger", sinergias: ["Piltover", "Tecnogenio", "Yordle"] },
  { nombre: "Senna", sinergias: ["Artillero", "Redentor", "Isla de la Sombra"] },
  { nombre: "K'Sante", sinergias: ["Bastion", "Shurima"] },
  { nombre: "Sion", sinergias: ["Maton", "Noxus"] },
  { nombre: "Ryze", sinergias: ["Viajero", "Invocador"] },
  { nombre: "Bel'Veth", sinergias: ["Emperatriz", "Vacio"] },
  { nombre: "Ahri", sinergias: ["Jonia", "Hechiceros"] },
  { nombre: "Jarvan IV", sinergias: ["Demacia", "Estratega"] },
  { nombre: "Kai'Sa", sinergias: ["Retador", "Vacio"] },
  { nombre: "Gwen", sinergias: ["Isla de la Sombra", "Fulminador"] },
  { nombre: "Shen", sinergias: ["Bastion", "Invocador", "Jonia"] },
  { nombre: "Nasus", sinergias: ["Coloso", "Shurima"] },
  { nombre: "Aphelios", sinergias: ["Targon", "Tiromortal"] },
  { nombre: "Azir", sinergias: ["Estratega", "Shurima"] },
  { nombre: "Soraka", sinergias: ["Invocador", "Targon"] },
  { nombre: "Lux", sinergias: ["Hechiceros", "Demacia"] },
  { nombre: "Lissandra", sinergias: ["Freljord", "Invocador"] },
  { nombre: "Ashe", sinergias: ["Freljord", "Tiromortal"] },
  { nombre: "Yasuo", sinergias: ["Retador", "Jonia"] },
  { nombre: "Vel'Koz", sinergias: ["Multicaster", "Hechiceros", "Vacio"] },
  { nombre: "Sejuani", sinergias: ["Maton", "Freljord"] },
  { nombre: "Malzahar", sinergias: ["Hechiceros", "Vacio"] },
  { nombre: "Kalista", sinergias: ["Retador", "Isla de la Sombra"] },
  { nombre: "Cho'Gath", sinergias: ["Maton", "Vacio"] },
  { nombre: "Rek'Sai", sinergias: ["Maton", "Vacio"] },
  { nombre: "Samira", sinergias: ["Retador", "Noxus"] },
  { nombre: "Akshan", sinergias: ["Shurima", "Tiromortal"] },
  { nombre: "Sona", sinergias: ["Demacia", "Multicaster"] },
  { nombre: "Karma", sinergias: ["Jonia", "Invocador"] },
  { nombre: "Taric", sinergias: ["Bastion", "Hechiceros", "Targon"] },
  { nombre: "Kassadin", sinergias: ["Bastion", "Vacio"] },
  { nombre: "Garen", sinergias: ["Coloso", "Demacia"] },
  { nombre: "Taliyah", sinergias: ["Multicaster", "Shurima"] },
  { nombre: "Swain", sinergias: ["Noxus", "Hechiceros", "Estratega"] },
  { nombre: "Renekton", sinergias: ["Maton", "Shurima"] },
  { nombre: "Zeri", sinergias: ["Artillero", "Zaun"] },
  { nombre: "Irelia", sinergias: ["Jonia", "Retador"] },
  { nombre: "Katarina", sinergias: ["Noxus", "Furtivo"] },
  { nombre: "Darius", sinergias: ["Noxus", "Coloso"] },
  { nombre: "Cassiopeia", sinergias: ["Invocador", "Noxus", "Shurima"] },
  { nombre: "Kayle", sinergias: ["Fulminador", "Demacia"] },
  { nombre: "Urgot", sinergias: ["Tiromortal", "Zaun"] },
  { nombre: "Galio", sinergias: ["Invocador", "Jonia"] },
  { nombre: "Warwick", sinergias: ["Coloso", "Retador", "Zaun"] },
  { nombre: "Kled", sinergias: ["Fulminador", "Noxus", "Yordle"] },
  { nombre: "Teemo", sinergias: ["Multicaster", "Yordle", "Estratega"] },
  { nombre: "Maokai", sinergias: ["Bastion", "Isla de la Sombra"] },
  { nombre: "Jinx", sinergias: ["Artillero", "Zaun"] },
  { nombre: "Zed", sinergias: ["Jonia", "Fulminador", "Furtivo"] },
  { nombre: "Ekko", sinergias: ["Piltover", "Furtivo", "Zaun"] },
  { nombre: "Poppy", sinergias: ["Demacia", "Bastion", "Yordle"] },
  { nombre: "Jayce", sinergias: ["Artillero", "Piltover"] },
  { nombre: "Viego", sinergias: ["Furtivo", "Isla de la Sombra"] },
  { nombre: "Sett", sinergias: ["Coloso", "Jonia"] },
  { nombre: "Tristana", sinergias: ["Artillero", "Yordle"] },
  { nombre: "Vi", sinergias: ["Maton", "Piltover"] },
  { nombre: "Orianna", sinergias: ["Piltover", "Hechiceros"] },
  { nombre: "Jhin", sinergias: ["Tiromortal", "Jonia"] },
];
// Función para contar la cantidad de cada campeón en la composición
function contarCampeones(composicion) {
  const contadorCampeones = {};
  composicion.forEach((campeon) => {
    const nombreCampeon = campeon.nombre;
    if (!contadorCampeones[nombreCampeon]) {
      contadorCampeones[nombreCampeon] = 0;
    }
    contadorCampeones[nombreCampeon]++;
  });
  return contadorCampeones;
}

function generarComposicion() {
    const campeonInput = document.getElementById("campeonInput");
    const campeonesIngresados = campeonInput.value.split(",").map(campeon => campeon.trim());

    // Filtra los campeones ingresados para asegurarse de que sean válidos
    const campeonesValidos = campeones.filter(campeon => campeonesIngresados.includes(campeon.nombre));

    // Si no se encontraron campeones válidos, muestra un mensaje de error
    if (campeonesValidos.length === 0) {
        const compositionContainer = document.getElementById("composition");
        compositionContainer.innerHTML = '<p><strong>Composición:</strong> No se encontraron campeones válidos.</p>';
        return;
    }

    const composicion = [];
    const sinergiasActivas = {};

    // Hacer una copia de los campeones válidos para seleccionar sin modificar la lista original
    const campeonesDisponibles = [...campeonesValidos];

    // Seleccionar aleatoriamente campeones sin repetir
    for (let i = 0; i < 9 && campeonesDisponibles.length > 0; i++) {
        const indexAleatorio = Math.floor(Math.random() * campeonesDisponibles.length);
        const campeonAleatorio = campeonesDisponibles.splice(indexAleatorio, 1)[0];
        composicion.push(campeonAleatorio);

        // Registra las sinergias activas de este campeón
        const contadorCampeonesEnComposicion = contarCampeones(composicion);
        campeonAleatorio.sinergias.forEach((sinergia) => {
            if (!sinergiasActivas[sinergia]) {
                sinergiasActivas[sinergia] = 0;
            }

            // Suma la cantidad de campeones con la misma sinergia
            sinergiasActivas[sinergia] +=
                contadorCampeonesEnComposicion[campeonAleatorio.nombre];
        });
    }

    // Muestra la composición y sinergias activas
    const compositionContainer = document.getElementById("composition");
    compositionContainer.innerHTML = `
        <p><strong>Composición:</strong></p>
        <ul>
            ${composicion
                .map((campeon) => `<li>${campeon.nombre}</li>`)
                .join("")}
        </ul>
        <p><strong>Sinergias Activas:</strong></p>
        <ul>
            ${Object.keys(sinergiasActivas)
                .map((sinergia) => {
                    return `<li><img src="img/sinergias/${sinergia}.png" alt="${sinergia}" class="sinergia-img">
                    ${sinergiasActivas[sinergia]}</li>`;
                })
                .join("")}
        </ul>
    `;
}


// Asigna la función al botón de generación
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generarComposicion);

// Genera una composición inicial
generarComposicion();

const randomInRange = (min, max) => Math.random() * (max - min) + min;

const randomHslColor = (hueRange, saturationRange, lightnessRange) => {
    const hue = randomInRange(hueRange[0], hueRange[1]);
    const saturation = randomInRange(saturationRange[0], saturationRange[1]);
    const lightness = randomInRange(lightnessRange[0], lightnessRange[1]);

    const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const hexColor = parseInt(tinycolor(hslColor).toHex(), 16);
    return hexColor;
};

const displayInfo = () => {
    const infoBox = document.getElementById("info-box");
    infoBox.innerHTML = `
    Highlight Color: #${effect.options.highlightColor.toString(16)}<br>
    Midtone Color: #${effect.options.midtoneColor.toString(16)}<br>
    Lowlight Color: #${effect.options.lowlightColor.toString(16)}<br>
    Base Color: #${effect.options.baseColor.toString(16)}<br>
    Blur Factor: ${effect.options.blurFactor.toFixed(2)}<br>
    Zoom: ${effect.options.zoom.toFixed(2)}<br>
    Speed: ${effect.options.speed.toFixed(2)}
  `;
};

let effect;

const createEffect = () => {
    if (effect) {
        effect.destroy();
    }

    effect = VANTA.FOG({
        el: "#body",
        highlightColor: randomHslColor([0, 360], [70, 100], [70, 100]),
        midtoneColor: randomHslColor([0, 360], [60, 100], [50, 70]),
        lowlightColor: randomHslColor([0, 360], [50, 100], [40, 60]),
        baseColor: randomHslColor([0, 360], [40, 100], [30, 50]),
        blurFactor: randomInRange(0.6, 0.9),
        zoom: randomInRange(0.3, 1.3),
        speed: randomInRange(1, 3),
    });


    displayInfo();
};

document.getElementById("randomize-button").addEventListener("click", createEffect);
createEffect();
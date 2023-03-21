// Executes Code After HTML is loaded.
document.addEventListener("DOMContentLoaded", () => {

// defines a function that generates a random number within a specified range.
const randomInRange = (min, max) => Math.random() * (max - min) + min;

// defines a function that generates a random HSL within a specified range and returns it as a hexColor.
const randomHslColor = (hueRange, saturationRange, lightnessRange) => {
    const hue = randomInRange(hueRange[0], hueRange[1]);
    const saturation = randomInRange(saturationRange[0], saturationRange[1]);
    const lightness = randomInRange(lightnessRange[0], lightnessRange[1]);

    const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const hexColor = parseInt(tinycolor(hslColor).toHex(), 16);
    return hexColor;
};

// Displays the randomized values in the #info-box element.
const displayInfo = () => {
    const infoBox = document.getElementById("info-box");
    infoBox.innerHTML = `
    Highlight Color: 0x${effect.options.highlightColor.toString(16).toUpperCase()}<br>
    Midtone Color: 0x${effect.options.midtoneColor.toString(16).toUpperCase()}<br>
    Lowlight Color: 0x${effect.options.lowlightColor.toString(16).toUpperCase()}<br>
    Base Color: 0x${effect.options.baseColor.toString(16).toUpperCase()}<br>
    Blur Factor: ${effect.options.blurFactor.toFixed(2)}<br>
    Zoom: ${effect.options.zoom.toFixed(2)}<br>
    Speed: ${effect.options.speed.toFixed(2)}
  `;
};

// Destroys the previous effect when a new one is generated.
let effect;

const createEffect = () => {
    if (effect) {
        effect.destroy();
    }

// Main Vanta.JS script
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

// Calls function to update info with new values.
displayInfo();
};

// Function to Export Config settings
const exportConfig = () => {
    const config = `
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></script>
<script>
VANTA.FOG({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x${effect.options.highlightColor.toString(16).toUpperCase()},
  midtoneColor: 0x${effect.options.midtoneColor.toString(16).toUpperCase()},
  lowlightColor: 0x${effect.options.lowlightColor.toString(16).toUpperCase()},
  baseColor: 0x${effect.options.baseColor.toString(16).toUpperCase()},
  blurFactor: ${effect.options.blurFactor.toFixed(2)},
  speed: ${effect.options.speed.toFixed(2)},
  zoom: ${effect.options.zoom.toFixed(2)}
})
</script>
  `;
    navigator.clipboard.writeText(config).then(() => {
        alert("Configuration copied to clipboard!");
    }).catch((err) => {
        console.error("Failed to copy configuration to clipboard:", err);
        alert("Failed to copy configuration to clipboard.");
    });
};

// Creates listener for randomize-button that registers click and executes the randomize function.
document.getElementById("randomize-button").addEventListener("click", createEffect);
createEffect();

// Creates listener for export-button that registers click and executes the randomize function.
document.getElementById("export-button").addEventListener("click", exportConfig);

});

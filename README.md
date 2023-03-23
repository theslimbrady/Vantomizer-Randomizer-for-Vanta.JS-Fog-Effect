# Vantomizer - Vanta.JS Fog Randomizer Tool
  
**Tags:** JavaScript, HTML, CSS, Vanta.js, Three.js
  
## Description  
  
Uses the Vanta.js fog effect to generate random scenes and display the values for you to use in your project.

## Instructions

Use the provided CodePen / GitHub pages link to use the tool or host the files on your own server to use. When you find an effect you like note the values or use the "Copy Code" button (doesn't work on CodePen) and use them in the https://www.vantajs.com/ tool or alter the code as desired to use in your own project:

```
<script src="three.r134.min.js"></script>
<script src="vanta.fog.min.js"></script>
<script>
VANTA.FOG({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xffbb00,
  midtoneColor: 0xff2000,
  lowlightColor: 0x2c00ff,
  baseColor: 0xffe9e9
})
</script>
```

Make sure you change #your-element-selector to fit whatever you would like it to display in.

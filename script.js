function generateRandomColor() {
    // Generate random values for RGB
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    // Create the RGB color string
    var color = `rgb(${red}, ${green}, ${blue})`;
  
    // Update the color of the color box
    document.getElementById("colorBox").style.backgroundColor = color;
  }
  



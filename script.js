//your JS code here. If required.
let angle = 0; // initial rotation angle
const line = document.getElementById('line');

setInterval(() => {
  angle += 2; // increase angle by 2 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; 
  // translate(-50%, -50%) keeps the line centered
}, 20);

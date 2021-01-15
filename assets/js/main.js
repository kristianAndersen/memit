document.addEventListener('DOMContentLoaded', function() {

/**create canvas canvas */
let canvas = new fabric.Canvas("fjcanvas", {
		backgroundColor: "",
		width: 500,
		height: 500,
		preserveObjectStacking: true,
});


/**set propper devicePixelRatio no blurry text
 modified script from MDN to fit fabricjs
 https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
*/

if( window.devicePixelRatio !== 1 ){
    
    let c = canvas.getElement(), w = c.width, h = c.height;
    
    // Scale the canvas up by two for retina
    c.setAttribute('width', w*window.devicePixelRatio);
    c.setAttribute('height', h*window.devicePixelRatio);
    
    // finally set the scale of the context
    c.getContext('2d').scale(window.devicePixelRatio, window.devicePixelRatio);

}  

/**Resize canvas */
/*Found a pice of jQuery on stackowerflow that i vanillafied to meet my needs */

    function canvasResize() {

		let outerCanvasContainer = document.querySelector(".wrap");

		const ratio = canvas.getWidth() / canvas.getHeight();
		const containerWidth = outerCanvasContainer.clientWidth;
		const containerHeight = outerCanvasContainer.clientHeight;

        const scaleX = containerWidth / canvas.getWidth();
        const scaleY = containerHeight / canvas.getHeight();
		const zoom = canvas.getZoom() * scaleX;

		canvas.setDimensions({
			width: containerWidth,
			height: containerWidth / ratio,
		});
		canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
	}

	window.addEventListener("resize", canvasResize);

    canvasResize();
    

/**Drag the stuff arround */
/*Thanks to Cyrielle her version of drag vas better than mine 
https://codepen.io/Milky-box/pen/GRoexRz
*/    
 dragbar(document.querySelector('.dragbar'))

    function dragbar(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.parentElement.style.top = (elmnt.parentElement.offsetTop - pos2) + "px";
    elmnt.parentElement.style.left = (elmnt.parentElement.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
    
    

});
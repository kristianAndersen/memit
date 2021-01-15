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

});
'use strict'

const input = document.createElement( 'input' );
input.style.opacity='0';
const button = document.createElement( 'button' );
button.textContent = "Press me to copy to the clipboard...";
document.body.appendChild( button );
button.onclick = () => {
	document.body.appendChild( input );
	input.value = window.location.hash.slice( 1 );
	input.select();
	document.execCommand( 'copy' );
	document.body.removeChild( input );
	button.textContent = "Copied!  Yay!";
	window.close();
};


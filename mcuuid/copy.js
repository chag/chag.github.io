'use strict'

const input = document.createElement( 'input' );
input.value = window.location.hash;
input.select();
document.execCommand( 'copy' );
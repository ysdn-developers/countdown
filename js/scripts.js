$(document).ready(function(){

});

// Randomize images

function randomize_bg(){
	var myimages=["../img/1_nichijou.gif", "../img/3_10-kanyes-greatest-quotes-545.gif", "../img/4_200.gif", "../img/5_giphy-1.gif", "../img/6_giphy-2.gif", "../img/7_giphy-4.gif", "../img/8_giphy-6.gif", "../img/9_giphy-7.gif", "../img/10_giphy-8.gif", "../img/11_giphy.gif", "../img/12_Life-sucks-adventure-time-with-finn-and-jake-34268644-400-290.gif", "../img/13_Personas-que-debes-evitar.gif"];

	var ry=Math.floor(Math.random()*myimages.length);
	if (ry===0) {
		ry=1;
	}

	$('head').append('<style type="text/css">.c-bgi{background-image: url("'+myimages[ry]+'");}</style>');
}
randomize_bg();
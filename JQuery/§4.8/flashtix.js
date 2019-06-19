$(function(){
  $.mobile.pushStateEnabled = false;
  var welkomstMelding = 'Welkom!';
  $('#homecontent').append('<p id = "gratis">gratis tickets!</p>');
  $('#homecontent').prepend(
    '<p class ="melding"> '+welkomstMelding + '</p>');
  $('#homecontent').children('.id').remove();
  $('body').bind('swipe',function(event){
    alert('je hebt over het scherm geveegd');
  });
  $('body').taphold(function(){
    datum = new Date();
    uur = datum.getHours();
    if(uur<=11){
      $('<p>Goedemorgen!</p>').prependTo('#homecontent');
    } else if (uur>=12 && uur<=17){
      $('<p>Goedemiddag!</p>').prependTo('#homecontent');
    } else if (uur>=18 && <= 24){
      $('<p>Goedeavond</p>').prependTo('#homecontent');
    }
  });
  $('body').trigger('taphold');
}); // einde jquery
$('[href="#shakira-biopage"]').append('<p class="melding">Uitverkocht!</p>');
$('[href="#shakira-biopage"]').append('<p class="melding">Nog 10 kaarten!</p>');
datum = new Date();
if(datum.getDay()===6 || datum.getDay()===0){
  $('.rock').hide();
  $('#bruce-concert').hide();
}
if(datum.getDay()===6 || datum.getDay()===0){
  $('.pop').hide();
  $('#jennifer-concert').hide();
}
$('#nora-concert').after($('#shakira-concert'));

$('#lastminutecontent li').each(function(){
  $(this).show();
})

$('<img class="poster" src="kylieposter.jpg" alt="pic" width="35%">').insertBefore('#lastminutecontent >ul');

$('#lastminutecontect > ul > li > a > img').addClass(
  'ui-corner-all');

$('#lastminutecontect > ul > li > a > img').css(
  'border-radius','50%');

$('#mycanvas').bind('click', function(e){
  var mycanvas = document.getElementById('mycanvas');
  var ctx = mycanvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(25,80);
  ctx.lineTo(200,80);
  ctx.stroke();
  var grd=ctx.createLinearGradient(200,70,200,110);
  grd.addColorStop(0, '#f55b5b');
  grd.addColorStop(1, '#3112a3');
  ctx.fillStyle=grd;
  ctx.fillRect(25,25,100,100);
  ctx.strokeRect(25,25,100,100);

  ctx.font= '40pt Georgia';
  ctx.shadowBlur = 5;
  ctx.shadowColor = 'rgb(0,0,0)';
  ctx.fillText('tekst',50,100);

  ctx.beginPath();
  var x = 220;
  var y = 100;
  var radius = 25;
  var beginhoek = 0;
  var eindhoek = (Math.PI/180) * 360;
  var klok = false;
  ctx.arc(x,y,radius,beginhoek,eindhoek,klok);
  ctx.fill();
  ctx.stroke();

  ctx.save();
  ctx.beginPath();
  x = e.pageX - this.offsetLeft;
  y = e.pageY - this.offsetTop;
  radius = 15;
  ctx.arc(x,y,radius,beginhoek,eindhoek,klok);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  cirkelObj={
    radius:10, maxRadius: 100,
    x: e.pageX - this.offsetLeft,
    y: e.pageY - this.effsetTop
  }
  tekstObj={
    size:10,
    font:'pt Georgia',
    maxSize:50,
    x: e.pageX - this.offsetLeft,
    y: e.pageY - this.offsetTop
  }
  posterObj={
    x: e.pageX - this.offsetLeft,
    y: e.pageY - this.offsetTop
  }
  ctx.lineWidth = 2;
  //load image
  newPosterObj = new Image();
  newPosterObj.src = 'shakiraposter.jpg';

  function animeren(){
    ctx.save();
    //canvas vegen
    ctx.clearRect(0,0,mycanvas.width, mycanvas.height);
    //teken poster in x,y klik coordinaten
    ctx.drawImage(newPosterObj, posterObj.x posterObj.y);
    posterObj.x += 3;
    ctx.restore();

    //increase radius
    cirkelObj.radius += 2;
    ctx.beginPath();
    ctx.arc(
      cirkelObj.x,
      cirkelObj.y,
      cirkelObj.radius,
      0,
      2*Math.PI,
      false);
    ctx.stroke();

    ctx.font = tekstObj.size + tekstObj.font;
    ctx.fillText('FlashTix ',tekstObj.x, tekstObj.y);
    //tekengrootte
    tekstObj.size += 2;
    ctx.restore();
  }//einde animeren
  setInterval(animeren,100);
});
//einde canvas
$(document).ready(function(){
  const $equipoNav = $('.equipo');
  $equipoNav.hide();
  const $team = $('.team');
  const $teamGestor = $('.teamGestor');
  const $equipoGestor = $('.equipoGestor');
  $equipoGestor.hide();
  const $detalle = $('.detalle');
  $('#1d').hide();
  $('#2d').hide();
  $('#3d').hide();
  $('#4d').hide();

  $team.on('click', function() {
    $equipoNav.toggle();
  })

  $teamGestor.on('click', function() {
    $teamGestor.css('color','green')
    $equipoGestor.toggle();
  })

  $('#1').on('click', function() {
    $('#1d').show();
    $('#2d').hide();
    $('#3d').hide();
    $('#4d').hide();
  })
  $('#2').on('click', function() {
    $('#2d').show();
    $('#1d').hide();
    $('#3d').hide();
    $('#4d').hide();
  })
  $('#3').on('click', function() {
    $('#3d').show();
    $('#1d').hide();
    $('#2d').hide();
    $('#4d').hide();
  })
  $('#4').on('click', function() {
    $('#4d').show();
    $('#1d').hide();
    $('#2d').hide();
    $('#3d').hide();
  })
 
  
});

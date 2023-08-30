// Slider de Productos, Primera Fila
$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: false,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    },
  });
});


// Slider de Productos, Segunda Fila
$(document).ready(function () {
  $('#widthAuto').lightSlider({
    autoWidth: true,
    loop: false,
    onSliderLoad: function () {
      $('#widthAuto').removeClass('cS-hidden');
    },
  });
});


// Slider de Productos, Tercera Fila
$(document).ready(function () {
  $('#widthAutoTercero').lightSlider({
    autoWidth: true,
    loop: false,
    onSliderLoad: function () {
      $('#widthAutoTercero').removeClass('cS-hidden');
    },
  });
});


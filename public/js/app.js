$(document).ready(function() {
  $.getJSON('/weltys', function(data) {
    var klass;

    switch(data.status) {
      case 'ERROR':
	klass = 'blackwatch';
        break;
      case 'MAYBE':
        klass = 'blackwatch';
        break;
      case 'YES':
        klass = 'green';
        break;
      case 'NO':
        klass = 'red';
        break;
      default:
        klass = 'blackwatch';
        break;
    }

    $('body').addClass(klass);
  });
});

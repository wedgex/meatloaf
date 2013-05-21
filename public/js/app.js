$(document).ready(function() {
  $.getJSON('/weltys', function(data) {
    var klass;

    var statusMap = {
      'ERROR': 'moving-pictures',
      'MAYBE': 'blackwatch',
      'YES': 'green',
      'NO': 'red'
    };

    klass = statusMap[data.status];

    $('body').addClass(klass);
  });
});

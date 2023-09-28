$(document).ready(function() {
    new DataTable('#example',{
        ajax: "./assets/data/resources.json",
        columns: [
            { data: "dataset_name" },
            { data: "first_author" },
            { data: "sponsor" },
            { data: "published_year" },
            { data: "content_codes" },
            { data: "num_patients" },
            { data: "num_images" },
            { data: "dataset_size" },
            { data: "dataset_link" },
        ],
    })
})

function handleSVG(){
    jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('data-src');
  
      jQuery.get(imgURL, function(data) {
        var $svg = jQuery(data).find('svg');
        if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
      }, 'xml');
    });
  }

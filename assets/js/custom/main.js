$(document).ready(function() {
    new DataTable('#resources', {
        ajax: "./assets/data/resources.json",
        dataSrc: "data",
        responsive: true,
        columns: [
            {
                data: "resource_title",
                render: function(data, type, row) {
                    return `${data}<br><a href="${row.paper_link}" target="_blank">${row.first_author} et al.</a>`;
                }
            },
            {
                data: "dataset_link",
                render: function(data, type, row) {
                    return `<a href="${data}" target="_blank">${row.resource_type}</a>`;
                }
            },
            { data: "published_year" },
            { data: "sponsor" },
            {
                data: "content_codes",
                searchPanes: {
                    options: [
                        { label: 'AI', value: 'AI' },
                        { label: 'RS', value: 'RS' },
                        { label: 'CH', value: 'CH' },
                        { label: 'CT', value: 'CT' }
                    ]
                }
            },
            { 
                data: "num_patients",
                type: "formatted-num",
                render: function(data, type, row) {
                    return data.toLocaleString();
                }
            },
            { 
                data: "num_images",
                type: "formatted-num",
                render: function(data, type, row) {
                    return data.toLocaleString();
                }
            },
            { 
                data: "dataset_size", 
                type: "file-size", 
                render: function(data, type, row) {
                    return data.toLocaleString() + " GB";
                }
            },
        ],
        order: [[2, 'desc']], 
        select: false,
        dom: 'Qlfrtip',
        searchBuilder: {
            columns: [0,4]
        }
    });
});


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

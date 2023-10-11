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
            {
                data: "sponsor",
                render: function(data, type, row) {
                    let content = "";
                    if (data.length > 1) {
                        const lastItem = data.pop();
                        content = `${data.join(", ")} & ${lastItem}`;
                    } else {
                        content = data[0] || '';
                    }

                    return content;
                }
            },
            {
                data: "content_codes",
                render: function(data, type, row) {
                    let content = "";
                    if (data.includes("AI")) {
                        content += `<span class="content-code" title="Artificial Intelligence">AI</span>`;
                    }

                    if (data.includes("BR")) {
                        content += `<span class="content-code" title="Breast (Imaging and Interventional)">BR</span>`;
                    }
                    
                    if (data.includes("BQ")) {
                        content += `<span class="content-code" title="Biomarkers/Quantitative Imaging">BQ</span>`;
                    }
                    
                    if (data.includes("CA")) {
                        content += `<span class="content-code" title="Cardiac Radiology">CA</span>`;
                    }
                    
                    if (data.includes("CH")) {
                        content += `<span class="content-code" title="Chest Radiology">CH</span>`;
                    }
                    
                    if (data.includes("CT")) {
                        content += `<span class="content-code" title="Computed Tomography">CT</span>`;
                    }
                    
                    if (data.includes("ED")) {
                        content += `<span class="content-code" title="Education">ED</span>`;
                    }
                    
                    if (data.includes("ER")) {
                        content += `<span class="content-code" title="Emergency Radiology">ER</span>`;
                    }
                    
                    if (data.includes("GI")) {
                        content += `<span class="content-code" title="Gastrointestinal Radiology">GI</span>`;
                    }
                    
                    if (data.includes("GU")) {
                        content += `<span class="content-code" title="Genitourinary Radiology">GU</span>`;
                    }
                    
                    if (data.includes("HN")) {
                        content += `<span class="content-code" title="Head and Neck">HN</span>`;
                    }
                    
                    if (data.includes("HP")) {
                        content += `<span class="content-code" title="Health Policy">HP</span>`;
                    }
                    
                    if (data.includes("IN")) {
                        content += `<span class="content-code" title="Informatics">IN</span>`;
                    }
                    
                    if (data.includes("IR")) {
                        content += `<span class="content-code" title="Interventional">IR</span>`;
                    }
                    
                    if (data.includes("LM")) {
                        content += `<span class="content-code" title="Leadership & Management">LM</span>`;
                    }
                    
                    if (data.includes("MI")) {
                        content += `<span class="content-code" title="Molecular Imaging">MI</span>`;
                    }
                    
                    if (data.includes("MK")) {
                        content += `<span class="content-code" title="Musculoskeletal Radiology">MK</span>`;
                    }
                    
                    if (data.includes("MR")) {
                        content += `<span class="content-code" title="Magnetic Resonance Imaging">MR</span>`;
                    }
                    
                    if (data.includes("NM")) {
                        content += `<span class="content-code" title="Nuclear Medicine">NM</span>`;
                    }
                    
                    if (data.includes("NR")) {
                        content += `<span class="content-code" title="Neuroradiology">NR</span>`;
                    }
                    
                    if (data.includes("OB")) {
                        content += `<span class="content-code" title="Obstetric/Gynecologic Radiology">OB</span>`;
                    }
                    
                    if (data.includes("OI")) {
                        content += `<span class="content-code" title="Oncologic Imaging">OI</span>`;
                    }

                    if (data.includes("OT")) {
                        content += `<span class="content-code" title="Other">OT</span>`;
                    }
                    
                    if (data.includes("PD")) {
                        content += `<span class="content-code" title="Pediatric Radiology">PD</span>`;
                    }
                    
                    if (data.includes("PH")) {
                        content += `<span class="content-code" title="Physics and Basic Science">PH</span>`;
                    }
                    
                    if (data.includes("PR")) {
                        content += `<span class="content-code" title="Professionalism (including Ethics)">PR</span>`;
                    }
                    
                    if (data.includes("RO")) {
                        content += `<span class="content-code" title="Radiation Oncology">RO</span>`;
                    }

                    if (data.includes("RS")) {
                        content += `<span class="content-code" title="Research and Statistical Methods">RS</span>`;
                    }
                    
                    if (data.includes("SQ")) {
                        content += `<span class="content-code" title="Quality Assurance/Quality Improvement (including radiation and general safety issues)">SQ</span>`;
                    }
                    
                    if (data.includes("US")) {
                        content += `<span class="content-code" title="Ultrasound">US</span>`;
                    }

                    if (data.includes("VA")) {
                        content += `<span class="content-code" title="Vascular Imaging">VA</span>`;
                    }
                    
                    return content;
                }
            },
            { 
                data: "num_patients",
                type: "formatted-num",
                render: function(data, type, row) {
                    if (data == 0) {
                        return "";
                    }
                    return data.toLocaleString();
                }
            },
            {
                data: "num_images",
                type: "formatted-num",
                render: function(data, type, row) {
                    if (data == 0) {
                        return "";
                    }
                    return data.toLocaleString();
                }
            },
            {
                data: "dataset_size", 
                type: "formatted-num", 
                render: function(data, type, row) {
                    if (data == 0) {
                        return "";
                    }
                    return data.toLocaleString();
                }
            },
        ],
        order: [[2, 'desc']], 
        select: false,
        dom: 'Qlfrtip',
        searchBuilder: {
            columns: [0,4,7],
            conditions: {
                4: {
                    "contains": "Contain",
                    "notContains": "Does Not Contain",
                }
            },
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

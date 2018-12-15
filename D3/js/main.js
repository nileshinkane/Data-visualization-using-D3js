// Select method and chaining   
d3.select('h1').style("color", "#791E94")
.attr('class', 'heading')
.text('Updated D3 js heading');

d3.select('body').append('p').text('This is a paragraph text');
d3.select('body').append('p').text('This is another');
d3.select('body').append('p').text('One more');

d3.selectAll('p').style("color", "#407899");

d3.select('body').append('hr');


var dataset = [ 1,2,3,4,5 ];

d3.select('body')
    .selectAll('.dataset')
    .data(dataset) // Put data in waiting state for further processing
    .enter()  // Get data items one by one and perform operations one by one on them     
    .append('p')
    .text(function(a) {return a;});

d3.select('body').append('hr');

// SVG Bar Chart

var datasetTwo = [80, 100, 56, 54, 34, 120, 150, 133];
var svgHeight = 300, svgWidth = 500, barPadding = 5;
var barWidth = (svgWidth/ datasetTwo.length);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll('rect')
    .data(datasetTwo)
    .enter()
    .append('rect')
    .attr('y', function(d) {
        return svgHeight - d; 
    })
    .attr('height', function(d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i){
       var translate = [barWidth*i, 0];
        return "translate("+ translate +")";
    });
          
          
          
          
          
          
          
          
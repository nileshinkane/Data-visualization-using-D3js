// SVG Bar Chart

 var datasetTwo = [80, 100, 56, 54, 34, 120, 150, 133];
 
var svgHeight = 300, svgWidth = 500, barPadding = 5;
var barWidth = (svgWidth/ datasetTwo.length);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", (svgHeight))
    .attr("fill", "#41D3BD");

var yScale = d3.scaleLinear()
    .domain([0, d3.max(datasetTwo)])
    .range([0, svgHeight])

var barChart = svg.selectAll('rect')
    .data(datasetTwo)
    .enter()
    .append('rect')
    .attr('y', function(d) {
        return svgHeight - yScale(d) + 1; 
    })
    .attr('height', function(d) {
        return yScale(d);   
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i){
       var translate = [barWidth*i, 0];
        return "translate("+ translate +")";
    });

var text = svg.selectAll('text')
    .data(datasetTwo)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHeight - yScale(d) + 5;
    })
    .attr("x", function (d, i) {
        return barWidth * i;
    })
    .attr("fill","#DE6449");











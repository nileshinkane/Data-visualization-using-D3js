var data = [
    {"platform":"Android","percentage": 40.11},
    {"platform":"Windows","percentage": 36.69},
    {"platform":"ios","percentage": 13.06}
];

var svgHeight =300, svgWidth = 500, radius = Math.min(svgHeight,svgWidth)/2;
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var g = svg.append('g')
    .attr("transform","translate("+radius+","+radius+")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d) {
    return d.percentage; 
});

var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append('g');

arc.append('path')
    .attr("d", path)
    .attr("fill", function(d) {return color(d.data.percentage);})

var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)
    .text(function(d){return d.percentage;})

    
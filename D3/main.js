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



          
          
          
          
          
          
          
          
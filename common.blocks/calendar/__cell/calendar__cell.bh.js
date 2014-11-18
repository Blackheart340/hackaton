module.exports = function(bh) {
    bh.match('calendar__cell', function(ctx) {
        ctx.tag('td');
        ctx.js({
           date : this.ctx.param('date')
        });
    });
};

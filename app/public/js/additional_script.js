$(function(){

//show modals
$('.modalphotos img').on('click', funtion(){
    $('#modal').modal({show: true});
});
    var mysrc = this.src.substr(0, this.src.length - 7) + '.jpg';
    $('#modalimage').attr('src', mysrc);
    $('#modalimage').on('click', function(){
        $('modal').modal('hide')
    });

//activate schedule tabs (This allows use to click on a day schedule on the home page and redirect to that tab on the schedules page...)
var hash = window.location.hash;
hash && $('ul.nav a[href=" ' + hash + '"]').tab('show');

});

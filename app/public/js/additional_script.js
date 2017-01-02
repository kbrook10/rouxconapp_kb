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
});

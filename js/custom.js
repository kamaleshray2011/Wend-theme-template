$(document).ready(function() {
    //venobox;
    $(document).ready(function() {
        $('.venobox').venobox(
            framewidth: '800px', // default: ''
            frameheight: '500px', // default: ''
            bgcolor: '#5dff5e', // default: '#fff'
            titleattr: 'data-title', // default: 'title'
            numeratio: true, // default: false
            infinigall: true, // default: false
            autoplay: true
        );
    });

    // range slider;
    $('#multi2').mdbRange({
        width: '30%',
        direction: 'horizontal',
        single: {
            active: true,
            multi: {
                active: true,
                rangeLength: 1
            },
        }
    });


});
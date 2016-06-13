$(document).ready(function() {

    var visible = 9;
    var count = $('#job-carousel ul li').length;
    if (visible > count) {
        var arrayse = $('#job-carousel ul li').toArray();
        i = 0;
        while (count <= visible) {
            if (i === arrayse.length)
                i = 0;
            var item = $('#job-carousel ul li:eq(' + i + ')').clone();
            $('#job-carousel ul').append(item);
            i++;
            count++;
        }
    }

    $('#job-carousel').jcarousel({
        animation: 'slow',
        visible: 9,
        scroll: 1,
        wrap: 'circular'
    });

    $(' .sliderjob .btn-prev').click(function() {
        $('#job-carousel ul').animate({
            left: '+=' + width
        }, 200);
    });

    $('.sliderjob .btn-next').click(function() {
        $('#job-carousel').jcarousel('scroll', '+=1');
    });


});
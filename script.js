$(document).ready( function() {
    $("#editor").summernote({
        placeholder: 'Hello bootstrap 4',
        tabsize: 2,
        height: 100,
        focus: true,
    });

    $("#getData").click( function() {
        var htmlString = $("#editor").summernote('code');
        console.log(htmlString);
        $("#display").html(htmlString);
        // console.log($("img").attr("src"));
    })
});
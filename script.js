$(document).ready( function() {
    $("#editor").summernote({
        placeholder: 'Create your article',
        tabsize: 2,
        height: 500,
        focus: true,
    });

    $("#getData").click( function() {
        var htmlString = $("#editor").summernote('code');
        // console.log(htmlStrin    g);
        $("#display").html(htmlString);
    })
});
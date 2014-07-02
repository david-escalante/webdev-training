/**
 * Created by mike-mac on 6/28/14.
 */

$(document).ready(function() {
    $( "#txtName" ).keypress(function() {
            $("#text").text($(this).val());
    });
});
function testajax() {
    jQuery.ajax({
        type: "POST",
        url: "/match",
        data: "1",
        success: function (response) {
            jQuery('div#fuckthepolice').html(response);
        }
    });
}

function testBawnk(userId) {
    jQuery.ajax({
        type: "POST",
        url: "/match/" + userId,
        data: {'result': 0},
        success: function (response) {
            alert("bawnked");
            $("#curMatch").html(response);
        }
    });
}

function testPass(userId) {
    jQuery.ajax({
        type: "POST",
        url: "/match/" + userId,
        data: { 'result': 1 },
        success: function(response){
            alert("Passed");
            $("#curMatch").html(response);
        }
    });
}
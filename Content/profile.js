function swap(image) {
    var curMain = document.getElementById("masterimage").src;
    document.getElementById("masterimage").src = image.src.replace("_thumb", "");
    if (curMain.indexOf("ghost") == -1) curMain = curMain.replace(/\.(?=[^.]*$)/, "_thumb.");
    image.src = curMain;
}

function SetProfile() {
    document.forms["detailsForm"].submit();
}
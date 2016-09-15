(function(){
    var text = document.getElementById("text");
    var button = document.getElementById("submit-button");
    button.addEventListener("click", function() {

        try {
            JSON.parse(text.value);
            alert("JSON is valid");
        }
        catch(err) {
            alert("JSON is not valid");
        }
    }
);



})();

function wordCounterUpdate () {
    var content = document.getElementById("inputbox").value;
    var wordNum = content.split(/[\s\n,.?!:;/+=()@#$%]+/).filter(function(el) {return el.length != 0});
    // About filter:
    // array1.filter(callbackfn[, thisArg])
    // A function that accepts up to three arguments.
    // The filter method calls the callbackfn function
    // one time for each element in the array.
    // A new array that contains all the values
    // for which the callback function returns true.
    // If the callback function returns false for all elements of array1,
    // the length of the new array is 0.
    document.getElementById("wordctr").innerHTML = wordNum.length;

}

// detect textbox change
$(document).ready(function(){
    $("#inputbox").on('input propertychange paste', function() {
        wordCounterUpdate();
    })
});

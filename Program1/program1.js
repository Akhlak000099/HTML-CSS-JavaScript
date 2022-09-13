var k = "";
function accept() {
    var input = document.getElementsByName('array[]');

    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        k = k + "Language (" + i + ")"+ a.value + ", ";
    }

    document.getElementById("output").innerHTML = k;
    document.getElementById("out").innerHTML = "Output";
}
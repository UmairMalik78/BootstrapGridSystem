function AddContainer() {
    document.getElementById('step-2').style.visibility='visible';
    document.getElementById('step-2').style.animationName='step2';
    document.getElementById('step-2').style.animationDuration='2s';


    document.getElementById('code-block').innerText =
        "<div class=\"container px-0\" id=\"example-cont\">\n" +
        "</div>\n";


    document.getElementById('output-block').innerHTML = document.getElementById('code-block').innerText;

}

function AddRow() {

    document.getElementById('step-3').style.visibility ='visible';
    document.getElementById('step-3').style.animationName='step3';
    document.getElementById('step-3').style.animationDuration='2s';
    document.getElementById('code-block').innerText=
        "<div class=\"container px-0\" id=\"example-cont\">\n" +
        "\t<div class=\"row mx-0\" id=\"example-row\">\n" +
        "\t</div>\n" +
        "</div>\n";
    document.getElementById('example-cont').innerHTML =
        "\t<div class=\"row mx-0\" id=\"example-row\">\n" +
        "\t</div>\n";
}

function AddDivision() {
    let numOfDivisions = document.getElementById('division-field').value;

    document.getElementById('example-row').innerHTML = "";
    document.getElementById('code-block').innerText =
        "<div class=\"container px-0\" id=\"example-cont\">\n" +
        "\t<div class=\"row mx-0\" id=\"example-row\">\n" +
        "\t</div>\n" +
        "</div>\n";

    var numOfColForField = Math.ceil(12 / numOfDivisions);
    document.getElementById('colums-fields-for-division').innerHTML = "";
    for (let i = 0; i < numOfDivisions; i++) {
        var divNumber = i + 1;
        var divId = "div_" + i;
        var new_input = "<div class='col-" + 6 + " border-1 text-center' ><strong>Div-" + divNumber + "</strong><br/> <input min='1' type='number' class='form-control col-input-fields' onchange='AddColField(" + i + ")' placeholder='Div-" + divNumber + " Cols' id='" + i + "'></div>";
        document.getElementById('colums-fields-for-division').innerHTML += new_input;
    }
}

function AddColField(divId) {
    document.getElementById('example-row').style.height="fit-content";
    let numOfCols = document.getElementById(divId).value;
    var col_field = document.getElementById("div-" + divId + "_col_");
    if (col_field != null) {
        col_field.setAttribute("class", "col-" + numOfCols + " text-center border-1");
        document.getElementById("div-" + divId + "_col_").innerText = "Col-" + numOfCols;
    }
    var code_text =
        "<div class=\"container px-0\" id='example-cont'>\n" +
        "\t<div class=\"row mx-0\" id='example-row'>\n";
    var new_col_field = "\t\t<div class='col-" + numOfCols + " text-center border-1' id='div-" + divId + "_col_'> Col-" + numOfCols + " </div>\n";
    code_text += document.getElementById('example-row').innerHTML;
    if (col_field == null) {
        code_text += new_col_field;
        document.getElementById('example-row').innerHTML += new_col_field;
    }
    code_text +=
        "\t</div>\n" +
        "</div>\n";
    document.getElementById('code-block').innerText = code_text;

}

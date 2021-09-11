var studentarray = []

function submit() {
    for (var i = 1; i <= 4; i++) {
        var name1 = document.getElementById("name" + i).value;
        studentarray.push(name1)

    }
    console.log(studentarray)
    var displayarray = []
    for (var k = 0; k < studentarray.length; k++) {
        displayarray.push("<h4>Name-" + studentarray[k] + "</h4>");
    }

    document.getElementById("output1").innerHTML = displayarray
    newarray=displayarray.join(" ")
    document.getElementById("output2").innerHTML=newarray
    document.getElementById("btn1").style.display = 'none'
    document.getElementById("btn2").style.display = "inline-block"
}

function sorty() {
    studentarray.sort();
    var displayarray = []
    for (var k = 0; k < studentarray.length; k++) {
        displayarray.push("<h4>Name-" + studentarray[k] + "</h4>");
    }
    document.getElementById("output1").innerHTML = displayarray
}
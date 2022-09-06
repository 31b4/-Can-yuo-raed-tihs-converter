function ConvertIt(){
    document.getElementById("output").innerHTML=""
    var text = document.getElementById("inp").value
    var output = MakeIt(text)
    console.log(output)
    var p = document.createElement("p")
    p.innerHTML=output

    document.getElementById("output").append(p)
}

function MakeIt(text){
    var array = text.split(' ')
    var output =""
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length >3) {
            var first_letter = element[0]
            var last_letter = element[element.length-1]
            var between = element.slice(1, -1)
            var shuffled = between.split('').sort(function(){return 0.5-Math.random()}).join('')
            while (between == shuffled) {
                shuffled = between.split('').sort(function(){return 0.5-Math.random()}).join('')
            }
           output += ' '+first_letter+shuffled+last_letter 
        }
        else{
            output += ' '+element
        }
    }
    return output
}
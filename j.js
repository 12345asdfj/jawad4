





function table() {
document.getElementById('output').innerHTML=''
let starting =parseInt( document.getElementById ('start').value)
let ending =parseInt ( document. getElementById ('end').value)
 let number=parseInt (document.getElementById('jtable').value)
for (let i= starting; i<ending; i++)
document.getElementById('output').innerHTML+=
 number+" x" +i+ "=" + number*i + "<br>"
}




var d = new Date().getHours();
if (d>4 && d<=11) {
  document.getElementById('message').innerHTML = "Good Morning!!!"
  document.body.style.backgroundColor = "#c5e6cf"
 document.getElementById('image').src = 'gm.png'
} else if (d>11 && d<=16) {
  document.getElementById('message').innerHTML = "Good Aftrenoon!!!"
  document.body.style.backgroundColor = "#b1f1f2"
  document.getElementById('image').src = 'af.jpg'
} else if (d>16 && d<=19) {
  document.getElementById('message').innerHTML = "Good Evening!!!"
  document.body.style.backgroundColor = "orange"
  document.getElementById('image').src = 'ev.jpg'
} else {
  document.getElementById('welcome').style.color = 'yellow'
  document.getElementById('message').style.color = 'yellow'
  document.getElementById('message').innerHTML = "Good Night!!!"
  document.body.style.backgroundColor = "black"
  document.getElementById('image').src = 'gn.jpg'
}

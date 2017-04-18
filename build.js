var squares = new Array();
let num_switch = 1
let add_switch = 1
color = 'black'
function draw_squares(e){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width,canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(0,0,100000,100000)
  for (n = 0; n < squares.length; n+=5){
    // ctx.fillStyle=squares[n+3];
    ctx.fillStyle='white'
    // ctx.fillStyle=squares[n+3]
    ctx.fillRect(squares[n], squares[n+1], 20, 20);
    if(squares[n+1]>=130||squares[n+1]<=0){
      squares[n+2] *= -1
    }
    if(squares[n]>=280||squares[n]<=0){
      squares[n+4] *= -1
    }
    // if(n%12==0){
      squares[n+1] -= squares[n+2]
    // }
    // else{
      squares[n] -= squares[n+4]
    // }
  }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function square(e){
  // squares.push(Math.floor(e.clientX/3-7))
  // squares.push(Math.floor(e.clientY/3-8))
  // squares.push(-Math.random()*5)
  // squares.push(getRandomColor())
  // squares.push(Math.random()*5)

  if(squares.length < 20){
    squares.push(Math.random()*300)// x coord n
    squares.push(Math.random()*150)// y coord n+1
    squares.push(-Math.random()*5)// speed vert n+2
    squares.push(getRandomColor())// color for non-flashing n+3
    squares.push(Math.random()*5)// speed horiz n+4
    console.log(squares.length)
  }
}

function sound_cut(){
  toad = document.getElementById('toad')
  toad.pause();
  setTimeout(toad.play(), 1500)
}

function back_flash(){
  if(color == 'white'){
    color = 'black'
  }else{
    color = 'white'
  }
}


setInterval(draw_squares, 45)// render framerate
setInterval(square, 75)// square spawn
setInterval(sound_cut, 3000)
// setInterval(back_flash, 150)// back flash

// $('#myCanvas').click(square)

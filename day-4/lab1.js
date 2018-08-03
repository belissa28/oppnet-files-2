var bubbles = []
var bubbleSize = 40

function setup() {
  createCanvas(500, 400)
}

function draw() {
  background(122,50,50);
  fill(245,238,238);

  for (var i = 0; i < bubbles.length; i++) {
    var currentBubble = bubbles[i]
    ellipse(currentBubble.x, currentBubble.y, bubbleSize, bubbleSize)
  }
}

 if (distance <= 20) {
      bubbles.splice(i, 1)
    }

function mouseClicked() {
  var bubble = {
var startingLength = bubbles.length
  }

  bubbles.push(bubble);

  print(bubbles.length)
}

// Selecting the canvas element and setting up the drawing context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Setting canvas size to fill the window
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// Function to generate a random number between min and max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random RGB color value
function randomRGB() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

// Ball class to create ball objects with properties and methods
class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x; // Ball's x position
        this.y = y; // Ball's y position
        this.velX = velX; // Ball's horizontal velocity
        this.velY = velY; // Ball's vertical velocity
        this.color = color; // Ball's color
        this.size = size; // Ball's size (radius)
    }

    // Method to draw the ball on the canvas
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Method to update ball's position based on its velocity
    update() {
        // Check for collision with the canvas edges and reverse velocity if needed
        if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        // Update ball position
        this.x += this.velX;
        this.y += this.velY;
    }

    // Method to detect collision with other balls and change color on collision
    collisionDetect() {
        for (const ball of balls) {
            if (!(this === ball)) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
}

// Creating an array to store balls
const balls = [];
while (balls.length < 25) {
    const size = random(10, 20);
    let ball = new Ball(
        random(size, width - size),
        random(size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size
    );

    balls.push(ball);
}

// Function to animate the balls
function loop() {
    // Clearing and filling the canvas for each frame
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    // Drawing, updating, and checking for collisions for each ball
    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    // Recursive call to create an animation loop
    requestAnimationFrame(loop);
}

// Starting the animation loop
loop();

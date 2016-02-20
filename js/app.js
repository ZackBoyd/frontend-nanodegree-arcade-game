// Enemies our player must avoid
var Enemy = function(initialX, initialY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = initialX;
    this.y = initialY;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};



Enemy.prototype = {

    update : function(dt) {
    	this.x = this.x + this.speed * dt;
    	var bugXLeftRange = this.x - 50;
        var bugXRightRange = this.x + 50;
        var bugYTopRange = this.y - 50;
        var bugYBottomRange = this.y + 50;
    // Update the enemy's position, required method for game
	// Parameter: dt, a time delta between ticks
    }
    // Draw the enemy on the screen, required method for game
    render : function() {
        ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
    };
};
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var playerInitialX = 200,
var playerInitialY = 400;

var Player = function() {
    this.sprite = 'images/char-boy.jpg';
    this.x = playerInitialX;
    this.y = playerInitialY;
    this.checkForEdge = {
    	leftEdge = false;
    	rightEdge = false;
    	bottomEdge = true;
    };
};

Player.prototype = {
    update : function() {},
    render : function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
        resetPlayerPosition: function() {
        this.x = playerInitialX;
        this.y = playerInitialY;
        this.resetCheckPosition();
    },
    handleInput: function(keyPressed) {
        // Key press listener, 'left', 'up', 'right', 'down' ✓
        var stepHorizontalLength = 100;
        var stepVerticalLength = 90;
        this.checkPosition();

        if (keyPressed === 'left') {
            if (this.EdgeChecker.leftEdge) {}
            this.x -= stepHorizontalLength;
        } else if (keyPressed === 'right') {
            if (this.EdgeChecker.rightEdge) {}
            this.x += stepHorizontalLength;
        } else if (keyPressed === 'up') {
            if (this.y === 40) {
                this.resetPlayerPosition();
            }
            this.y -= stepVerticalLength;
        } else if (keyPressed === 'down') {
            if (this.EdgeChecker.bottomEdge) {}
            this.y += stepVerticalLength;
        } else {
            console.log('>>> WRONG KEY ');
        }
    },
    checkPosition: function() {
        if (this.x === 0) {
            this.setHorizontalEdgeCheckerState(true, false);
        } else if (this.x === 400) {
            this.setHorizontalEdgeCheckerState(false, true);
        } else {
            this.setHorizontalEdgeCheckerState(false, false);
        }
        if (this.y === 400) {
            this.EdgeChecker.bottomEdge = true;
        } else {
            this.EdgeChecker.bottomEdge = false;
        }
    },
    resetCheckPosition: function() {
        this.setHorizontalEdgeCheckerState(false, false);
        this.EdgeChecker.bottomEdge = true;
    },
    setHorizontalEdgeCheckerState: function() {
        this.EdgeChecker.leftEdge = leftEdgeState;
        this.EdgeChecker.rightEdge = rightEdgeState;
    }
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Physics helpers for movement shortcuts
// Gravity applied to player, velocity updates,
// and position integrates with our delta time
const GRAVITY = 1250;


export function applyGravity(player, dt) {
    if (player.vy > 0) {
        // falling faster
        player.vy += GRAVITY * 1.5 * dt;
        // console.log(player.vy, "fall");
    } else {
        // normal gravity while rising
        player.vy += GRAVITY * dt;
        // console.log(player.vy, "jump");
    }
}


/*
// Both of these function are always being called, and im guessing you only wanted applyFallSpeedUp when jumping
export function applyGravity(player, dt) {
    player.vy += GRAVITY * dt;
    console.log("app")
}

export function applyFallSpeedUp(player, dt) {
    if (player.vy > 0) {
            player.vy += GRAVITY * 0.5 * dt;
        }
    console.log("fall")
}
*/

export function clampFallSpeed(player) {
    if (player.vy > player.maxFallSpeed) {
        player.vy = player.maxFallSpeed;
    }
}

/**
* Sets player velocity in the x direction
* @param {object} player - The player object.
* @param {number} direction - The direction, 1 is right, -1 is left, 0 is for no movement.
*/
export function setMovementX(player, direction) {
    player.vx = direction * player.moveSpeed;
}

/*
// Don't need function just for stopping x movement 
export function stopMovingX(player) {
    player.vx = 0;
}
*/

export function integrate(player, dt) {
    player.x += player.vx * dt;
    player.y += player.vy * dt;
}
input.onButtonPressed(Button.A, function () {
    if (randint(1, 6) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (randint(1, 6) == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (randint(1, 6) == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (randint(1, 6) == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (randint(1, 6) == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (randint(1, 6) == 6) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (randint(1, 6) == 1) {
        basic.showNumber(1)
    } else if (randint(1, 6) == 2) {
        basic.showNumber(2)
    } else if (randint(1, 6) == 3) {
        basic.showNumber(3)
    } else if (randint(1, 6) == 4) {
        basic.showNumber(4)
    } else if (randint(1, 6) == 5) {
        basic.showNumber(5)
    } else if (randint(1, 6) == 6) {
        basic.showNumber(6)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (randint(1, 6) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (randint(1, 6) == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (randint(1, 6) == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (randint(1, 6) == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (randint(1, 6) == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (randint(1, 6) == 6) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})

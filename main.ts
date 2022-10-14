let X = 0
let Y = 0
input.onButtonPressed(Button.A, function () {
    if (X < 5) {
        led.plot(X, Y)
        X += 1
        led.toggle(X, Y)
    } else {
        led.plot(X, Y)
        X = 0
        led.toggle(X, Y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Y < 5) {
        led.plot(X, Y)
        Y += 1
        led.toggle(X, Y)
    } else {
        led.plot(X, Y)
        Y = 0
        led.toggle(X, Y)
    }
})
basic.forever(function () {
    led.toggle(X, Y)
})

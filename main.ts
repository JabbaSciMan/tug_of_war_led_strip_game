function resetPosition () {
    basic.pause(2000)
    positionLed = length / 2
    strip.clear()
    strip.show()
    numRedClicks = 0
    numBlueClicks = 0
}
input.onButtonPressed(Button.A, function () {
    numRedClicks += 1
    strip.clear()
    positionLed += 1
})
input.onButtonPressed(Button.B, function () {
    numBlueClicks += 1
    strip.clear()
    positionLed += -1
})
let strip: neopixel.Strip = null
let positionLed = 0
let length = 0
let numRedClicks = 0
let numBlueClicks = 0
numBlueClicks = 0
numRedClicks = 0
length = 30
positionLed = length / 2
strip = neopixel.create(DigitalPin.P1, length, NeoPixelMode.RGB)
strip.setPixelColor(positionLed, neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
    if (positionLed < 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        resetPosition()
    } else if (positionLed >= length - 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        resetPosition()
    } else {
        if (numRedClicks > numBlueClicks) {
            strip.setPixelColor(positionLed, neopixel.colors(NeoPixelColors.Red))
        } else {
            strip.setPixelColor(positionLed, neopixel.colors(NeoPixelColors.Blue))
        }
        strip.show()
    }
})

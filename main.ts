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
/**
 * Led starts iln the middles.  Two players button mash to move the led toward them.  If it reaches the end, then it will light up there color.  2 seconds later the game resets.  No music or flashing lights is added.
 * 
 * Possible additions:  Change brightness as you get closer to your goal.  Change the pitch of the sound when the button is clicked.  Add sounds for a/b buttons.  
 * 
 * Add a secret slow sequence that if done correctly will change your led by 5 or 10.  EX.  If you click 3 times at one second exactish intervals, then change the position by 10.
 */
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
        led.plotBarGraph(
        numRedClicks + numBlueClicks,
        5 * length
        )
        strip.show()
    }
})

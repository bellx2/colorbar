input.onButtonPressed(Button.A, function () {
    show = 1
    strip.showRainbow(1, 360)
    while (show == 1) {
        strip.rotate(3)
        strip.show()
        images.iconImage(IconNames.Heart).scrollImage(1, 200)
    }
})
input.onButtonPressed(Button.B, function () {
    show = 0
    strip.clear()
    strip.show()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    show = 0
    strip.clear()
    for (let カウンター = 0; カウンター <= 30; カウンター++) {
        range = strip.range(カウンター, 4)
        range.show()
    }
})
let range: neopixel.Strip = null
let show = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
	
})

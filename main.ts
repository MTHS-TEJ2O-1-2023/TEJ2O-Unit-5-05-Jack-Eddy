/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Oct 2023
 * This program activates Neopixels
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

    input.onButtonPressed(Button.A, function () {
        let stripGreen = neopixel.create(DigitalPin.P16, 12, NeoPixelMode.RGB)
        stripGreen.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(1000)
        stripGreen.showColor(neopixel.colors(NeoPixelColors.Black))
        let stripRed = neopixel.create(DigitalPin.P16, 12, NeoPixelMode.RGB)
        stripRed.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        stripRed.showColor(neopixel.colors(NeoPixelColors.Black))
        let stripYellow = neopixel.create(DigitalPin.P16, 12, NeoPixelMode.RGB)
        stripYellow.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(1000)
        stripYellow.showColor(neopixel.colors(NeoPixelColors.Black))
    })
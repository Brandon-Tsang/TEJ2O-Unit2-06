/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Feb 2026
 * This program can let you turn on and off the LED.
*/

// Clear Screen and Happy Face.
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

// Turn on the LED
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

// Turn off the LED
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})

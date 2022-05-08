// Timer is triggered when you shake EDU:BIT. 
input.onGesture(Gesture.Shake, function () {
    // play tone to signal that the timer has started.
    music.playTone(262, music.beat(BeatFraction.Whole))
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    // green  led  lights  up.
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    // In this sample code, each LED lights up for 2000ms (2 seconds).
    // 
    // If you'd like each LED to light up for 1 minute. what value should you input here?
    // 
    // Here's a tip for you: 1 minute = 60 seconds
    basic.pause(2000)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    basic.pause(2000)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    // In this sample code, each LED lights up for 2000ms (2 seconds).
    // 
    // If you'd like each LED to light up for 1 minute. what value should you input here?
    // 
    // Here's a tip for you: 1 minute = 60 seconds
    basic.pause(2000)
    // Play melody wawawawaa to signal that time is up.
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    // Toggle red LED for 10 times
    for (let index = 0; index < 10; index++) {
        edubitTrafficLightBit.toggleLed(LedColor.Red)
        // In this sample code, each LED lights up for 2000ms (2 seconds).
        // 
        // If you'd like each LED to light up for 1 minute. what value should you input here?
        // 
        // Here's a tip for you: 1 minute = 60 seconds
        basic.pause(500)
    }
})

radio.onReceivedNumber(function (receivedNumber) {
    lastHeard = input.runningTime()
    if (receivedNumber == 1) {
        wuKong.setAllMotor(-100, -100)
    } else if (receivedNumber == 2) {
        wuKong.setAllMotor(100, 100)
    } else if (receivedNumber == 3) {
        wuKong.setAllMotor(0, -80)
    } else if (receivedNumber == 4) {
        wuKong.setAllMotor(-80, 0)
    } else {
        wuKong.stopAllMotor()
    }
})
let lastHeard = 0
radio.setGroup(7)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.runningTime() - lastHeard > 500) {
        wuKong.stopAllMotor()
    }
})

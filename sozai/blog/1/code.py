import time
import board
import digitalio
import usb_hid
from adafruit_hid.keyboard import Keyboard
from adafruit_hid.keyboard_layout_us import KeyboardLayoutUS
from adafruit_hid.keycode import Keycode

# 内蔵LEDの設定
led = digitalio.DigitalInOut(board.LED)
led.direction = digitalio.Direction.OUTPUT

keyboard = Keyboard(usb_hid.devices)
layout = KeyboardLayoutUS(keyboard)

button = digitalio.DigitalInOut(board.GP15)
button.direction = digitalio.Direction.INPUT
button.pull = digitalio.Pull.UP

while True:
    if not button.value:
        # LEDを点灯
        led.value = True
        
        # 1. [半角/全角]キーを押して半角にする
        keyboard.send(Keycode.GRAVE_ACCENT)
        time.sleep(0.05)
        
        # 2. "<br>" を入力
        layout.write("<br>")
        time.sleep(0.05)
        
        # 3. 再び [半角/全角]キーを押して日本語（全角）に戻す
        keyboard.send(Keycode.GRAVE_ACCENT)
        
        # LEDを消灯
        led.value = False
        
        time.sleep(0.3)
        while not button.value:
            time.sleep(0.01)
            
    time.sleep(0.01)
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.putString(
"Your A Good",
0,
0
)
lcd1602.putString(
"Teacher!",
0,
1
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
basic.forever(function () {
	
})

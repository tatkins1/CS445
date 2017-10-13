package CS445.hw3part3;

import button_package.*;

public class TableLamp {
	PushButton b;
	public TableLamp(PushButton button, LightBulb_Interface lightbulb ){
		button.setLightBulb(lightbulb);
		b=button;
	}
	public void push(){
		b.push();;
	}
	
}

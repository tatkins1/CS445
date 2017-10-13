package button_package;

import CS445.hw3part3.LightBulb_Interface;

public class PushButton {
	boolean isOn;
	LightBulb_Interface l;
	public PushButton(){
		isOn=false;
		}
	public void setLightBulb(LightBulb_Interface lightbulb){
		l=lightbulb;
	}
	public void push(){
		if(!isOn){
			l.on();
			isOn=true;
		}
		else{
			l.off();
			isOn=false;
		}
	}
	}


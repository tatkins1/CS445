package lightbulb_package;

import button_package.LightBulb_Interface;

public class LightBulb implements LightBulb_Interface {
	boolean isOn;
	public LightBulb(){
		isOn=false;
	}
	public void on(){
		isOn=true;
		System.out.println("Lightbulb ON");
	}
	public void off(){
		isOn=false;
		System.out.println("Lightbulb OFF");
	}
}

package lightbulb_package;

import CS445.hw3part3.LightBulb_Interface;

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
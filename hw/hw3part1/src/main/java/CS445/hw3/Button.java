package CS445.hw3;

public class Button {
	boolean isOn;
	LightBulb lb;
	
	public Button(){
		isOn=false;
		lb= new LightBulb();
	}
	public void switchOn(){
		System.out.println("Button switched to ON");
		lb.on();
		isOn=true;
	}
	public void switchOff(){
		System.out.println("Button switched to OFF");
		lb.off();
		isOn=false;
	}
}

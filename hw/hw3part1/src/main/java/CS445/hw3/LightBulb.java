package CS445.hw3;

public class LightBulb {
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

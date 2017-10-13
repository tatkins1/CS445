package button_package;
public class Button {
	boolean isOn;
	LightBulb_Interface lb;
	
	public Button(){
		isOn=false;
	}
	//property dependency injection
	public void setLightBulb(LightBulb_Interface a){
		lb= a;
	}
	public void switchOn(){
		if(!isOn){
		System.out.println("Button switched to ON");
		lb.on();
		isOn=true;
		}
		else{
			System.out.println("Failed: Button already switched On!");
		}
	}
	public void switchOff(){
		if(isOn){
			System.out.println("Button switched to OFF");
			lb.off();
			isOn=false;
		}
		else{
			System.out.println("Failed: Button already switched Off!");
		}
		
	}
}

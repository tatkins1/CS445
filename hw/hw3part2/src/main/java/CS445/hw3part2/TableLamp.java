package CS445.hw3part2;
import button_package.*;
public class TableLamp {
	Button b;
	public TableLamp(Button button, LightBulb_Interface lightbulb ){
		button.setLightBulb(lightbulb);
		b=button;
	}
	public void switchOn(){
		b.switchOn();
	}
	public void switchOff(){
		b.switchOff();
	}
}

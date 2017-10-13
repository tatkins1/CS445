package CS445.hw3part3;

import lightbulb_package.LightBulb;
import button_package.PushButton;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	//dependency root
        PushButton button1 = new PushButton();
        LightBulb lightbulb1 = new LightBulb();
        //Constructor Dependency injection
        TableLamp tablelamp1 = new TableLamp(button1, lightbulb1);
        
        tablelamp1.push();
        
    }
}

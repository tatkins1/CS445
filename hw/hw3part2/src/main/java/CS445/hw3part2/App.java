package CS445.hw3part2;

import button_package.*;
import lightbulb_package.LightBulb;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {	
    	//dependency root
        Button button1 = new Button();
        LightBulb lightbulb1 = new LightBulb();
        //Constructor Dependency injection
        TableLamp tablelamp1 = new TableLamp(button1, lightbulb1);
        
        tablelamp1.switchOn();
        tablelamp1.switchOff();
    }
}

package CS445.hw3part2;
import static org.junit.Assert.*;

import java.io.*;

import lightbulb_package.LightBulb;

import org.junit.Test;

import button_package.*;
public class tablelampTest {
	@Test
	public void Test_TableLampON(){
	//Prepare to redirect output
	OutputStream os = new ByteArrayOutputStream();
	PrintStream ps = new PrintStream(os);
	System.setOut(ps);
	Button b= new Button();
	LightBulb l = new LightBulb();
	TableLamp tl= new TableLamp(b,l);
	tl.switchOn();
	assertEquals("Button switched to ON\nLightbulb ON\n", os.toString());

	
	//Restore normal output
	PrintStream originalOut = System.out;
	System.setOut(originalOut);
}
	@Test
	public void Test_TableLampOFF(){
		Button b= new Button();
		LightBulb l = new LightBulb();
		TableLamp tl= new TableLamp(b,l);
		tl.switchOn();
			//Prepare to redirect output
			OutputStream os = new ByteArrayOutputStream();
			PrintStream ps = new PrintStream(os);
			System.setOut(ps);
			tl.switchOff();
			assertEquals("Button switched to OFF\nLightbulb OFF\n", os.toString());


		//Restore normal output
		PrintStream originalOut = System.out;
		System.setOut(originalOut);
}
}

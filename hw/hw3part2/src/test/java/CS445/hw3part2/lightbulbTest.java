package CS445.hw3part2;

import static org.junit.Assert.*;

import java.io.*;

import lightbulb_package.LightBulb;

import org.junit.Test;

public class lightbulbTest {
	@Test
	public void TestTurnOn(){
		//Prepare to redirect output
				OutputStream os = new ByteArrayOutputStream();
				PrintStream ps = new PrintStream(os);
				System.setOut(ps);
				LightBulb l = new LightBulb();
				l.on();
		
				assertEquals("Lightbulb ON\n", os.toString());

				
				//Restore normal output
				PrintStream originalOut = System.out;
				System.setOut(originalOut);
	}
	@Test
	public void TestTurnOff(){
		//Prepare to redirect output
				OutputStream os = new ByteArrayOutputStream();
				PrintStream ps = new PrintStream(os);
				System.setOut(ps);
				LightBulb l = new LightBulb();
				l.off();
		
				assertEquals("Lightbulb OFF\n", os.toString());

				
				//Restore normal output
				PrintStream originalOut = System.out;
				System.setOut(originalOut);
	}

}

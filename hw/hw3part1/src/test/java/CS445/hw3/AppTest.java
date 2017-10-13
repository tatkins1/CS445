package CS445.hw3;

import static org.junit.Assert.*;

import java.io.*;

import org.junit.Test;


public class AppTest {
	@Test
	public void TestButtonOn(){
		
		//Prepare to redirect output
		OutputStream os = new ByteArrayOutputStream();
		PrintStream ps = new PrintStream(os);
		System.setOut(ps);
		Button b= new Button();
		b.switchOn();
		assertEquals("Button switched to ON\nLightbulb ON\n", os.toString());

		
		//Restore normal output
		PrintStream originalOut = System.out;
		System.setOut(originalOut);
	}
	@Test
	public void TestButtonOff(){
		
		//Prepare to redirect output
		OutputStream os = new ByteArrayOutputStream();
		PrintStream ps = new PrintStream(os);
		System.setOut(ps);

		Button b= new Button();
		b.switchOff();
		assertEquals("Button switched to OFF\nLightbulb OFF\n", os.toString());

		
		//Restore normal output
		PrintStream originalOut = System.out;
		System.setOut(originalOut);
	}
	@Test
	public void TestMain(){
		String[] b=new String[10];
		Main.main(b);
		assertTrue(true);
	}
}

package CS445.hw3part3;

import static org.junit.Assert.assertEquals;

import java.io.ByteArrayOutputStream;
import java.io.OutputStream;
import java.io.PrintStream;

import lightbulb_package.LightBulb;

import org.junit.Test;

import button_package.*;

public class pushbuttonTest {
	@Test
	public void Test_push_whenOff(){
		
		//Prepare to redirect output
		OutputStream os = new ByteArrayOutputStream();
		PrintStream ps = new PrintStream(os);
		System.setOut(ps);
		PushButton b= new PushButton();
		LightBulb l = new LightBulb();
		b.setLightBulb(l);
		b.push();
		assertEquals("Lightbulb ON\n", os.toString());

		
		//Restore normal output
		PrintStream originalOut = System.out;
		System.setOut(originalOut);
		
	}
	@Test
	public void Test_push_whenOn(){
		PushButton b= new PushButton();
		LightBulb l = new LightBulb();
		b.setLightBulb(l);
		b.push();
		//Prepare to redirect output
		OutputStream os = new ByteArrayOutputStream();
		PrintStream ps = new PrintStream(os);
		System.setOut(ps);
		b.push();
		assertEquals("Lightbulb OFF\n", os.toString());

		
		//Restore normal output
		PrintStream originalOut = System.out;
		System.setOut(originalOut);
		
	}
}

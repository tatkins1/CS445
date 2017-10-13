package CS445.hw3part2;


import static org.junit.Assert.*;

import java.io.*;

import lightbulb_package.LightBulb;

import org.junit.Test;

import button_package.*;

public class buttonTest {
	@Test
	public void Test_switchOn_whenOff(){
		
		//Prepare to redirect output
		OutputStream os = new ByteArrayOutputStream();
		PrintStream ps = new PrintStream(os);
		System.setOut(ps);
		Button b= new Button();
		LightBulb l = new LightBulb();
		b.setLightBulb(l);
		b.switchOn();
		assertEquals("Button switched to ON\nLightbulb ON\n", os.toString());

		
		//Restore normal output
		PrintStream originalOut = System.out;
		System.setOut(originalOut);
		
	}
	@Test
	public void Test_switchOn_whenOn(){
		Button b= new Button();
		LightBulb l = new LightBulb();
		b.setLightBulb(l);
		b.switchOn();
		//Prepare to redirect output
		OutputStream os = new ByteArrayOutputStream();
		PrintStream ps = new PrintStream(os);
		System.setOut(ps);
		b.switchOn();
		assertEquals("Failed: Button already switched On!\n", os.toString());

		
		//Restore normal output
		PrintStream originalOut = System.out;
		System.setOut(originalOut);
		
	}
	@Test
	public void Test_switchOff_whenOn(){
		Button b= new Button();
		LightBulb l = new LightBulb();
		b.setLightBulb(l);
		b.switchOn();
		//Prepare to redirect output
		OutputStream os = new ByteArrayOutputStream();
		PrintStream ps = new PrintStream(os);
		System.setOut(ps);
		b.switchOff();
		assertEquals("Button switched to OFF\nLightbulb OFF\n", os.toString());

		
		//Restore normal output
		PrintStream originalOut = System.out;
		System.setOut(originalOut);
		
	}
	@Test
	public void Test_switchOff_whenOff(){
		//Prepare to redirect output
		OutputStream os = new ByteArrayOutputStream();
		PrintStream ps = new PrintStream(os);
		System.setOut(ps);
		Button b= new Button();
		LightBulb l = new LightBulb();
		b.setLightBulb(l);
		b.switchOff();
		assertEquals("Failed: Button already switched Off!\n", os.toString());

		
		//Restore normal output
		PrintStream originalOut = System.out;
		System.setOut(originalOut);
		
	}

}

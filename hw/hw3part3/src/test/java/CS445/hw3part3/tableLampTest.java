package CS445.hw3part3;

import static org.junit.Assert.*;

import java.io.*;

import lightbulb_package.LightBulb;

import org.junit.Test;

import button_package.*;
public class tableLampTest {
	@Test
	public void Test_TableLamppush(){
	//Prepare to redirect output
	OutputStream os = new ByteArrayOutputStream();
	PrintStream ps = new PrintStream(os);
	System.setOut(ps);
	PushButton b= new PushButton();
	LightBulb l = new LightBulb();
	TableLamp tl= new TableLamp(b,l);
	tl.push();
	assertEquals("Lightbulb ON\n", os.toString());

	
	//Restore normal output
	PrintStream originalOut = System.out;
	System.setOut(originalOut);
}
	
}

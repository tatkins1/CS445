package TahjAtkinsonCS445.hw2;

import static org.junit.Assert.*;

import org.junit.Test;

public class ImprovedIntegerTest {
	@Test
	public void TestImprovedInteger_overridden_method(){
		ImprovedInteger a = new ImprovedInteger(5);
		assertEquals("5 should be equal to a.intValue() which is overridden method",5,a.intValue());
	}
	@Test
	public void TestsomeOthermethod(){
		ImprovedInteger a = new ImprovedInteger(5);
		a.someNewMethod();
		
		assertTrue(true);
	}
	@Test
	public void TestgetInt(){
		ImprovedInteger a = new ImprovedInteger(5);
		assertEquals("should return instance as class Integer","Integer",a.getInteger().getClass().getSimpleName());

	
	}
}

package CS445.hw3part3;
import static org.junit.Assert.*;


import org.junit.Test;

public class AppTest{
	@Test
	public void TestpublicApp(){
		App a = new App();
		String[] b=new String[10];
		App.main(b);
		a.getClass();
		assertTrue(true);
	}
}
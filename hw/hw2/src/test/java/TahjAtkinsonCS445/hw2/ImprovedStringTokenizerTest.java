package TahjAtkinsonCS445.hw2;
import static org.junit.Assert.*;
import org.junit.Test;


public class ImprovedStringTokenizerTest {
	@Test
	public void TestStringtoArray(){
		ImprovedStringTokenizer s = new ImprovedStringTokenizer("This class is easy");
		String[] str_array=s.stringToArray();
		assertEquals("First element in str_array should be This", str_array[0], "This");
		assertEquals("First element in str_array should be This", str_array[1], "class");
		assertEquals("First element in str_array should be This", str_array[2], "is");
		assertEquals("First element in str_array should be This", str_array[3], "easy");
	}
}

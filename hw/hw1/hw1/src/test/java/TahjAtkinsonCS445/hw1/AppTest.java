package TahjAtkinsonCS445.hw1;
import static org.junit.Assert.*;
import org.junit.Test;
public class AppTest {
	@Test
	public void TestToString(){
		Ant ant1 = new Ant("ant1");
		assertEquals("ant1.toString() should return ant1 Ant", "ant1 Ant", ant1.toString());
	}
	@Test
	public void TestWhatDidYouEat(){
		Ant ant1 = new Ant("ant1");
		Ant ant2 = new Ant("ant2");
		assertNull("ant1.lastmeal should be null", ant1.lastmeal);
		ant1.eat(ant2);
		assertEquals("ant1.lastmeal should be ant2", ant2, ant1.lastmeal);
		Creature bat1 = new Bat("bat1");
		Creature tiger = new Tiger("tiger");
		Creature fly1 = new Fly("fly1");
		Thing rock = new Thing("rock");
		bat1.eat(rock);
		assertNull("bat1.lastmeal should be null", bat1.lastmeal);
		bat1.eat(tiger);
		assertEquals("bat1.lastmeal should be tiger", tiger, bat1.lastmeal);
		fly1.eat(bat1);
		assertNull("bat1.lastmeal should be null", fly1.lastmeal);
		fly1.eat(rock);
		assertEquals("bat1.lastmeal should be rock", rock, fly1.lastmeal);
	}
	@Test
	public void whatDidYouEatTest(){
		Creature bat1 = new Bat("bat1");
		Creature tiger = new Tiger("tiger");
		Creature fly1 = new Fly("fly1");
		Thing rock = new Thing("rock");
		bat1.eat(tiger);
		assertEquals("bat1.lastmeal should be tiger", tiger, bat1.lastmeal);
		fly1.eat(rock);
		assertEquals("bat1.lastmeal should be rock", rock, fly1.lastmeal);
	}
}

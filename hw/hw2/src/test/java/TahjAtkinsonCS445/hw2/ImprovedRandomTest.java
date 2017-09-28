package TahjAtkinsonCS445.hw2;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class ImprovedRandomTest {
	@Test
	public void TestImprovedRandom_postitve_numbers(){
		ImprovedRandom r = new ImprovedRandom();
		int a=5;
		int b=10;
		boolean condition= true;
		for(int i=0; i<1000; i++){
			int ans=r.randomBetween(a, b);
			if (ans>=10||ans<5){
				condition=false;
			}
		}
		assertTrue(condition);
	}
	@Test
	public void TestImprovedRandom_negative_numbers(){
		ImprovedRandom r = new ImprovedRandom();
		int a=-5;
		int b=-10;
		boolean condition= true;
		for(int i=0; i<1000; i++){
			int ans=r.randomBetween(a, b);
			if (ans>=-5||ans<-10){
				condition=false;
			}
		}
		assertTrue(condition);
	}
	@Test
	public void TestImprovedRandom_mixed1(){
		ImprovedRandom r = new ImprovedRandom();
		int a=-5;
		int b=10;
		boolean condition= true;
		for(int i=0; i<1000; i++){
			int ans=r.randomBetween(a, b);
			if (ans>=10||ans<-5){
				condition=false;
			}
		}
		assertTrue(condition);
	}
	@Test
	public void TestImprovedRandom_mixed2(){
		ImprovedRandom r = new ImprovedRandom();
		int a=5;
		int b=-10;
		boolean condition= true;
		for(int i=0; i<1000; i++){
			int ans=r.randomBetween(a, b);
			if (ans>=5||ans<-10){
				condition=false;
			}
		}
		assertTrue(condition);
	}
	@Test
	public void TestImprovedRandom_0(){
		ImprovedRandom r = new ImprovedRandom();
		int a=5;
		int b=0;
		boolean condition= true;
		for(int i=0; i<1000; i++){
			int ans=r.randomBetween(a, b);
			if (ans>5||ans<0){
				condition=false;
			}
		}
		assertTrue(condition);
	}
	@Test
	public void TestImprovedRandom_same_numbers(){
		ImprovedRandom r = new ImprovedRandom();
		int a=5;
		int b=5;
		boolean condition= true;
		for(int i=0; i<1000; i++){
			int ans=r.randomBetween(a, b);
			if (ans!=5){
				condition=false;
			}
		}
		assertTrue(condition);
	}
	
	@Test
	public void TestImprovedRandom_seed_mixed(){
		ImprovedRandom r = new ImprovedRandom(57);
		int a=5;
		int b=10;
		boolean condition= true;
		for(int i=0; i<100; i++){
			int ans=r.randomBetween(a, b);
			if (ans>=10||ans<5){
				condition=false;
			}
		}
		assertTrue(condition);
	}
}

package TahjAtkinsonCS445.hw1;

public class Ant extends Creature{

	public Ant( String n) {
		super(n);
	}
	public void move(){
		System.out.println(this.name + this.getClass().getSimpleName() + " is crawling around.");
	}
	

}

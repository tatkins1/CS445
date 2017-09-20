package TahjAtkinsonCS445.hw1;

public class Tiger extends Creature {

	public Tiger(String n) {
		super(n);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void move() {
		// TODO Auto-generated method stub
		System.out.println(this.name + this.getClass().getSimpleName() + " has just pounced.");

	}

}
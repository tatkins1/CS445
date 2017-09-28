package TahjAtkinsonCS445.hw1;

public class Bat extends Creature implements Flyer {

	public Bat(String n) {
		super(n);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void move() {
		// TODO Auto-generated method stub
		this.fly();
		
	}
	
	
	public void fly() {
		// TODO Auto-generated method stub
		System.out.println(this.toString() + " is swooping through the dark");
	}
	@Override
	public void eat(Thing aThing){
		if(!aThing.getClass().getSimpleName().equals("Thing")){
			this.lastmeal = aThing;
			System.out.println(this.toString() +" has just eaten "+ aThing.toString());
		}
		else{
			System.out.println(this.toString() +" won't eat a "+ aThing.toString());
		}
	}

}
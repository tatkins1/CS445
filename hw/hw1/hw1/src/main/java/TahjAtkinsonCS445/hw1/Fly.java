package TahjAtkinsonCS445.hw1;

public class Fly extends Creature implements Flyer {

	public Fly(String n) {
		// TODO Auto-generated constructor stub
		super(n);
	}
	@Override
	public void move() {
		// TODO Auto-generated method stub
		this.fly();
	}
	
	public void fly() {
		// TODO Auto-generated method stub
		System.out.println(this.toString() + " is buzzing around in flight");
	}
	@Override
	public void eat(Thing aThing){
		if(aThing.getClass().getSimpleName().equals("Thing")){
			this.lastmeal = aThing;
			System.out.println(this.toString() +" has just eaten "+ aThing.toString());
		}
		else{
			System.out.println(this.toString() +" won't eat a "+ aThing.toString());
		}
	}


}
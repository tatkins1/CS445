package TahjAtkinsonCS445.hw1;

public abstract class Creature extends Thing{
	Thing lastmeal;
	public Creature(String n){
		super(n);
	}
	public void eat(Thing aThing){
		lastmeal = aThing;
		System.out.println(this.toString() +" has just eaten "+ aThing.toString());
	}
	public abstract void move();
	public void whatDidYouEat(){
		if(lastmeal != null){
			System.out.println(super.toString() + " has eaten a" + lastmeal.getClass().getName());
		}
		else{
			System.out.println(super.toString() +" has had nothing to eat!");
		}
		
	}
}

package TahjAtkinsonCS445.hw1;

public class Thing {
	String name;
	public Thing(String n){
		name = n;
	}
	public String toString(){
		if(this.getClass().getSimpleName().equals("Thing")){
			return name;
		}
		else{
			return name + " "+ this.getClass().getSimpleName();
		}
		
	}
}
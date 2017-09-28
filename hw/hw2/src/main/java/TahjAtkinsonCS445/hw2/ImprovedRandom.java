package TahjAtkinsonCS445.hw2;
import java.util.Random;
import java.lang.Math;
public class ImprovedRandom extends Random {
     /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public ImprovedRandom(){
		super();
	}
	public ImprovedRandom(long seed){
		super(seed);
	}
	public int randomBetween(int a, int b){
		if (a<b){
			int diff = b-a;
			int ran=this.nextInt( Math.abs(diff) );
			return ran+a;
		}
		else if(a>b){
			int diff = a-b;
			int ran=this.nextInt( Math.abs(diff) );
			return ran+b;
		}
		else{
			return a;
		}
		
	}
}

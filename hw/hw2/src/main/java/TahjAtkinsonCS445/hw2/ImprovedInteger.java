package TahjAtkinsonCS445.hw2;




public class ImprovedInteger {
	public Integer a;
	
	public ImprovedInteger(int x){
		a= new Integer(x);	
	}
	public Integer getInteger(){
		return a;
	}
	public int intValue(){
		System.out.println(" Almost like an Overridden method ");
		return a.intValue();
	}
	public void someNewMethod(){
		System.out.println("Hello");
	}
}



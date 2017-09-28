package TahjAtkinsonCS445.hw2;
import java.util.*;

public class ImprovedStringTokenizer extends StringTokenizer {
	public ImprovedStringTokenizer(String str){
		  super(str);
	  }
	 /* public ArrayList<String> stringToArray1(){
		  ArrayList<String> str_array = new ArrayList<String>();
		  while (this.hasMoreTokens()){
			  str_array.add(this.nextToken());
		  }
		  return str_array;
		  }*/
	  public String[] stringToArray(){
		  int size = this.countTokens();
		  String[] str_array = new String[size];
		  int i=0;
		  while (this.hasMoreTokens()){
			  str_array[i]=(this.nextToken());
			  i++;
		  }
		  return str_array;
	  }
	  	
}

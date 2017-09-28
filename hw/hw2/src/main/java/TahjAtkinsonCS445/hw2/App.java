package TahjAtkinsonCS445.hw2;
import java.util.*;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
       ImprovedInteger x=new ImprovedInteger(1);
       ImprovedInteger y=new ImprovedInteger(1);
        System.out.println(x.a+y.a);
       ImprovedRandom r = new ImprovedRandom();
       System.out.println(r.nextInt(5));
       System.out.println(r.randomBetween(3, 7));
       ImprovedRandom rr = new ImprovedRandom(50);
        System.out.println(rr.nextInt(60));
        System.out.println(rr.nextInt(40));
        System.out.println(rr.nextInt(472));
        
        StringTokenizer st = new StringTokenizer("my name is khan"," ");
  	  
	     while (st.hasMoreTokens()) {  
	         System.out.println(st.nextToken());  
	     }  

    }
}


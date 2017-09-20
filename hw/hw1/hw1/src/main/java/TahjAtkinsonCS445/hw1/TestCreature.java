package TahjAtkinsonCS445.hw1;

import java.util.*;  
public class TestCreature {
	public static final int THING_COUNT = 10;
	public static final int CREATURE_COUNT = 6;
	public TestCreature(){
		
	}
	
	public static void main(String[] args){
		ArrayList<Creature> creaturearray = new ArrayList<Creature>(CREATURE_COUNT);
		ArrayList<Thing> thingarray = new ArrayList<Thing>(THING_COUNT);
		/*TestCreature.main tests the hierarchy of Things and Creatures. Steps: 
- create some Creature instances (i.e. an array of them) 
- create some simple Thing instances 
- add the Creature instances to the array of simple Thing instances 
- print a heading "Things:" followed by a blank line 
- print each thing, which each print one line about themeselves 
- print a blank line 
- print a heading "Creatures:" followed by a blank line 
- print each creature 
- print a blank line 
		*/
		Creature Bat1 = new Bat("Bat1");
		Creature Bat2 = new Bat("Bat2");
		Creature ant1 = new Ant("ant1");
		Creature tiger1 = new Tiger("tiger1");
		Creature ant2 = new Ant("ant2");
		Creature tiger2 = new Tiger("tiger2");
		creaturearray.add(Bat1);
		creaturearray.add(Bat2);
		creaturearray.add(ant1);
		creaturearray.add(tiger1);
		creaturearray.add(ant2);
		creaturearray.add(tiger2);
		Thing rock = new Thing("rock");
		Thing paper = new Thing("paper");
		Thing scissors = new Thing("scissors");
		Thing shoot = new Thing("shoot");
		thingarray.add(rock);		
		thingarray.add(paper);
		thingarray.add(scissors);
		thingarray.add(shoot);
		thingarray.addAll(creaturearray);
		System.out.println("Things:");
		System.out.println();
		for(Thing thing:thingarray){
			System.out.println(thing); 
		}
		System.out.println("Creatures: ");
		System.out.println();
		for(Creature thing:creaturearray){
			System.out.println(thing.toString()+" "+thing.getClass().getSimpleName());
		}
		
		
	}
}

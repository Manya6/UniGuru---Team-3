package userClass;
import java.io.IOException;
import java.util.HashMap;
import java.util.PriorityQueue;

public class CodeForWorld {
	public static void main(String[] args) throws IOException{
		Restaurant Starbucks = new Restaurant("Starbucks", 4.8, true, 6, 7.50);
		
		Restaurant DutchBros = new Restaurant("DutchBros", 5, true, 6, 5.0);	
		
		addNeibors(Starbucks, DutchBros, 20);
		
		System.out.print(Starbucks);
		System.out.println("\n");
		System.out.println(DutchBros);
		
				
	} // main
	
	public static void addNeibors(Location restruntOne, Location restruntTwo, int distance) {
		restruntOne.addNeibor(distance, restruntTwo.getName());
		restruntTwo.addNeibor(distance, restruntOne.getName());
	}
	
}// code for world

// classes go here 
class Location {
	private String name; 
	
	private PriorityQueue<Integer> edges = new PriorityQueue<>();
	private HashMap<Integer, String> neibors = new HashMap<Integer, String>();
	
	public Location(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String newName) {
		name = newName;
	}
	
	public void addNeibor(int distance, String neiborName) {
		neibors.put(distance, neiborName);
		edges.add(distance);
	}
	
	public String getClosestNeibor() {
		int clostestDistance = edges.peek();
		String clostestNeibor = neibors.get(clostestDistance);
		
		return clostestNeibor;
	}
	
	@Override
	public String toString() {
		String toPrint = "Location: " + getName();
		
		return toPrint;
	}
}


class Restaurant extends Location{ 
	private double rating;
	private Boolean mostlyFoodOrDrink; // false for food and true for drink
	private double avgDrinkCost;
	private double avgFoodCost; 
	
	public Restaurant(String name, double rating, Boolean mostlyFoodOrDrink, double avgDrinkCost, double avgFoodCost) {
		super(name);
		
		this.rating = rating;
		this.mostlyFoodOrDrink = mostlyFoodOrDrink;
		this.avgDrinkCost = avgDrinkCost;
		this.avgFoodCost = avgFoodCost;
		
	}
	
	//Getters and setters for all varibales
	
	public double getRating() {
		return rating;
	}
	public void setRating(double newRating) {
		rating = newRating;
	}
	
	public boolean getFoodOrDrink() {
		return mostlyFoodOrDrink;
	}
	public void setFoodOrDrink(Boolean newSet) {
		mostlyFoodOrDrink = newSet;
	}
	
	public double getAvgDrinkCost() {
		return avgDrinkCost;
	}
	public void setAvgDrinkCos(double newAvgDrinkCost) {
		avgDrinkCost = newAvgDrinkCost;
	}
	
	public double getAvgFoodCost() {
		return avgFoodCost;
	}
	public void setAvgFoodCost(double newAvgFoodCost) {
		avgFoodCost = newAvgFoodCost;
	}
	
	//------------------end getters and setters-----------------
	
	
	
	
	
	
	@Override
	public String toString() {
		String whatToPrint = getName() + "\nRating: " + getRating() + "\nMostly ";
		
		if (getFoodOrDrink()) {
			whatToPrint = whatToPrint + "drink items\n";
		}
		else {
			whatToPrint = whatToPrint + "food items\n";
		}
		whatToPrint = whatToPrint + "Avgerage Drink Cost = " + getAvgDrinkCost();
		whatToPrint = whatToPrint + "\nAvgerage Food Cost = " + getAvgFoodCost();
		whatToPrint = whatToPrint + "\nClosest Neibor: " + getClosestNeibor();
		
		
		return whatToPrint;
	}
	
}//end restaurant








//
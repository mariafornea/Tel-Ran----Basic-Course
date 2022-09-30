import java.util.Scanner;
public class Main
{
    
    public static void Order (int x, int y, int z) {
        if ((x > y) && (y > z)) {
            System.out.println("Descreasing order");
        }
        else {
            if ((x < y) && (y < z)) {
                System.out.println("Increasing order");
            }
            else {
                System.out.println("Neither increasing nor decreasing order");
            }
        }
    }
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Enter three numbers");
		int first_number = scanner.nextInt();
		int second_number = scanner.nextInt();
		int third_number = scanner.nextInt();
		Order(first_number, second_number, third_number);
	}
}
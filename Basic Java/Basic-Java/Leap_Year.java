import java.util.Scanner;
public class Main
{
    public static void Leap_year (int y) {
        if  (y % 4 == 0) {
            System.out.println("Этот год является високосным");
        }
        else {
            System.out.println("Этот год не является високосным");
        }
    }
	public static void main(String[] args) {
		    Scanner scanner = new Scanner(System.in);
		    System.out.println("Введите год: ");
		    int year = scanner.nextInt();
		    Leap_year(year);
	}
}
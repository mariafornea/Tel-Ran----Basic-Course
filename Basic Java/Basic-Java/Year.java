import java.util.Scanner;
public class Main
{
   
    public static double Year (double x) {
        double result = x * 0.000002;
        return result;
    }
    public static double Day (double x) {
        double result = x * 0.0007;
        return result;
    }
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Введите минуты: ");
		double a = scanner.nextInt();
		double year = Year(a);
		System.out.println(a + " минут = " + year + " года");
		double day = Day(a);
		System.out.println(a + " минут = " + year + " сутки");
	}
	
}
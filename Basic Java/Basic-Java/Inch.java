import java.util.Scanner;
public class Main
{
   
    public static double Inch (double x) {
        double result = x *  0.0254;
        return result;
    }
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Введите число в дюймах: ");
		double a = scanner.nextInt();
		double metr = Inch(a);
		System.out.println(a + " дюйма = " + metr + " м");
	}
	
}
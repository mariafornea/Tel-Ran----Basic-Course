import java.util.Scanner;
public class Main
{
    public static int Square (int x) {
            int result = x * x;
            return result;
    }
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Введите число: ");
		int r = scanner.nextInt();
		int s = Square(r);
		System.out.println(s);
	    System.out.println(s + 2);
		
	}
	
}
import java.util.Scanner;

public class Main
{
    public static void IsTen(int x, int y) {
        if ((x + y == 10) || (x == 10) || (y == 10)) {
            System.out.println("True");
        }
        else {
            System.out.println("False");
        }
    }
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Введите два целых числа: ");
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		IsTen(a, b);
	}
}
import java.util.Scanner;
public class Main
{
    public static int Sum (int x, int y) {
            int result = x + y;
            return result;
    }
    public static int Diff (int x, int y) {
            int result = x - y;
            return result;
    }
    public static int Mult (int x, int y) {
            int result = x * y;
            return result;
    }
    public static float Div (int x, int y) {
            int result = x / y;
            return result;
    }
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Введите первое число: ");
		int a = scanner.nextInt();
		System.out.println("Введите второе число: ");
		int b = scanner.nextInt();
		int summa = Sum(a, b);
		System.out.println("Сумма чисел: " + summa);
		int diff = Diff(a, b);
		System.out.println("Разность чисел: " + diff);
		int mult = Mult(a, b);
		System.out.println("Произведение чисел: " + mult);
		float div = Div(a, b);
		System.out.println("Результат деления чисел: " + div);
	}
	
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
// Реализуйте метод, который получая 3 числа int определяет, есть ли среди них такое,
// которое равно сумме двух других.


import java.util.Scanner;
public class Main
{
    public static void SummEquality (boolean r, int a, int b, int c) {
        if (r) {
            System.out.println("Одно из чисел равно сумме других двух");
        }
        else {
            System.out.println("Ни одно из чисел не равно сумме других двух");
        }
    }
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Введите три числа: ");
		int first = scanner.nextInt();
		int second = scanner.nextInt();
		int third = scanner.nextInt();
		boolean result = ((first == second + third) || (second == first + third) || (third == first + second));
		SummEquality();
	}
}

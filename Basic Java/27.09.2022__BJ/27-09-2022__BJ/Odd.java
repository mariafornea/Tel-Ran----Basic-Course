// Необходимо написать метод, которая печатает все целые нечетные числа в диапазоне  между num1 и num2. 
// Учтите, num1 может быть как меньше, так больше или равно  num2.

import java.util.Scanner;
public class Main
{
    public static void Odd(int a, int b) {
        int count = a + 1;
        System.out.println("Нечетные числа в диапазон " + a + "-->" + b);
        while (count < b) {
            if (count % 2 != 0) {
                System.out.println(count);
            }
            count++;
        }
    }
    public static void Test(int x, int y) {
        if (x == y) {
            System.out.println("У целого числа не может быть диапазона целых чисел");
        }
        else {
            if (x < y) {
                Odd(x, y);
            }
            else {
                Odd(y, x);
            }
        }
    }
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Введите два целых числа: ");
		int first = scanner.nextInt();
		int second = scanner.nextInt();
		Test(first, second);
	}
}

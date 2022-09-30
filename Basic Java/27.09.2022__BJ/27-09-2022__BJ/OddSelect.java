import java.util.Scanner;
public class Main
{
    public static void OddSelect(int a, int b) {
        int count = a + 1;
        System.out.println("Числа в диапазоне " + a + "-->" + b);
        while (count < b) {
            if ((count % 2 == 0) && (count % 3 != 0)) {
                System.out.println(count + " - делится на 2");
            }
            if ((count % 2 == 0) && (count % 3 == 0)) {
                System.out.println(count + " - делится и на 2 и на 3");
            }
            if ((count % 2 != 0) && (count % 3 == 0)) {
                System.out.println(count + " - делится на 3");
            }
            if ((count % 2 != 0) && (count % 3 != 0)) {
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
                OddSelect(x, y);
            }
            else {
                OddSelect(y, x);
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

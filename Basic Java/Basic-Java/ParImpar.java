import java.util.Scanner;
public class Main
{
    public static void ParImpar (int x) {
        if ((x >= 0) && (x <= 100)) {
            if (x % 2 == 0) {
                System.out.println("Вы ввели четное число");
            }
            else {
                System.out.println("Вы ввели нечетное число");
            }
        }
        else {
            System.out.println("Пожалуйста, введите число в диапазоне от 0 до 100... ");
        }
    }
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Введите число в диапазоне от 0 до 100: ");
		int r = scanner.nextInt();
		ParImpar(r);
	}
}
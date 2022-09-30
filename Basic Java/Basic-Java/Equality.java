import java.util.Scanner;

public class Main
{
    public static void Equality(int x, int y, int z) {
        if ((x == y) & (y == z)) {
            System.out.println("All numbers are equal"); 
        } 
        else {
            if ((x != y) && (y!= z)) {
                System.out.println("All numbers are different");
            }
            if ((x == y) || (x == z) || (y == z)) {
            System.out.println("Some numbers are equal");
            }
        }
    }
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Введите три целых числа: ");
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		int d = scanner.nextInt();
		Equality(a, b, d);
	}
}
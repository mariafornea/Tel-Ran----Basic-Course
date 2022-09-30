public class Main
{
    public static void NumbersMethod (int x, int y) {
        if (x == y) {
            System.out.println((x+y)*2);
        }
        else {
            System.out.println(x+y);
        }
    }
	public static void main(String[] args) {
		int a = 8;
		int b = 25;
		int c = 25;
		NumbersMethod(a, b);
		NumbersMethod(b, c);
	}
}
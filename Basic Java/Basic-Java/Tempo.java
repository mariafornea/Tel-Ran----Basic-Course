public class Main
{
    public static void Tempo(double x, double y) {
        if ((x > 100) & (y > 100) || (x < 70) & (y < 70)) {
            System.out.println("True");
        }
        else {
            System.out.println("False");
        }
    }
	public static void main(String[] args) {
		double x = 75.0;
		double y = 100.0;
		Tempo(x, y);
	}
}
import java.util.Scanner;
public class Main
{
    public static void Trouble (boolean r, boolean x, int y) {
        if (r) {
            System.out.println("Vasia is NOT in trouble");
        }
        else {
            System.out.println("Vasea is in TROUBLE!");
        }
    }
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Does Vasya's neighbor sing? ('yes' = true, 'no' = false");
		boolean singing = scanner.nextBoolean();
		System.out.println("What time is it now?");
		int time = scanner.nextInt();
		boolean result = ((singing == false) && ((time >= 7) || (time <=20)));
		Trouble(result, singing, time);
	}
}


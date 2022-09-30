import java.util.Scanner;
public class Main
{
    public static void Age (int s_d, int s_m, int s_y, int d, int m, int y) {
        if  ((((s_y * 365.35 + s_m * 30.4167 + s_d) - (y * 365.35 + m * 30.4167 + d)) * 0.00273785) >= 18) {
            System.out.println("Спасибо! Приятного просмотра!"); 
        }
        else {
            System.out.println("К сожалению, этот фильм вам недоступен..."); 
        }
    }
	public static void main(String[] args) {
		    Scanner scanner = new Scanner(System.in);
		    System.out.println("Тест на внимательность! Какая дата сегодня? (день-месяц-год): ");
		    int s_day = scanner.nextInt();
    		int s_month = scanner.nextInt();
    		int s_year = scanner.nextInt();
    		System.out.println("Супер! Вы прошли тест!");
		    System.out.println("Подтвердите свой возраст (день-месяц-год): ");
    	    int day = scanner.nextInt();
    		int month = scanner.nextInt();
    		int year = scanner.nextInt();
    		Age(s_day, s_month, s_year, day, month, year);
	}
}





//Я хотела поэксперементировать с конкретными датами, знаю что для этого есть готовые классы, 
//но хотелось придумать что-то самостоятельно. Конечно это не самый лучший вариант, однако работает. 

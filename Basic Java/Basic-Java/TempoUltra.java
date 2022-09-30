public class Main {
    public static void main(String[] args) {
        String lang = "ru"; // en


        int temp1=160;
        int temp2=102;
        //---------------------------------------------------------
        boolean res= checkDevice(temp1,temp2);
        printResult(lang, res);
        
    }

    public static void printResult(String lang, boolean result){
        if(lang.equals("ru")){
            System.out.println( result? "корректно":"не корректно"    );
        } else {
            System.out.println( result? "correct":"not correct"    );
        }
    }

    public static boolean checkDevice (int temp1, int temp2){
        return (temp1>100  &&  temp2>100) ||  (temp1<70  &&  temp2<70);
    }
}
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static void main(String args[]) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        br.readLine();

        int sum = 0;

        //문자열을 byte배열로 반환하기
        for(byte value : br.readLine().getBytes()){
            sum += (value - '0');
        }

        System.out.print(sum);

        br.close();
    }
}

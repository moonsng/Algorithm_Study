import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int T = Integer.parseInt(br.readLine()); // Corrected method name to parseInt

        StringBuilder sb = new StringBuilder();

        for(int i = 0; i<T; i++){
            int[] result = new int[26];
            char[] arr = br.readLine().toCharArray();
            for(char c : arr){
                if(c >= 'a' && c <= 'z'){
                    result[c - 'a']++;
                }
            }
            int max = 0;
            for (int e : result){
                if (e > max) {
                    max = e;
                }
            }

            int count = 0;
            int answer = 0;
            for (int j=0; j<26; j++){
                if(result[j] == max){
                    count++;
                    answer = j;
                }
            }

            sb.append(count == 1? (char)('a' + answer) : "?").append(System.lineSeparator());
        }
        System.out.print(sb.toString());
    }
}

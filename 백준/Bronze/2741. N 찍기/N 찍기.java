import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // String s = br.readLine();

        int N = Integer.parseInt(br.readLine());
        br.close();

        int i = 1;
        StringBuilder sb = new StringBuilder();

        while(i<=N){
            sb.append(i+"\n");
            i++;
        }
        System.out.println(sb);
        
    }
}
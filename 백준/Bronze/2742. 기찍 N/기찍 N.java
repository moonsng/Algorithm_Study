import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // String s = br.readLine();

        int N = Integer.parseInt(br.readLine());
		br.close();
        
		StringBuilder sb = new StringBuilder();
        
		while(N > 0) {
			sb.append(N+"\n");
			N--;
		}
		System.out.println(sb);
        
    }
}
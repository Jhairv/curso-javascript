import classes.BankAccount;

public class test {
    public static void main(String[] args) {
        BankAccount example1 = new BankAccount("Carla", "20349182");
        
        example1.setBalance(200.50);

        System.out.println(example1.name);
        System.out.println(example1.getBalance());
    }
}
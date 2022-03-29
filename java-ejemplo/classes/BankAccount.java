package classes;

public class BankAccount {
    public String name;
    public String numberAccount;
    private double balance;

    public BankAccount (String firstName, String startNumberAccount){
        name = firstName;
        numberAccount = startNumberAccount;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }
}

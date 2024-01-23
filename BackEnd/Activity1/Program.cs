// See https://aka.ms/new-console-template for more information
using System.Dynamic;
using Microsoft.VisualBasic;

public abstract class Currency
{   
    public string code;
    protected Dictionary<string,decimal> pairExchangeRatioDict = new(); // Store the pairs ratio eg. USD to EUR, 0.92 
    protected void AddExangeRatio(string key, decimal value)
    {
        pairExchangeRatioDict[key] = value;
    }

    public decimal GetExangeRatio(string key)
    {
        return  pairExchangeRatioDict.ContainsKey(key) ? pairExchangeRatioDict[key] : throw new Exception("Currency pair not found, value cant be null");
    }
}

public class Dollar : Currency {
    public static readonly string code = "USD";
    public Dollar()
    {
        AddExangeRatio("USD/EUR",0.92m); //For each new Currency the dictionary need to be updated 
    }
}

public class Euro : Currency{
    public static readonly string code = "EUR";
    public Euro()
    {
        AddExangeRatio("EUR/USD",1.09m); //For each new Currency the dictionary need to be updated 
    }
}

public class Wallet<T> where T:Currency
{   
    private object walletType = typeof(T);
    private decimal balance;

    public Wallet(){balance = 0m;}

    public decimal Balance { get{return balance;} set{balance = Balance;} }
    public void AddFunds(decimal funds,string currency,decimal ratio = 1m){ // Convert first to recieve in another Currency.
        
        if (funds>0){
            if (currency != walletType.ToString()) // Dollar or Euro ...
            {
                convertFunds(funds,ratio);
            }
        else{ 
            convertFunds(funds,1m);
            }
    }

        }

    public void convertFunds(decimal funds,decimal ratio){ // also add to balance
        funds *= ratio;
        balance += funds;
    }

    public decimal convertBallance(decimal ratio){
        return balance *= ratio;
    }
}



class Program
{
    static void Main()
    {
        Dollar dollar = new();
        Euro euro = new();

        decimal USDToEUR = dollar.GetExangeRatio("USD/EUR");
        decimal EURToUSD = euro.GetExangeRatio("EUR/USD");

        Console.WriteLine("Exange Ratios: \n(USD->EUR):" +USDToEUR+ "\n(EUR->USD):"+EURToUSD);

        // Create Dollar and EUR wallets
        Wallet<Dollar> wallet1 = new();
        Wallet<Euro> wallet2 = new();

        // Adding Dollar and EUR to the wallets
        wallet1.AddFunds(100,"Dollar");
        Console.WriteLine("Adding 100 USD in wallet 1");
        Console.WriteLine("The balance in wallet 1 is: " + wallet1.Balance + " USD");

        // Reciving EUR in the USD wallet
        wallet1.convertFunds(200,EURToUSD);
        Console.WriteLine("Recieving 200 EUR in wallet 1(USD)");
        Console.WriteLine("The balance in wallet 1 is: " + wallet1.Balance + " USD");

        // Converting the balance in USD to EUR
        wallet1.convertFunds(wallet1.Balance,USDToEUR);
        Console.WriteLine("Converting balance EUR to USD");
        Console.WriteLine("The balance in wallet 1 is equivalent to: " + wallet1.Balance + " EUR");


        wallet2.AddFunds(80,"Euro");
        Console.WriteLine("Adding 80 EUR in wallet 2");
        Console.WriteLine("The Balance in wallet 2 is: " +wallet2.Balance + " EUR");
   
        // Reciving USD in the EUR wallet
        wallet2.convertFunds(200,USDToEUR);
        Console.WriteLine("Recieving 200 USD in wallet 2(EUR)");
        Console.WriteLine("The balance in wallet 2 is: " + wallet2.Balance + " EUR");
        
        // Converting the balance in EUR to USD
        wallet2.convertFunds(wallet2.Balance,EURToUSD);
        Console.WriteLine("Converting balance EUR to USD");
        Console.WriteLine("The balance in wallet 2 is equivalent to: " + wallet2.Balance + " USD");

// Output
// Exange Ratios: 
// (USD->EUR):0,92
// (EUR->USD):1,09
// Adding 100 USD in wallet 1
// The balance in wallet 1 is: 100 USD
// Recieving 200 EUR in wallet 1(USD)
// The balance in wallet 1 is: 318,00 USD
// Converting balance EUR to USD
// The balance in wallet 1 is equivalent to: 610,5600 EUR
// Adding 80 EUR in wallet 2
// The Balance in wallet 2 is: 80 EUR
// Recieving 200 USD in wallet 2(EUR)
// The balance in wallet 2 is: 264,00 EUR
// Converting balance EUR to USD
// The balance in wallet 2 is equivalent to: 551,7600 USD

    }
}
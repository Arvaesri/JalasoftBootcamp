//namespace WebApiAndControler.models

// The aplication should use inheritance to define the Dollar and Euro classes.
// The application should use generics to define the Wallet class.
// The user should be able to add funds to the wallet.
// The user should be able to get the balance of the wallet in a specific currency.
// The user should be able to create a wallet and add a currency to it regardless of its nation.


// See https://aka.ms/new-console-template for more information
using System.Dynamic;
using Microsoft.VisualBasic;

public abstract class Currency
{   
    public static string? code;
}

public class Dollar : Currency {
    public static new string code = "USD";
}

public class Euro : Currency{
    public static new string code = "EUR";
}

public class Wallet<T> where T:Currency
{   
    //private string _walletType = nameof(T);
    public string _walletCode= typeof(T).GetField("code").GetValue(null).ToString();

    private decimal _balance;
    public decimal Balance { 
        get{return _balance;} 
        set{_balance = Balance;} 
        }

    public Wallet(){_balance = 0m;}

    public void AddFunds(decimal funds,string currencyCode,decimal ratio = 1m){ // Convert first to recieve in another Currency.
    
        if (funds>0){ // Cant add negative values
            if (currencyCode != _walletCode) // If the wallet type is different (Dollar != Euro) 
            {
                var convertedFunds = ConvertFunds(funds,ratio);
                _balance += convertedFunds; // adds funds in the wallet currency type
            }
        else{ 
                _balance+=funds;
            }
        }
    }

    public decimal ConvertFunds(decimal funds,decimal ratio = 1m){
        funds *= ratio;
        return funds;
        //balance += funds;
    }

    public decimal ConvertBalance(decimal ratio=1){
        Console.WriteLine(_balance);
         _balance *= ratio;
         return _balance;
    }

    public Wallet<U> ConvertWallet<U>(decimal ratio) where U : Currency, new()
    {
        var convertedWallet = new Wallet<U>
        {
            _balance = ConvertBalance(ratio)
        };
        Console.WriteLine(convertedWallet.Balance);

        _balance = 0m; // Reset the balance after conversion

        return convertedWallet;
    }
}



class Program
{
    static void Main()
    {
        decimal USDToEUR = 0.85m;
        decimal EURToUSD = 1.15m;

        // Create Dollar and EUR wallets
        Wallet<Dollar> walletUSD = new();
        //Wallet<Euro> walletEUR = new();

        // Adding Dollar and EUR to the wallets
        walletUSD.AddFunds(100,"USD");
        Console.WriteLine("\nAdding 100 USD in wallet 1");
        Console.WriteLine("The balance in wallet 1 is: " + walletUSD.Balance + " " + walletUSD._walletCode);

        walletUSD.AddFunds(100,"EUR",EURToUSD);
        Console.WriteLine("\nAdding 100 EUR in wallet 1");
        Console.WriteLine("The balance in wallet 1 is: " + walletUSD.Balance + " " + walletUSD._walletCode);

        Wallet<Euro> walletEUR = walletUSD.ConvertWallet<Euro>(USDToEUR);
        Console.WriteLine("\nConverted USD Wallet to EUR wallet");
        Console.WriteLine("The Balance in wallet 2 is: " +walletEUR.Balance + " " + walletEUR._walletCode);



// Output
// Adding 100 USD in wallet 1
// The balance in wallet 1 is: 100 USD

// Adding 100 EUR in wallet 1
// The balance in wallet 1 is: 215,00 USD
// 215,00
// 182,7500

// Converted USD Wallet to EUR wallet
// The Balance in wallet 2 is: 182,7500 EUR

    }
}
print("welocme to SBI")
print("swipe the ATM card")
language=input("enter the language hindi/english:")
if(language=="english"):
    print(language)
    pin=int(input("enter the 4-digit number:"))
    if(pin>=1000 and pin<10000):
        print(pin)
        transaction=input("enter the transaction withdraw/deposite:")
        if(transaction=="withdraw"):
            print(transaction)
            account=input("enter the account saving/kcc/current:")
            if(account=="saving" or account=="kcc" or account=="current"):
                print(account)
                amount=int(input("enter the feed of amount:"))
                bankbalance=100000
                if(amount<bankbalance):
                   print(amount)
                   print("Remain money is:" ,bankbalance-amount)
                else:
                    print("amount is not available")
            else:
              print("incorrect account")
        else:
            print("incorrect transaction")
            transaction=input("enter the transaction deposite:")
            if transaction=="deposite":
                print(transaction)
                account=input("enter the account saving/current/kcc:")
                if (account=="saving" or account=="kcc" or account=="current"):
                    print(account)
                    amount=int(input("enter the feed of amount:"))
                    bankbalance=100000
                    if amount+bankbalance:
                        print("total amount is",amount+bankbalance)
                    else:
                        print("amount is not available")
                else:
                    print("incorrect account")
            else:
                print("incorrect transaction")
    else:
        print("incorrect pin")
    print("collect your card")
else:
    print("incorrect language")
    language=input("enter the language hindi:")
    if language=="hindi":
        print(language)
        pin=int(input("4-number ka pin dale:"))
        if(pin>=1000 and pin<10000):
           print(pin)
           len_den=input("vikalp dale nikalna/jama:")
           if(len_den=="nikalna"):
               print(len_den)
               khata=input("khata dale bachat khata/kcc/chalu khata:")
               if(khata=="bachat khata" or khata=="kcc" or khata=="chalu khata"):
                   print(khata)
                   rashi=int(input("rashi dale:"))
                   rashi_sesh=100000
                   if(rashi<rashi_sesh):
                       print(rashi)
                       print("rashi sesh hai:" ,rashi_sesh-rashi)
                   else:
                       print("rashi nahi hai")
               else:
                    print("khata galt hai")
           else:
                print("len_den galt hai")
                len_den=input("len-den dale jama:")
                if len_den=="jama":
                   print(len_den)
                   khata=input("khata dale bachat khata/kcc/chalu khata:")
                   if(khata=="bachat khata" or khata=="kcc" or khata=="chalu khata"):
                       print(khata)
                       rashi=int(input("rashi dale:"))
                       khata_rashi=100000
                       if(rashi+khata_rashi):
                           print(rashi)
                           print("rashi sesh hai:" ,khata_rashi+rashi)
                       else:
                            print("rashi nahi hai")
                   else:
                        print("khata galt hai")                   
                else:
                     print("len_den galt hai")
        else:
            print("pin galt hai")
    else:
        print("bhasha galt hai") 

print("krapaya apna card nikale")


// const { question } = require("readline-sync");

console.log("welocme to SBI")
console.log("swipe the ATM card")
const a=require("readline-sync")
language=a.question("enter the language hindi/english:")
if(language=="english"){
    console.log(language)
    pin=a.questionInt("enter the 4-digit number:")
    if(pin>=1000 && pin<10000){
        console.log(pin)
        transaction=a.question("enter the transaction withdraw/deposite:")
        if(transaction=="withdraw"){
            console.log(transaction)
            account=a.question("enter the account saving/kcc/current:")
            if(account=="saving" || account=="kcc" || account=="current"){
                console.log(account)
                amount=a.questionInt("enter the feed of amount:")
                bankbalance=100000
                if(amount<bankbalance){
                   console.log(amount)
                   console.log("Remain money is:" ,bankbalance-amount)
                }else{
                    console.log("amount is not available")
                }
            }else{
              console.log("incorrect account")
            }
        }else{
            console.log("incorrect transaction")
        }
            transaction=a.question("enter the transaction deposite:")
            if (transaction=="deposite"){
                console.log(transaction)
                account=a.question("enter the account saving/current/kcc:")
                if (account=="saving" ||account=="kcc" ||account=="current"){
                    console.log(account)
                    amount=a.questionInt("enter the feed of amount:")
                    bankbalance=100000
                    if (amount+bankbalanc){
                        console.log("total amount is",amount+bankbalance)
                    }else{
                        console.log("amount is not available")
                    }
                }else{
                    console.log("incorrect account")
                }
            }else{
                console.log("incorrect transaction")
            }
        }else{
            console.log("incorrect pin")
        console.log("collect your card")
        }
    }else{
    console.log("incorrect language")
    language=a.question("enter the language hindi:")
    if (language=="hindi"){
        console.log(language)
        pin=a.questionInt("4-number ka pin dale:")
        if(pin>=1000 && pin<10000){
           console.log(pin)
           len_den=a.question("vikalp dale nikalna/jama:")
           if(len_den=="nikalna"){
               console.log(len_den)
               khata=a.question("khata dale bachat khata/kcc/chalu khata:")
               if(khata=="bachat khata" || khata=="kcc" || khata=="chalu khata"){
                   console.log(khata)
                   rashi=a.questionInt("rashi dale:")
                   rashi_sesh=100000
                   if(rashi<rashi_sesh){
                       console.log(rashi)
                       console.log("rashi sesh hai:" ,rashi_sesh-rashi)
                   }else{
                       console.log("rashi nahi hai")
                   }
                }else{
                    console.log("khata galt hai")
                }
            }else{
                console.log("len_den galt hai")
            }
                len_den=a.question("len-den dale jama:")
                if (len_den=="jama"){
                   console.log(len_den)
                   khata=a.question("khata dale bachat khata/kcc/chalu khata:")
                   if(khata=="bachat khata" || khata=="kcc" || khata=="chalu khata"){
                       console.log(khata)
                       rashi=a.questionInt("rashi dale:")
                       khata_rashi=100000
                       if(rashi+khata_rashi){
                           console.log(rashi)
                           console.log("rashi sesh hai:" ,khata_rashi+rashi)
                       }else{
                            console.log("rashi nahi hai")
                       }
                    }else{
                        console.log("khata galt hai") 
                    }                  
                }else{
                     console.log("len_den galt hai")
                }
            }else{
                console.log("pin galt hai")
            }
        }else{
            console.log("bhasha galt hai") 
        }
    }

console.log("krapaya apna card nikale")
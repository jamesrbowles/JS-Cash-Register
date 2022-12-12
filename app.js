function checkCashRegister(price, cash, cid) {
    // change value multipled by 100 to make it easier to work with
    let change = cash*100 - price*100;
    // Total cash in register variable
    let totalRegisterCash = cid.map(elem => elem[1]).reduce((a,b)=> a+b)*100

    // object to return
    let obj = [
    {
    status: "INSUFFICIENT_FUNDS",
    change: []
    },
    {
    status: "CLOSED",
    change: cid
    },
    {
    status: "OPEN",
    change: []
    },
    ];

    // Conditionals to get results
    if (change > totalRegisterCash) {
        return obj[0]
    } else if (change == totalRegisterCash) {
        return obj[1]
    } else {
        let answer = []
        cid = cid.reverse()
        let moneyValues = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
        }
        for (let elem of cid) {
            let purse = [elem[0], 0]
            elem[1] = elem[1]*100
            while (change >= moneyValues[elem[0]] && elem[1] > 0) {
                change -= moneyValues[elem[0]]
                elem[1] -= moneyValues[elem[0]]
                purse[1] += moneyValues[elem[0]]
            }
            if (purse[1] > 0) {
                purse[1] /= 100
                answer.push(purse)
                obj[2].change = answer
            }
        }
        if (change > 0) {
            return obj[0]
        }
        return obj[2]
    }

}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
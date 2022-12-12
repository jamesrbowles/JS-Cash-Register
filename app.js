function checkCashRegister(price, cash, cid) {

let changeDue = cash - price

// Total cash in register variable
let totalRegisterCash = cid.map(elem => elem[1]).reduce((a,b)=> a+b).toFixed(2)

// money values
  let change = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  // object to return
  let obj = [
    {
    status: "INSUFFICIENT_FUNDS",
    change: []
    },
    {
    status: "CLOSED",
    change: []
    },
    {
    status: "OPEN",
    change: []
    },
];

let changeValues = Object.values(change)

// cycle through cid values in reverse, if the value is over 0 then minus its value only if this value is not over the changeDue variable value.

let j = 1
for (let i = 8; i > 0; i--) {
    console.log(cid[i][1])
    if (cid[i][1] > 0 && changeDue > changeValues[i]) {
        //console.log(cid[i][1])
        //console.log(changeValues[i])

        while (j < changeValues.length && obj[2].change[j] < cid[i][1]) {
            console.log("hey")
            obj[2].change = [cid[i][0], changeValues[i] + changeValues[i]]
            console.log(obj[2].change[1])
            j++
        }

    }
    return obj[2]
}


// Insufficient funds and Closed status

if (changeDue > totalRegisterCash) {
    return obj[0]
} else if (changeDue == totalRegisterCash) {
    obj[1].change = cid
    return obj[1]
}


}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 200]]));
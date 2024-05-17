
const billTotalInput = document.getElementById('billInput')
const tipInputInput = document.getElementById('tipInput')
const numOfPeopleDply = document.getElementById('numOfPeople')
const perPersonDply = document.getElementById('perPersonTotal')

let peopleNum = Number(numOfPeopleDply.innerText)

const calculateBill = () => {
    const totalBill = Number(billTotalInput.value)
    const tip = Number(tipInput.value)
    const totalTip = tip / 100
    const total = totalBill + (totalTip * totalBill)

    const totalPerPerson = total / peopleNum

    perPersonDply.innerText = `$${totalPerPerson.toFixed(2)}`
}

const increasePeople = () => {
    peopleNum += 1

    numOfPeopleDply.innerHTML = peopleNum

    calculateBill()
}

const decreasePeople = () => {
    if (peopleNum == 1) {
        numOfPeopleDply.innerHTML = 1
    }else{
        peopleNum -= 1
        numOfPeopleDply.innerHTML = peopleNum
    }

    calculateBill()
}


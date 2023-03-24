const english = document.getElementById("eng")
const math = document.getElementById("math")
const physics = document.getElementById("phy")
const chemstry = document.getElementById("che")
const computer = document.getElementById("com")

const btn = document.getElementById("btn-grade")



const total = document.getElementById("total")
const average = document.getElementById("avg")
const grade = document.getElementById("grade")

console.log(english)
btn.addEventListener("click", () => {
                 total.innerHTML=``
                average.innerHTML=``
                grade.innerHTML= `` 
    if (english.value > 100 ||
        (english.value) > 100 ||
        (math.value_) > 100 ||
        (physics.value) > 100 ||
        (chemstry.value) > 100 ||
        (computer.value) > 100
    ) {
        alert("Please Enter Marks in range of 100")
    }
    else{
        let totalMark=(
            parseInt(english.value)
            +parseInt(math.value)
            +parseInt(physics.value)
            +parseInt(chemstry.value)
            +parseInt(computer.value))
        let avgMark=totalMark/5
        console.log(totalMark,avgMark)
        if(
        (english.value) <=35 ||
        (math.value_) <= 35 ||
        (physics.value) <=35 ||
        (chemstry.value) <= 35 ||
        (computer.value) <= 35
        ){
            total.innerHTML=`Total Mark:${totalMark}`
            average.innerHTML=`Your Average mark are: ${avgMark}`
            grade.innerHTML= `You Got F grade` 
        }
        else{
            if(avgMark>=90){
                total.innerHTML=`Total Mark:${totalMark}`
                average.innerHTML=`Your Average mark are: ${avgMark}`
                grade.innerHTML= `You Got A grade` 
            }
            else if(avgMark>=80){
                total.innerHTML=`Total Mark:${totalMark}`
                average.innerHTML=`Your Average mark are: ${avgMark}`
                grade.innerHTML= `You Got B grade` 
            }
            else if(avgMark>70){
                total.innerHTML=`Total Mark:${totalMark}`
                average.innerHTML=`Your Average mark are: ${avgMark}`
                grade.innerHTML= `You Got C grade` 

            }
            else if(avgMark>60){
                total.innerHTML=`Total Mark:${totalMark}`
                average.innerHTML=`Your Average mark are: ${avgMark}`
                grade.innerHTML= `You Got D grade` 
            }
            else if(avgMark<60){
                total.innerHTML=`Total Mark:${totalMark}`
                average.innerHTML=`Your Average mark are: ${avgMark}`
                grade.innerHTML= `You Got F grade` 
            }
        }
    }


})
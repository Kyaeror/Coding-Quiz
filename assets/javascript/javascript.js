seconds = 120
x = 0
correctPoints = 0
question = document.querySelector(`.question`)
a = document.querySelector(`.a`)
b = document.querySelector(`.b`)
c = document.querySelector(`.c`)
d = document.querySelector(`.d`)
questionArray = [
    {
        prompt: `Which of the following statements about binary trees is NOT true?`,
        a: `Every binary tree has at least one node`,
        b: `Every non-empty tree has exactly one root node`,
        c: `Every node has at most two children.`,
        d: `Every non-root node has exactly one parent.`,
        correct: `Every binary tree has at least one node`
    },
    {
        prompt: `Suppose you were implementing a data structure to store information about the paintings
        on display at an art dealer’s showroom. Of the following data structures, which one is the
        right one to use?`,
        a: `Unordered array`,
        b: `It depends`,
        c: `Sorted array`,
        d: `Binary search tree`,
        correct: `It depends`
    },
    {
        prompt: `What is cout ?`,
        a: `It is a function`,
        b: `It is an operator`,
        c: `It is an object (class instance)`,
        d: `It is a class`,
        correct: `It is an object (class instance)`
    },
    {
        prompt: `When an ADT is implemented as a C++ class, which of the following should normally be
        true ?`,
        a: `Member functions are private, member variables are public`,
        b: ` Member functions as well as member variables are private`,
        c: `Member functions as well as member variables are public`,
        d: `Member functions are public, member variables are private`,
        correct: `Member functions are public, member variables are private`
    },
]


document.querySelector(`.start`).addEventListener(`click` , () => {
    function countdown (){
        if(seconds > 0){
            seconds --
            document.querySelector(`.timer`).innerHTML = `Time: ${seconds}`
        }else {
            document.querySelector(`.end-prompt`).style.display = `flex`
            document.querySelector(`.question-container`).style.display = `none`
        }
    }
    timerCountdown = setInterval(countdown, 1000)
    document.querySelector(`.start-prompt`).style.display = `none`
    document.querySelector(`.question-container`).style.display = `flex`

    question.innerHTML = questionArray[x].prompt
    a.innerHTML = questionArray[x].a
    b.innerHTML = questionArray[x].b
    c.innerHTML = questionArray[x].c
    d.innerHTML = questionArray[x].d
})
a.addEventListener(`click` , () => {
    if(x < 3){
        if(questionArray[x].correct === a.innerHTML){
            correctPoints++
            document.querySelector(`.wrong-right`).innerHTML = `Right!`
        }else{
            seconds -= 5
            document.querySelector(`.timer`).innerHTML = `Time: ${seconds}`
            document.querySelector(`.wrong-right`).innerHTML = `Wrong!`
        }
        x++
        question.innerHTML = questionArray[x].prompt
        a.innerHTML = questionArray[x].a
        b.innerHTML = questionArray[x].b
        c.innerHTML = questionArray[x].c
        d.innerHTML = questionArray[x].d
        }else {
        document.querySelector(`.end-prompt`).style.display = `flex`
        document.querySelector(`.question-container`).style.display = `none`
        }
})
b.addEventListener(`click` , () => {
    if(x < 3){
        if(questionArray[x].correct === b.innerHTML){
            correctPoints++
            document.querySelector(`.wrong-right`).innerHTML = `Right!`
        }else{
            seconds -= 5
            document.querySelector(`.timer`).innerHTML = `Time: ${seconds}`
            document.querySelector(`.wrong-right`).innerHTML = `Wrong!`
            document.querySelector(`.prompt`).innerHTML = `Your final score is ${correctPoints}`
        }
        x++
        question.innerHTML = questionArray[x].prompt
        a.innerHTML = questionArray[x].a
        b.innerHTML = questionArray[x].b
        c.innerHTML = questionArray[x].c
        d.innerHTML = questionArray[x].d
        }else {
            document.querySelector(`.end-prompt`).style.display = `flex`
            document.querySelector(`.question-container`).style.display = `none`
            document.querySelector(`.prompt`).innerHTML = `Your final score is ${correctPoints}`
            }
})
c.addEventListener(`click` , () => {
    if(x < 3){
        if(questionArray[x].correct === c.innerHTML){
            correctPoints++
            document.querySelector(`.wrong-right`).innerHTML = `Right!`
        }else{
            seconds -= 5
            document.querySelector(`.timer`).innerHTML = `Time: ${seconds}`
            document.querySelector(`.wrong-right`).innerHTML = `Wrong!`
        }
        x++
        question.innerHTML = questionArray[x].prompt
        a.innerHTML = questionArray[x].a
        b.innerHTML = questionArray[x].b
        c.innerHTML = questionArray[x].c
        d.innerHTML = questionArray[x].d
        }else {
            document.querySelector(`.end-prompt`).style.display = `flex`
            document.querySelector(`.question-container`).style.display = `none`
            document.querySelector(`.prompt`).innerHTML = `Your final score is ${correctPoints}`
            }
})
d.addEventListener(`click` , () => {
    if(x < 3){
    if(questionArray[x].correct === d.innerHTML){
        correctPoints++
        document.querySelector(`.wrong-right`).innerHTML = `Right!`
    }else{
        seconds -= 5
        document.querySelector(`.timer`).innerHTML = `Time: ${seconds}`
        document.querySelector(`.wrong-right`).innerHTML = `Wrong!`
    }
    x++
    question.innerHTML = questionArray[x].prompt
    a.innerHTML = questionArray[x].a
    b.innerHTML = questionArray[x].b
    c.innerHTML = questionArray[x].c
    d.innerHTML = questionArray[x].d
    }else {
        document.querySelector(`.end-prompt`).style.display = `flex`
        document.querySelector(`.question-container`).style.display = `none`
        document.querySelector(`.prompt`).innerHTML = `Your final score is ${correctPoints}`
        }
})
document.querySelector(`.save-score`).addEventListener(`click`, () => {
    if(document.querySelector(`.initials`).value.trim() == ``){
        console.log(`input initials please`)
    }else {
        document.querySelector(`.previous-scores`).innerHTML += `<li>${document.querySelector(`.initials`).value}: ${correctPoints} </li>`
        clearInterval(timerCountdown)
        seconds = 120
        x = 0
        correctPoints = 0
        document.querySelector(`.timer`).innerHTML = `Time: ${seconds}`
        document.querySelector(`.highscore-menu`).style.display = `flex`
        document.querySelector(`.end-prompt`).style.display = `none`
    }
})
document.querySelector(`.restart`).addEventListener(`click`, () => {
    document.querySelector(`.start-prompt`).style.display = `flex`
    document.querySelector(`.end-prompt`).style.display = `none`
    clearInterval(timerCountdown)
    seconds = 120
    x = 0
    correctPoints = 0
    document.querySelector(`.timer`).innerHTML = `Time: ${seconds}`
})
document.querySelector(`.restart-score-menu`).addEventListener(`click`, () => {
    document.querySelector(`.start-prompt`).style.display = `flex`
    document.querySelector(`.highscore-menu`).style.display = `none`
    clearInterval(timerCountdown)
    seconds = 120
    x = 0
    correctPoints = 0
    document.querySelector(`.timer`).innerHTML = `Time: ${seconds}`
})
document.querySelector(`.highscore-view`).addEventListener(`click`, ()=> {
    document.querySelector(`.start-prompt`).style.display = `none`
    document.querySelector(`.question=container`).style.display = `none`
    document.querySelector(`.end-prompt`).style.display = `none`
    document.querySelector(`.highscore-menu`).style.display = `flex`
})
//end-prompt
    //save-score will go to listed array in descending value order in previous score menu
//highscore button
    //shows highscore container and hides everything else
    //must have a restart button that goes back to start container and resets values
//wrong-right prompt
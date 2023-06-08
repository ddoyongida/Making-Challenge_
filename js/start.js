const main= document.querySelector("#main");
const qna= document.querySelector("#qna");
const result= document.querySelector("#result");

const endPoint = 10;
const select = [0,0,0,0,0,0,0,0,0,0];



function clip() {
    var url = 'https://sparta-beginner-codingtest.netlify.app';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = '';
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다.")
};
function calcScore() {
    let point = 0;
    for (let i = 0; i < endPoint; i++) {
      point += qnaList[i].a[select[i]].score;
    }
    return point;
  }
function sortResult(point) {
    let num = 0;
    if (point <= 4) {
      num = 0;
    } else if (point <= 5) {
      num = 1;
    } else if (point <= 10) {
      num = 2; 
    }
    return num;
  }
const point = calcScore();
const grade = sortResult(point);
function setResult(){
    let point = calcScore();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[grade].name;
    const res_point = document.querySelector('.point');
    res_point.innerHTML = point + '개 맞추셨습니다~~!!';
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + grade + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[grade].desc;
  }



function goResult(){
    qna.style.WebkitAnimation ="fadeOut 1s";
    qna.style.animation ="fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation ="fadeIn 1s";
        result.style.animation ="fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 450)})     
        setResult();
}

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation ="fadeOut 1s";
            children[i].style.animation ="fadeOut 1s";    
        }
        setTimeout(() => {
            var target = qnaList[qIdx].a[idx].score;
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
            console.log(select);   
        }, 950)   
    }, false);
}
function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}
function begin(){
    main.style.WebkitAnimation ="fadeOut 1s";
    main.style.animation ="fadeOut 1s";
    setTimeout(() => {
        
        qna.style.WebkitAnimation ="fadeIn 1s";
        qna.style.animation ="fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block"
        }, 450)
        let qIdx = 0;
        goNext(qIdx);
    }, 450);
}



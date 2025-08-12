let isplaying=false;
let intervalid;
function autoplay(){
  if(!isplaying){
    intervalid=setInterval(function(){
const move=pickmove();
game(move);
},1000);
isplaying=true;
  }else{
    clearInterval(intervalid);
    isplaying=false;
  }
}

    let score=JSON.parse(localStorage.getItem('score'));
    if(score===null){
      score={
        wins:0,
        lose:0,
        tie:0
      }
    }
    updatescore();
    function game(move){
      const computerMove=pickmove();
        let result='';
          if (move==='scissor'){
            if(computerMove==='rock'){
            result='lose';
          }else if(computerMove=='paper'){
            result ='win';
          }else{
            result='tie';
          }  
        }
        else if (move==='paper'){
            if(computerMove==='rock'){
            result='win'
          }else if(computerMove=='paper'){
            result ='tie';
          }else{
            result='lose';
          }  
        }if (move==='rock'){
            if(computerMove==='rock'){
            result='tie';
          }else if(computerMove=='paper'){
            result ='lose';
          }else{
            result='win';
          }  
        }
        if(result==='win'){
          score.wins+=1;
        }
        else if(result=='lose'){
          score.lose+=1;
        }
        else{
          score.tie+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));

       updatescore();
       document.querySelector(".js-result").innerHTML=`you ${result}`;
       document.querySelector(".js-moves").innerHTML=`you
      <img src="icon/${move}-emoji.png" class="icon" >
      <img src="icon/${computerMove}-emoji.png" class="icon" >
      computer`;
       
    }
    function updatescore(){
        document.querySelector('.js-score')
            .innerHTML=` wins:${score.wins},losses:${score.lose},tie:${score.tie}`;
    }
    function pickmove(){
       const num=Math.random();
       let computerMove='';
    if(num>=0 && num<1/3){
         computerMove='rock';
    }else if(num>=1/3 && num<2/3){
         computerMove='paper';
    }else if(num>=2/3 && num<1){
         computerMove='scissor';
    }
    return computerMove;
    }
  
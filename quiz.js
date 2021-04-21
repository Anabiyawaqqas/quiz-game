class quiz {

    constructor(){}

    getstate(){
      var  gameStateRef =database.ref('gameState')
  gameStateRef.on("value",function(data){
      gameState=data.val()
  })
    }

    update (satate){
        database.ref('/').update({
            gameState: state
        })
    }
     
    async start(){
         if(gameState ===0 )
         contestant =new contestant()
         var contestantCountRef = await database.ref('contestantCount'). onces ("value")
         if(contestantCountRef.exits()){
             contestantCount = contestantCountRef.val()
            contestant.getCount()
         }
         question=new Question()
         question.display()

    }
}
 play ()
 {
    question.hide
    background("red")
    fill (0)
    textSize(30)
    text("RESULT OF QUIZ",340,50)
    text("-------------------",320,65)
    contestant.getPlayerInfo()
    if (allcontestants !== undefined){
        debugger;
        var display_Answers=230;
        fill("Blue")
        textSize(20)
        text("*NOTE: contestants who are answered correctly are highlithed in green colour !",130,230)
        for (var plr in allcontestants ){
            debugger;
            var correctAns="2"
            if (correctAns  === allcontestants[plr].answer)
            fill("Green")
            el
            fill("red")

            display_Answers +=30
            textSize(20)
            text(allcontestants[plr].name+":"+allcontestants[plr].answer,250,display_Answers)
        }
    }

}
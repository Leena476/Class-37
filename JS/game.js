class Game {

    constructor () {



    }

    getState () {

        var stateRef = database.ref("gameState");
        stateRef.on("value", function(data){

            gameState = data.val();

        })

    }

    updateState (state) {

        database.ref("/").update({
            gameState:state
        })
        
    }

    //gameState 0
    async start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();

            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
           
        }

    }

    //gameState 1
    play(){

        form.hide();
        textSize(35);
        text("Game Start",100,100);
        
        Player.getPlayerInfo();

        if(allPlayers !== undefined){

            var displayPosition = 130;

            for(var plr in allPlayers){

                if(plr  === "player"+player.index){
                    fill("red");
                }
                else {
                    fill("black");
                }

                textSize(17)
                
                displayPosition += 30;
                text(allPlayers[plr].name + " : " +  allPlayers[plr].distance   ,  130    ,  displayPosition    )
            
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=20;
            player.update();
        }
        
    }

}
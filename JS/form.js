class Form {

    constructor(){
        this.title = createElement("h2");
        this.input = createInput("NAME");
        this.button = createButton("PLAY");
        this.greeting = createElement("h3");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){

        this.title.html("CAR RACING GAME");
        this.title.position(150,0);

        this.input.position(170,150);
        this.button.position(250,230);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("HELLO " + player.name);
            this.greeting.position(150,200);

        })

    }

}
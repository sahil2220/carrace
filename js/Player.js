class Player {
  constructor(){
    this.index = null;
    this.rank = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

   getCarsAtEnd(){
    var carAtendRef = database.ref('carsatend');
    carAtendRef.on("value",(data)=>{
      this.rank=data.val();
    })

  }

   updateCarsAtEnd(rank){
    database.ref('/').update({
      carsatend:rank
    })
              
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }



  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}

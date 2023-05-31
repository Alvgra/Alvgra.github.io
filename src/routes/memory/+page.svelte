<h3 class=memory>Memory</h3>
<script>

    let cards = [];
    let random= Math.random()*(200);
    let round=Math.round(random);
    let sets = 4;
    for (let index = 0; index < sets*2; index++) {
        
        
        cards.push({
        
        id: index, // TODO: unique ids per card card
        img: "https://picsum.photos/id/"+(round+index%sets).toString()+"/200/300", // TODO: unique images per card card
        flipped: false,  // TODO: think
        completed: false,
      });
    }
    cards = cards.sort(() => Math.random() - 0.5)

    let flipcount = 0;
    function flip(card) {
        card.flipped = true;
        flipcount ++;
        
      // flip card over if two cards are not already flipped
      // TODO: and card is already not flipped
        console.log(flipcount)
        
        
        

        
      if (card.flipped && flipcount <= 2 ) {
       
        // TODO: Probably do what?
        // flip the cards over after 2s from seeing both cards
        if (flipcount == 2) {
            cards.forEach((card2)=> { 
                if (card.img==card2.img && card2.flipped && card.id != card2.id){
                    card2.completed=true;
                    card.completed=true;
                }
            }); 
            
          setTimeout(() => {
            
            // flip over cards that have not been marked as "completed"
            cards.forEach((card) => {
              card.flipped = card.completed;
              

            });
            flipcount = 0;
            cards = cards;
          }, 1000);
        }
        cards = cards;
        
      } else {
        alert("vänta ett litet tag till");
      }
      
    }
  </script>
  
  <main>
    <div class="row">
      {#each cards as card, i}
        <div
          on:click={() => {
            flip(card);
          }}
          on:keypress={() => {
            flip(card);
          }}
          class:flipped={card.flipped}
          class="card"
        >
          <img class="front" src={card.img} alt="" />
          <img class="back" src="https://previews.123rf.com/images/tigatelu/tigatelu1802/tigatelu180200045/96522532-osterhase-aus-einem-ei-geschl%C3%BCpft.jpg" alt="" />
        </div>
      {/each}
    </div>
  </main>
  
  <style>
    main {
      margin-top: 50px;
      display: flex;
      place-content: center;
      place-items: center;
    }
    .memory{
        background-color: rgb(249, 111, 106);
        color: rgb(249, 246, 244);
    }
    .row {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
    }
    .card {
      border: 1px solid rgb(228, 52, 25);
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
    .card.flipped {
      transform: rotateY(180deg);
    }
    .card .back {
      transform: rotateY(0deg);
    }
    .card .front {
      transform: rotateY(180deg);
    }
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
    }
  </style>
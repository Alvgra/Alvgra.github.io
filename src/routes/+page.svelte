
<script>
  //import CustomButton from './CustomButton.svelte';

function handleClick() {
  alert('clicked');
}
   import AudioPlayer, { stopAll } from './AudioPlayer.svelte'

let audioTracks = [
  'https://sveltejs.github.io/assets/music/strauss.mp3'
]
  import "@picocss/pico"
  let clicks = 0;
  let multiplier = 1;
  let workers = [];
  let worker_multiplier = 1;
  let bg=null;
  let upgrades = [
    { cost: 5, name: "Booster", multiplier: 2, worker: 0 },
    { cost: 2, name: "Flower worker", multiplier: 0, worker: 1 },
  ];

  // sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

  function increment() {
    clicks = clicks + multiplier;
    console.log("click" + clicks);
    bg= `url("https://i.gifer.com/origin/94/9453bb10dcc37daf75abcf3fea141fc8.gif")`;
    sleep(1000).then(()=>{
      bg=null
    })
  
  }

</script>

<div style = "background-image:{bg}; background-size:cover">

<h1 class="top">Click the flower</h1>

<button class="slide">Rose</button>

{#each audioTracks as src}
  <AudioPlayer {src} />
{/each}


<article>
  <progress value={clicks} max="100"></progress>
  <header>
    <div class="grid">
      {#each upgrades as upgrade}
        <button
          class="upgrade"
          on:click={() => {
            if (clicks >= upgrade.cost) {
              if (upgrade.multiplier) {
                multiplier = multiplier * upgrade.multiplier;
                clicks -= upgrade.cost;
              }
              if (upgrade.worker && clicks) {
                worker_multiplier = worker_multiplier * 2;
                workers = [upgrade.name, ...workers];
                /* start "clicking" every 1000 ms */
                setInterval(increment, 1000);
                clicks -= upgrade.cost;
              }
            } else {
              alert("Click some more first!");
            }
          }}
        >
          <span>{upgrade.name}</span>
          <span>{upgrade.cost * worker_multiplier}</span>
        </button>
      {/each}
    </div>
  </header>
  <div class="game">
    <button on:click={increment} class="clicker">
      <span class="clicks">{clicks}</span>
      <span class="pointtext">PPC: {multiplier}</span>
    </button>
  </div>
  <footer>
    <div class="panelright">
      <div>
        <span>Workers</span>
        <hr />
        <div class="shop">
          {#each workers as worker}
            <div class="worker">{worker}</div>
          {/each}
        </div>
      </div>
      <hr />
    </div>
  </footer>
</article>
</div>
<style>
progress{
  background-color:rgb(246, 238, 244);
  scrollbar-color: black;
}

progress[value]::-webkit-progress-value {
  background-image:
	   -webkit-linear-gradient(-45deg, 
	                           transparent 33%, rgba(0, 0, 0, .1) 33%, 
	                           rgba(224, 184, 212, 0.1) 66%, transparent 66%),
	   -webkit-linear-gradient(top, 
	                           rgba(248, 245, 248, 0.25), 
	                           rgba(245, 162, 231, 0.25)),
	   -webkit-linear-gradient(left, rgb(249, 63, 181), rgb(249, 241, 248));

    border-radius: 2px; 
    background-size: 35px 20px, 100% 100%, 100% 100%;
}

  .top{
    color: rgba(240, 183, 223, 0.993);
  }
  .shop {
    display: grid;
    grid-auto-flow: row; /* default */
    gap: 8px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  .upgrade {
    width: 100%;
    height: 100%;
    border: 4px solid rgb(240, 179, 221);
    background-color: rgb(240, 179, 221);
    background-size: cover;
    background-image: url("https://gifimage.net/wp-content/uploads/2018/04/pink-glitter-gif.gif");
    place-items: center;
    place-content: center;
    display: flex;
    flex-direction: column;
  }

  .worker {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(167, 30, 96);
    background-color: rgb(238, 212, 229);
    place-items: center;
    place-content: center;
    display: flex;
  }

  .game {
    height: 50vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-color: #f9e4f1;
    border-radius: 0% 0%;
  }
  .clicker {
    clip-path: circle();
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-image: url("https://th.bing.com/th/id/R.48246a31508b31fabc64e3bdd8c8b17d?rik=6OTssvTK5M3h5A&riu=http%3a%2f%2fwww.lovethispic.com%2fuploaded_images%2f152446-Pink-Rose-With-Glitter.gif&ehk=JPScPlUeI24%2f9gfMdM4hOeY0oI3QIhBnoF0XQ7XNvqk%3d&risl=&pid=ImgRaw&r=0");
    background-size: 60% 104%;
    background-position: center;
    
  }

  .panelright {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .clicks {
    font-size: 100px;
  }

  .pointtext {
    color: rgb(224, 193, 210);
    font-size: 25px;
    font-weight: bold;
  }

  .slide {
		height: 4rem;
		width: 8rem;
		background-color: rgb(249, 245, 248);
		border-color: #f2a5df;
		color: #ebbfe5;
		font-size: 1.25rem;
		background-image: linear-gradient(45deg, #ef96c4 50%, transparent 50%);
		background-position: 100%;
		background-size: 400%;
		transition: background 300ms ease-in-out;
	}
	.slide:hover {
		background-position: 0;
		color: rgb(162, 20, 122);
	}
</style>


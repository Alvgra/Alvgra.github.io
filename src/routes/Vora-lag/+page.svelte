<script>
    import { onMount } from 'svelte';
  
    let items = [
    { id: 1, name: 'Umeåvästra IBK', description: 'Umeå Västra IKB utgörs av spelare från våra båda JAS-lag där alla är födda 2005-2006 Laget ränar tillsammans 4 dagar i veckan + match. Hemmamatcher spelas på Umeå Energi Arena och sänds även på innebandy.tv.' },
    { id: 2, name: 'Umeåvästra IF', description: 'Umeå Västra IF är vårt representationslag där ambitionen är att avancera i seriesystemet. Vi spelar i division 1 Västerbotten.' },
    { id: 3, name: 'Umeåvästra IBF', description: 'Vårt F16-lag består av ca 24 tjejer födda 2006/2007 som spelar tillsammans i JAS DJ18 och kommer representera Umeå Västra i F16 SM. Lagets A-licensspelare lirar även i div 1 och de yngre i Damutveckling A. .' }
  ];
    let editing = false;
    let selectedItemId = null;
  


    function removeItem(id) {
      items = items.filter(item => item.id !== id);
    }


    function selectItem(id) {
    selectedItemId = id;
  }

  onMount(() => {
  
  });

    let imageLink1 = 'https://www.umeavastra.se/wp-content/uploads/2023/04/IMG_3200.jpg';
    let caption1 = '4:a i USM F16';

    let imageLink2 = 'https://www.umeavastra.se/wp-content/uploads/2023/02/802BD2DE-7F62-45C4-BFAA-17D250A280EA-1536x1536.jpeg';
    let caption2 = 'Västra vs RIG';

    let imageLink3 = 'https://www.umeavastra.se/wp-content/uploads/2023/01/IMG_2552-1.jpeg';
    let caption3 = 'SM-silver i SDFSM';

    let imageLink4 = 'https://www.umeavastra.se/wp-content/uploads/2022/09/0B9A30D2-16F3-49B3-8D49-243661E426EA-1536x1152.jpeg';
    let caption4 = 'Guld i Fatpipe DJ18';
   
    let imageLink5 = 'https://www.umeavastra.se/wp-content/uploads/2022/09/A1E5ECC5-3A29-4D4C-A64E-503CF7C1588C_1_201_a-1536x1081.jpeg';
    let caption5 = 'Guld i Fatpipe F16';
   


    function updateCaption(event) {
    caption = event.target.value;
  }

  </script>



<div class="items-list">
    {#each items as item}
      <div class="item" on:click={() => selectItem(item.id)}>
        {#if editing}
          <button on:click={() => removeItem(item.id)}>Ta bort</button>
        {/if}
        <span>{item.name}</span>
      </div>
    {/each}
  </div>
  <div class="rand4">
    .
 </div>
  
 
 {#if selectedItemId !== null}
  <p>{items.find(item => item.id === selectedItemId).description}</p>
  {/if}
  
  <div class="rand1">
    .
 </div>
  <div class="image-container">
    <img src={imageLink1} alt="Bild" class="image" />
    <div class="caption">{caption1}</div>
  </div>

  <div class="image-container">
    <img src={imageLink2} alt="Bild" class="image" />
    <div class="caption">{caption2}</div>
  </div>
  
  <div class="image-container">
    <img src={imageLink3} alt="Bild" class="image" />
    <div class="caption">{caption3}</div>
  </div>

  <div class="image-container">
    <img src={imageLink4} alt="Bild" class="image" />
    <div class="caption">{caption4}</div>
  </div>

  <div class="image-container">
    <img src={imageLink5} alt="Bild" class="image" />
    <div class="caption">{caption5}</div>
  </div>
  <button on:click={() => editing = !editing}>
    {#if editing}
      Avsluta redigering
    {:else}
      Starta redigering
    {/if}
  </button>

  <div class="rand">
    .
 </div>
 <div class="rand2">
    .
 </div>


  <style>
    .items-list {
      margin-bottom: 1rem;
    }
  
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      cursor:pointer
    }
  
    .item button {
      margin-right: 0.5rem;
      
     
    }

    .image-container {
    position: relative;
    display: inline-block;
   
  }

  .image {
    max-width: 600px;
    max-height: 215px;
    height: auto;
    border: 2px solid #000;
    border-radius: 10px;
    margin-top: 100px;
    margin-left: 10px;
    
  }
  button{
   border-color: #4caf50;
  }

  .caption {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px;
    border-radius: 5px;
    background-color:transparent
  }

  .rand4{
    margin-top: -65px;
    background-color: #4caf50;
    color: #ffffff;
    margin-left: 150px;
    max-height: 20px;
  }
  .rand1{
    margin-top: 35px;
    background-color: #4caf50;
    color: #4caf50;
  }
  .rand{
    margin-top: 50px;
    background-color: #4caf50;
    color: #4caf50;
  }
  .rand2{
    margin-top: 15px;
    background-color: #4caf50;
    color: #ffffff;
    max-height: 12px;
  }
  p{
    margin-top:30px;
  }
  </style>
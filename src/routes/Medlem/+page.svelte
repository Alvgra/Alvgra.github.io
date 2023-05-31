<script>
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';
    
    let name = '';
    let email = '';
    let message = '';
    let isSubmitted = false;
  
    const dispatch = createEventDispatcher();
  
    function handleSubmit() {
      // formulärdata som skickar formuläret till en server
      // I detta exempel, sätter jag bara isSubmitted till true
      isSubmitted = true;
  
      // Återställer formulärfälten efter 3 sek
      setTimeout(() => {
        name = '';
        email = '';
        message = '';
        isSubmitted = false;
      }, 3000);
  
      // Svara att formuläret skickats
      dispatch('formSubmitted');
    }

    
  
  let imageLinks = [
    'https://www.umeavastra.se/wp-content/uploads/2021/09/D5CA7633-0208-4B1D-8D03-772B9355E0DA-scaled.jpeg',
    'https://www.umeavastra.se/wp-content/uploads/2021/08/9E4205E2-D2BC-44E9-A39E-D17AA24341A5.jpeg',
    'https://www.umeavastra.se/wp-content/uploads/2021/09/cropped-DBDF89DF-3FF2-4911-A746-729AEC8DA195-scaled-1.jpeg'
  ];

  let activeIndex = 0;

  function nextSlide() {
    activeIndex = (activeIndex + 1) % imageLinks.length;
  }

  onMount(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  });
    
    
  
    
   
  </script>
  

  <div class="kontaktformulär">
  <h1>Kontaktformulär</h1>
  
  {#if isSubmitted}
    <p class="notification">Formuläret skickat!</p>
  {/if}
  
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Namn:
      <input type="text" bind:value={name} required />
    </label>
  
    <label>
      E-post:
      <input type="email" bind:value={email} required />
    </label>
  
    <label>
      Berätta om dig:
      <textarea bind:value={message} required></textarea>
    </label>
  
    <button type="submit">Skicka</button>
  </form>
</div>


<div class="club">
    <p>Är du intresserad av att spela med Umeå Västra? Vill du engagera dig i föreningen kring våra matcher och arrangemang eller kanske bli en av våra uppskattade samarbetspartners?</p>
    <p>Oavsett anledning, fyll i kontaktformuläret till vänster eller mejla till <a href="mailto:kansli@umeavastra.se">kansli@umeavastra.se</a>. Nedan har du även numret till vår klubbchef Johan Åsberg.</p>
  </div>
  
  <div class="contact">
    <p>E-post: kansli@umeavastra.se</p>
    <p>Telefon: 070-355 355 1    </p>
  </div>
  
<div class="rand">
   .
</div>
<div class="framotvastra">
    <div class="text">#FRAMÅTVÄSTRA</div>
</div>

<div class="slideshow">
    {#each imageLinks as imageLink, index}
      <img
        src={imageLink}
        alt="Slide"
        class="slide {index === activeIndex ? 'active' : ''}"
      />
    {/each}
  </div>
  

  <style>
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
  
    form {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin-bottom: 16px;
    }
  
    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
    }
  
    input,
    textarea {
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      padding: 8px 16px;
      font-size: 16px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .notification {
      background-color: #4caf50;
      color: #fff;
      padding: 8px;
      border-radius: 4px;
      margin-bottom: 16px;
    }

    .club{
    font-size: 18px;
    margin-bottom: 16px;
    margin-left: 500px;
    margin-top: -400px;
  }

  .contact {
    margin-bottom: 16px;
    margin-left:500px
  }

  .contact p {
    margin-bottom: 8px;
  }
  .rand{
    background-color: #4caf50;
    margin-top: 85px;
    color: #fff;
  }
  .framotvastra{
    background-color: #4caf50;
    margin-top: 170px;
    
  }
  .text{
    text-align:right;
    color: rgb(255, 252, 252);
  }


  .slideshow {
      position: relative;
      height: 300px;
     
    }
  
    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 170px;
      height: 170px;
      object-fit: cover;
      opacity: 0;
      transition: opacity 0.5s ease;
      margin-left: 1309px;
      margin-top: -200px;
    }
  
    .slide.active {
      opacity: 1;
    }

   
  </style>
  
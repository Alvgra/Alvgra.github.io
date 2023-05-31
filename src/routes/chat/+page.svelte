

<script>
    import { enhance } from "$app/forms";
    import "elizabot";
    import ElizaBot from "elizabot";
    import { each } from "svelte/internal";
    let eliza = new ElizaBot();
    let chat = [{ user: "eliza", text: eliza.getInitial() }];
    async function write(message) {
        chat = [...chat, {text: message, user: "me"}];

      // TODO: yeet in the new message
      // random delay for writing
      await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
      // TODO: write the text
      chat = [...chat, {text : eliza.transform(message), user: "eliza"}];
    }
  </script>
  
  
  <svelte:head>
    <link rel="stylesheet" href="/pico.min.css" />
    <style>
      nav {
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>
  </svelte:head>
  
  <div class="container">
    <h1 class= rubrik>TODO: Complete assignment</h1>
    <div class="scrollable">
      <!-- TODO: loop over the messages and display them -->
      
        {#each chat as item, index}
        <article class=eliza>
        <span class=span>
          {chat[index].text}
          
        </span>
        </article>
        {/each}

    </div>
    <form
      method="post"
      use:enhance={({ form, data, action, cancel }) => {
        /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
        cancel(); //don't post anything to server
        const text = data.get("text");
        write(text);
  
        // TODO: reset the form using form.reset()
      }}
    >
      <input type="text" name="text" />
    </form>
  </div>
  <style>


    .eliza{
        color: rgb(169, 116, 212);
    }
    .rubrik{
        color: rgb(169, 116, 212);
    }
    .scrollable{
        background-color: rgb(232, 218, 234);
    }
   
    
   
  </style>
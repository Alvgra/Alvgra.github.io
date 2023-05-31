<script>
  import "prism-themes/themes/prism-one-dark.css";
  import "../input.css";


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

<nav>
  <ul>
    <li><a href="/Umea-vastra">Hem</a></li>
    <li><a href="/Truppen">Truppen</a></li>
    <li><a href=/Medlem>Medlem</a></li>
    <li><a href=/Historia>Historia</a></li>
    <li><a href=/Vora-lag>Våra lag</a></li>
   
  </ul>
</nav>

<main class="container-fluid">
  <hr />

    <slot />
</main>

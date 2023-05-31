

<script>
    import { Gallery } from "flowbite-svelte";
    import "../../input.css";

    let images = [
      {alt: 'Alva Granlund', num: 35, src: 'UV.jpg'},
      {alt: 'Alma Walderhaug-Sedic', num:77, src: 'UV.jpg'},
      {alt: 'Mimmi Eklund', num:7, src: 'UV.jpg'},
      {alt: 'Elin Kyrk', num:38, src: 'UV.jpg'},
      {alt: 'Moa Nilsson', num:94, src: 'UV.jpg'},
      {alt: 'Nea Andersson', num:56, src: 'UV.jpg'},
      {alt: 'Kerstin Hultqvist', num:94, src: 'UV.jpg'},
      {alt: 'Amanda Tikkanen',num:22,  src: 'UV.jpg'},
      {alt: 'Fanny Markuson',num:58,  src: 'UV.jpg'},
      {alt: 'Wilma Jonsson',num:33,  src: 'UV.jpg'},
      {alt: 'Victoria Niska',num:2,  src: 'UV.jpg'},
      {alt: 'Esther Edman',num:42,  src: 'UV.jpg'},
      {alt: 'Engla Westman', num: 57, src: 'UV.jpg'},
      {alt: 'Isa Lindberg', num:36, src: 'UV.jpg'},
      {alt: 'Wilma Hermansson', num:20, src: 'UV.jpg'},
      {alt: 'Alma Lindgren', num:4, src: 'UV.jpg'},
      {alt: 'Jonna Lindgren', num:43, src: 'UV.jpg'},
      {alt: 'Stella Söderberg', num:39, src: 'UV.jpg'},
      {alt: 'Jonna Granström', num:17, src: 'UV.jpg'},
      {alt: 'Alice Granlund',num:34,  src: 'UV.jpg'},
      {alt: 'Cornelia Lantz',num:37,  src: 'UV.jpg'},
      {alt: 'Maya Sundberg',num:54,  src: 'UV.jpg'},
      {alt: 'Smilla Westman',num:66,  src: 'UV.jpg'}
      
    ]

    function sortNameStore(multiplier) {
        images.sort((a,b) => { 
            if (a.alt > b.alt) {
                return 1 * multiplier;
            }
            if (a.alt < b.alt) {
                return -1 * multiplier;
            } 
            return 0;
        })
        images = images; // Refresh data
    }

    function sortNumStore(multiplier) {
        images.sort((a,b) => { 
            if (a.num > b.num) {
                return -1 * multiplier;
            }
            if (a.num < b.num) {
                return 1 * multiplier;
            } 
            return 0;
        })
        images = images; // Refresh data
    }
    // https://stackoverflow.com/questions/74403043/sorting-list-of-data-for-svelte-components
  </script>

<div>
<button on:click={() => {sortNameStore(1)}}>
  Sortera efter namn
</button>
<button on:click={() => {sortNumStore(-1)}}>
  Sortera efter nummer
</button>
</div>
  
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4"> 
    {#each images as image}
        <div>
            <img class="h-auto max-w-full rounded-lg" src={image.src} alt={image.alt} num={image.num}>
            <p>{image.alt} {image.num}</p>
        </div>
    {/each}
</div>

<style>
  button{
  border-color:#4caf50 ;
  }

</style>
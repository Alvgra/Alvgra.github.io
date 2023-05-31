
<p>Todo list:</p>

<header class= sträcket_color>____________________________________________________________________________________________________________________</header>

<script>

    let newItem = '';
	
    let todoList = [];
	
	function addToList() {
		todoList = [...todoList, {text: newItem, status: false}];
		newItem = '';
	}
	
	function removeFromList(index) {
		todoList.splice(index, 1)
		todoList = todoList;

    }

    let scoops = 1;
	let flavours = ['Mint choc chip'];

    let menu = [
		'Cookies and cream',
		'Mint choc chip',
		'Raspberry ripple'
	];

	function join(flavours) {
		if (flavours.length === 1) return flavours[0];
		return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
	}
</script>

<input bind:value={newItem} type="text" placeholder="Lägg til en ny todo...">
<button class='knapp_text' on:click={addToList}>Lägg till</button>

<br/>
{#each todoList as item, index}
	<input class='bakgrund_checkbox' bind:checked={item.status} type="checkbox">
	<span class:checked={item.status}>{item.text}</span>
	<span on:click={() => removeFromList(index)}>❌</span>
	<br/>
{/each} 

<h1 class=order_color>Do you want to order icecream?</h1>
<h7 class=some_here_color>Order some here:</h7>
<h2 class=Size>Size</h2>

<label>
	<input type=radio bind:group={scoops} value={1}>
	One scoop
</label>

<label>
	<input type=radio bind:group={scoops} value={2}>
	Two scoops
</label>

<label>
	<input type=radio bind:group={scoops} value={3}>
	Three scoops
</label>

<h2 class=Flavours>Flavours</h2>

{#each menu as flavour}
	<label>
		<input type=checkbox bind:group={flavours} value={flavour}>
		{flavour}
	</label>
{/each}

{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
		of {join(flavours)}
	</p>
{/if}







<style> 
    .sträcket_color{
        
    }
    .order_color{
        color: rgb(208, 123, 234);
        margin-bottom: -1%;
    }
    .Size{
        color: #ea83ba;
        margin: 0cm;
   }
    .some_here_color{
        color: rgb(208, 123, 234) ;
        margin-bottom:2%;
    }
    .Flavours{
        color:rgb(234, 131, 186);
    }
    .knapp_text{
        color:rgb(222, 165, 198);
        background-color: #f4d6ed;
    }
    .bakgrund_checkbox{
        color: rgb(155, 27, 50);
        background-color: rgb(242, 230, 241);
    }
    :global(body){
        background-color: rgb(245, 231, 245);
    }
    p{
        color:rgb(234, 131, 186);
        
        font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
    }

    

</style> 
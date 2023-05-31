<script>
	let name = "Umeå Västra"; //java script

	
	const carouselPhotos = [
		"BIld1.jpeg",
		"Bild7.jpeg",
		"Bild3.jpeg",
		"Bild8.jpeg",
	];

	let index = 0;

	const next = () => {
		index = (index + 1) % carouselPhotos.length;
	};

	let xPos = 1000;
	let yPos = 1000;

	
</script>

<!--allt annat är HTML-->

<main>
	
	<div class="rubrik">
		<h1>{name}!</h1>
	</div>

	<div class="top">
		<h8>#FRAMÅTAVÄSTRA</h8>
	</div>

	<div class="Brodtext">
		<h3>
			Umeå Västra är en renodlad innebandyförening med 100% fokus på
			damverksamhet där vi tränar för långsiktig framgång. Säsong
			2022/2023 har vi dubbla lag i både division 1 och juniorallsvenskan
			DJ18 samt ett gemensamt lag i Damutveckling A
		</h3>
	</div>

	<div class="containers">
		<div class="vanster-sida">
			<a href="http://localhost:5175/Historia"><img src="Swish.png" alt="Swish" width="200" height="60"/></a>
			
			<h5>SWISHA VÄSTRA</h5>

			<h5>BLI MEDLEM</h5>
			<p>Som stödmedlem stöttar du vår verksamhet ekonomiskt samtidigt som du har möjlighet
			att påverka föreningens verksamhet.</p>
		
			<a href="http://localhost:5173/Medlem"><img src="click-here.png" alt="click-here" width="100" height="60"/></a>

			<h5>SUPPORTERPRYLAR</h5>
			<img class="mössa" src="mössa.jpeg" alt="mössa" style="width:15vw; height:20vh "/>
			
			<br>

			<img
			class="halsduk"
			src="halsduk.jpeg"
			alt="halsduk"
			style="width:15vw; height:10vh "/>


		</div>

		
		<div class="carusell">
			{#each [carouselPhotos[index]] as src (index)}
				<img {src} alt="" style="width: 60vw;  max-height:55vh" />
			{/each}

			<button class="button" on:click={next} style="width:50vw;"
				>BYT BILD</button>

			<img class="logga" src="umea-vastra.png" alt="logga" style="width:400px; height:250px "/>

			
			
		</div>
		

		<div class="hoger_sida">
			

			<img
				class="UV"
				src="UV-logga.png"
				alt="logga"
				style="width:15vw; height:35vh "
			/>
			<h5>NYHETER</h5>
			<a href="http://localhost:5175/Historia">SPELA MED VÄSTRA!</a>
			<a href="http://localhost:5173/Vora-lag">VÄSTRA 4:a i USM F16</a>
			<br>
			<br>
			<h5>FÖLJ OSS</h5>
			<div class="sociala-medier">
			<a href="https://www.facebook.com/umeavastra/"><img src="facebook.png" alt="facebook" width="50" height="6"/></a>
			<a href="https://www.instagram.com/umeavastra/"><img src="Insta.png" alt="instagram" width="70" height="6"/></a>
			<a href="https://twitter.com/umeavastra/"><img src="tvitter.png" alt="twitter" width="50" height="6"/></a>

			</div>

		</div>
	</div>

	<div class="contacts">
		<h4>KONTAKTUPPGIFTER</h4>
		<h4>
			Umeå Västra IF <br />
			c/o Umeå Performance Center AB <br />
			Rälsvägen 7 <br />
			901 32 UMEÅ <br />
		</h4>
	</div>
</main>

<style>
	.logga{
		margin-left: 180px;
		margin-top: 90px;
	}
	.Brodtext {
		margin-top: 100px;
		text-align:center;
	}
	.containers {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		align-items: start;
		margin: 0;
	}
	h3 {
		color: rgb(20, 67, 42);
		font-weight: 200;
		font-style: oblique;
	}
	.carusell {
		width: 50vw;
		margin-top: 100px;
	}
	/*.frontpage {
		display: flex;
		justify-content: flex-end;
		margin-top: 140px;
		margin-bottom: 100px;
		margin-right: 150px;
	}*/
	.vanster-sida {
		
		width: 15vw;
		
	}
	
	.top {
		margin-top: 90px;
		
		background-color: rgba(70, 192, 64, 0.707);
	}

	
	h8 {
		color: rgb(255, 255, 255);
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		margin-left: 85%;
	}
	.hoger_sida {
		width: 14vw;
	}
	.contacts {
		background-color:rgba(70, 192, 64, 0.707);
		margin-top: 100px;
	}

	h1 {
		text-align: center;
		font-size: 4em; /*storlek på text CSS*/
		text-transform: uppercase;
		font-weight: 100; /*snyggare textstil*/
	}

	.button {
		position: absolute;
		color: rgb(243, 249, 243);
		background-color: rgba(70, 192, 64, 0.707);
	}

	h4 {
		color: black;
		font-weight: 100;
	}
	.sociala-medier{
		flex-direction:row;
		
	}


	
</style>

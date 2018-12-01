<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			
			<div class="background">
				<h1>Welcome to Harold's Pizza</h1>
				<h2>Feeling Hungry?</h2>
				<router-link to="/menu"><a class="btn btn-success text-white">Let's order</a></router-link>

			</div>


		</div>
	
	</div>	

</template>

<style type="text/css">
	
	  #home {
    background: url('pizza.jpg');
    height: 800px;
    padding: 10%;
  }

  h1, h2 {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      
      <div class="background">
        <h1>Welcome to Harold's Pizza</h1>
        <h2>Feeling Hungry?</h2>
        <router-link to="/menu"> <button id="homeBtn" class="btn btn-success">Let's order</button></router-link>

      </div>


    </div>
  
  </div>  

</template>

<style type="text/css">
  
    #home {
    background: url('../../src/assets/pizza.jpg');
    padding: 20%;
    width: 100% !important;
    background-size: 100%;
}
  h1, h2 {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0;
  }
  button#homeBtn {
    cursor: pointer;
}
</style>
<script>
  import Video from "./Video/Video.svelte";
  import SignUp from "./SignUp.svelte";
  import SignIn from "./SignIn.svelte";
  import Cards from "./cards/Cards.svelte";
  import AboutUs from "./AboutUs.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Hats from "./cards/Hats.svelte";
  import Bags from "./cards/Bags.svelte";
  import Item from "./cards/Item.js";
  import Card2 from "./cards/Card2.svelte";
  import { onMount } from 'svelte';
  import axios from 'axios';
  import AddProduct from "../AddProduct.svelte";
  import ViewItem from "./cards/ViewItem.svelte";
  import Sale from "./Sale.svelte";

</script>

<!-- <Bags></Bags> -->
 <!-- <Hats></Hats> -->
<!-- <ViewItem /> -->
<Video />
<Sale />
<!-- <SignUp />
<SignIn></SignIn> -->
<!-- <Cards /> -->



<Router>
  <Route path="SignUp" component={SignUp} />
  <Route path="SignIn" component={SignIn} />
  <Route path="Bags" component={Bags} />
  <Route path="Hats" component={Hats} />
  <Route path="Cards" component={Cards} />

  <!-- <Bags></Bags> -->

 


  
  <!-- <Link to="/SignUp">Sign up</Link>
    <Link to="/Bags">Bags</Link>
    <Link to="/Hats">Hats</Link>
    <Link to="/Cards">Cards</Link> -->

</Router>
<AboutUs></AboutUs>

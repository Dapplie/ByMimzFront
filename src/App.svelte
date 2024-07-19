<script>
  import "./app.css";
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "./Layout/Navbar.svelte";
  import Home from "./Pages/Home/Home.svelte";
  // import Navbar2 from "./Layout/Navbar2.svelte";

  import Home2 from "./routes/Home2.svelte";
  import About from "./routes/About.svelte";
  import Contact from "./routes/Contact.svelte";
  import Cards from "./Pages/Home/cards/Cards.svelte";
  import AccountView from "./Pages/Home/AccountView.svelte"
</script>

<!-- <Navbar2></Navbar2> -->
<!-- <Home></Home> -->

<main>
<Navbar></Navbar>


  <!-- <Router>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />

    <nav>
      <Link to="/">Home2</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>  
  </Router> -->
</main>

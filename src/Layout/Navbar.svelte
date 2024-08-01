<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "../Pages/Home/Home.svelte";
  import SignUp from "../Pages/Home/SignUp.svelte";
  import SignIn from "../Pages/Home/SignIn.svelte";
  let imglogo = "./assets/bymimswht.png";
  import Footer from "../Pages/Home/Footer.svelte";
  import AccountView from "../Pages/Home/AccountView.svelte";
  import Cart from "../Pages/Home/Cart.svelte";
  import Dashboard from "../Pages/Dashboard.svelte";
  import Favorite from "../Pages/Home/Favorite.svelte";
  import Bags from "../Pages/Home/cards/Bags.svelte";
  import Hats from "../Pages/Home/cards/Hats.svelte";
  import { onMount } from 'svelte';
  import { isAuthenticated, isAdminAuthenticated, logout } from '../Pages/Home/auth';
  import AddProduct from "../Pages/AddProduct.svelte";
  import ViewItem from "../Pages/Home/cards/ViewItem.svelte";
  import AdminSignIn from "../Pages/Home/AdminSignIn.svelte";
  import ViewOrders from "../Pages/ViewOrders.svelte";
  import { onDestroy } from 'svelte';
  import { get } from 'svelte/store';

  let showAdminButton = false;

  onMount(() => {
    showAdminButton = get(isAdminAuthenticated);
  });

  let loggedIn = false;

  $: isAuthenticated.subscribe(value => {
    loggedIn = value;
  });

  const handleLogout = () => {
    logout();
    goto('/'); // Redirect after logout
  };

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function handleClickOutside(event) {
    const topnav = document.getElementById("myTopnav");
    if (topnav && !topnav.contains(event.target)) {
      isMenuOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onDestroy(() => {
    document.removeEventListener('click', handleClickOutside);
  });
</script>

<main>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial;
        height: auto;
      }

      .topnav a.link{
        padding: 14px;
      }
      .topnav {
        overflow: hidden;
        background-color: rgba(51, 51, 51, 0.9);
      }

      .topnav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 0.5rem 1rem;
        text-decoration: none;
        font-size: 14px;
      }

      .topnav a.active {
        background-color: #a80cad;
        color: white;
      }

      .topnav a:hover {
        background-color: #555;
        color: white;
        text-decoration: none;
        /* transform: scale(1.05); */
      }

      .topnav .icon {
        display: none;
      }
      .topnav .icon:hover {
        background-color: rgba(144, 144, 144, 0.5);
      }

      @media screen and (max-width: 768px) {
        .topnav a:not(:first-child) {
          display: none;
        }
        .topnav a.icon {
          float: right;
          display: block;
        }
      }

      .topnav.responsive {
        position: relative;
      }

      .topnav.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0;
      }

      .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
      }
    </style>
  </head>
  <body>
    <Router>
      <div class="topnav" id="myTopnav" class:responsive={isMenuOpen}>
        <Link class="active" to="/">
          <img alt="ByMims" class="m-0 p-0" width="45" src={imglogo} />
        </Link>
        {#if $isAdminAuthenticated}
        <Link to="/Dashboard" class="link">Dashboard</Link>
        {/if}
        {#if loggedIn}
        <Link to="/Favorite" class="link">View Favorites</Link>
        <Link to="/Cart" class="link">View Cart</Link>
        <Link to="/AccountView" class="link">View Account</Link>
        
        <Link to="/" on:click={handleLogout} class="link">Logout</Link>
        {:else}
        <Link to="/SignIn" class="link">Login</Link>
        <Link to="/SignUp" class="link">Sign up</Link>
        {/if}
        <a
          href="javascript:void(0);"
          style="font-size:21px;"
          class="icon"
          on:click={toggleMenu}>&#9776;</a>
      </div>

      <Route path="/" component={Home} />
      <Route path="AdminSignIn" component={AdminSignIn} />
      <Route path="ViewOrders" component={ViewOrders} />
      <Route path="SignUp" component={SignUp} />
      <Route path="SignIn" component={SignIn} />
      <Route path="AccountView" component={AccountView} />
      <Route path="Cart" component={Cart} />
      <Route path="Dashboard" component={Dashboard} />
      <Route path="Favorite" component={Favorite} />
      <Route path="Bags" component={Bags} />
      <Route path="Hats" component={Hats} />
      <Route path="AddProduct" component={AddProduct} />
      <Route path="/view-item/:id" component={ViewItem} />
    </Router>
  </body>
</main>
<Footer></Footer>

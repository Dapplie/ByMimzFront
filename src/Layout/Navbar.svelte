<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "../Pages/Home/Home.svelte";
  import SignUp from "../Pages/Home/SignUp.svelte";
  import SignIn from "../Pages/Home/SignIn.svelte";
  import { fix_position } from "svelte/internal";
  let imglogo = "./assets/bymimswht.png";
  import Footer from "../Pages/Home/Footer.svelte";
  import AccountView from "../Pages/Home/AccountView.svelte";
  import Cart from "../Pages/Home/Cart.svelte";
  import Dashboard from "../Pages/Dashboard.svelte";
  import Favorite from "../Pages/Home/Favorite.svelte";
  import Bags from "../Pages/Home/cards/Bags.svelte";
  import Hats from "../Pages/Home/cards/Hats.svelte";
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { isAuthenticated,isAdminAuthenticated, logout } from '../Pages/Home/auth';
  import AddProduct from "../Pages/AddProduct.svelte";
  import ViewItem from "../Pages/Home/cards/ViewItem.svelte";
  import AdminSignIn from "../Pages/Home/AdminSignIn.svelte";
  


  let loggedIn = false;
let adminLoggedIn =false;
$: isAdminAuthenticated.subscribe(value => {
  adminLoggedIn = value;
})
$: isAuthenticated.subscribe(value => {
  loggedIn = value;
});

const handleLogout = () => {
  logout();
  goto('/'); // Redirect after logout
};

</script>

<main>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial;
        height: auto;
      }

      .topnav {
        overflow: hidden;
        background-color: #333;
        /* margin-bottom: 1rem; */
      }

      .topnav a {
        float: left;
        display: none; /* Hide all links by default */
        color: #f2f2f2;
        text-align: center;
        padding: 0.25rem 0.5rem;
        text-decoration: none;
        font-size: 14px;
      }

      .topnav a.active {
        display: block; /* Always show the active (Home) link */
      }

      .active {
        background-color: #a80cad;
        color: white;
      }

      .topnav a:hover {
        background-color: #555;
        color: white;
      }

      .topnav.responsive a {
        display: block; /* Show links when in responsive mode */
        float: none;
        text-align: left;
      }

      .topnav .icon {
        float: right;
        display: block; /* Show the hamburger icon */
      }

      .topnav.responsive .icon:hover {
        background-color: transparent !important;
      }
      .topnav.responsive .icon {
        position: absolute;
        top: 0;
        right: 0;
        /* display: none; */
        /* Hide the hamburger icon when in responsive mode */
      }

      .topnav div a {
        position: absolute;
      }
    </style>
  </head>
  <body>
    <Router>
      <div class="topnav" id="myTopnav">
        <Link class="active" to="/">
          <img alt="ByMims" class="m-0 p-0" width="35" src={imglogo} />
        </Link>
        {#if adminLoggedIn}
        <Link to="/" on:click={handleLogout}>Admin Logout</Link>

        <Link to="/Dashboard">Dashboard</Link>

        {:else}
        <Link to="/AdminSignIn">Admin Login</Link>

        {/if}

        <Link to="/Favorite">View Favorites</Link>
        <Link to="/Cart">View Cart</Link>
        <Link to="/AccountView">View Account</Link>
        {#if loggedIn}
        <Link to="/" on:click={handleLogout}>Logout</Link>
        {:else}
        <Link to="/SignIn">Login</Link>
        <Link to="/SignUp">Sign up</Link>
        {/if}
        <a
          href="javascript:void(0);"
          style="font-size:15px;"
          class="icon"
          onclick="toggleMenu()">&#9776;</a
        >
      </div>

      <script>
        function toggleMenu() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
            document.addEventListener("click", closeMenuOnClickOutside);
          } else {
            x.className = "topnav";
            document.removeEventListener("click", closeMenuOnClickOutside);
          }
        }

        function closeMenuOnClickOutside(event) {
          var x = document.getElementById("myTopnav");
          if (!x.contains(event.target)) {
            x.className = "topnav";
            document.removeEventListener("click", closeMenuOnClickOutside);
          }
        }

        // Prevent toggleMenu function from closing the menu when clicking inside the menu
        document
          .querySelector(".icon")
          .addEventListener("click", function (event) {
            event.stopPropagation();
          });
      </script>

      <!-- <nav>
        <Link to="/">Home</Link>
        <Link to="/SignUp">Sign up</Link>
        <Link to="/SignIn">Sign in</Link>
      </nav> -->
      <Route path="/" component={Home} />
      <Route path="AdminSignIn" component={AdminSignIn} />
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
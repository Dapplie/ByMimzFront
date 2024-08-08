<script>
  import { Router, Route, Link } from "svelte-routing";
  import Cart from "./Cart.svelte";
  import { onMount } from 'svelte';
  import axios from 'axios';

  let user = null;
  let token = localStorage.getItem('token'); // Retrieve token from local storage

  onMount(async () => {
    try {
      const response = await axios.get('http://localhost:3030/api/user', {
        headers: { Authorization: `Bearer ${token}` } // Pass token in headers
      });
      user = response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  });

</script>

{#if user}


<head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <style>
   .card1 {
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
     max-width: 300px;
     margin: auto;
     text-align: center;
     font-family: Arial, sans-serif;
   }

   .title1 {
     color: grey;
     font-size: 18px;
   }

   .button1 {
     border: none;
     outline: 0;
     display: inline-block;
     padding: 8px;
     color: white;
     background-color: #000;
     text-align: center;
     cursor: pointer;
     width: 100%;
     font-size: 18px;
     text-decoration: none; /* Remove underline */
     border-radius: 4px; /* Optional: Add some border radius */
   }

   .button1:hover {
     opacity: 0.7;
   }

   .link1 {
      text-decoration: none;
      font-size: 22px;
      color: black; /* Default color */
    }

    .link1:hover {
      color: #C5C5C5; /* Color on hover */
      text-decoration: none; /* Remove underline on hover */
      transform: scale(1.1); /* Scale effect on hover */
    }


 </style>
</head>

<body>
 <Router>
   <h2 style="text-align:center; font-family:'Impact'" class='mt-2'>User Profile</h2>s

   <div class="card1">
     <img src="./assets/profile.webp" alt="John" style="width:100%">
     <h1>{user.fullName}</h1>
     <p class="title1">{user.email}</p>
     <p>{user.phoneNumber}</p>
     <p>{user.location}</p>
     <!-- <p><a href="https://google.com" class="link1 hoverable" style="color:#272727">Change Password</a></p> -->
     <p>
       <Link to="/Cart" class="button1" style="text-decoration:none; color: #C5C5C5">View Cart</Link>
     </p>
   </div>

   <Route path="/Cart" component={Cart} />
 </Router>
</body>

{:else}
  <p>Loading user information...</p>
{/if}
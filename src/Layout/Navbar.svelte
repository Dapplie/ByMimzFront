<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial;
  }
  
  .topnav {
    overflow: hidden;
    background-color: #333;
  }
  
  .topnav a {
    float: left;
    display: none; /* Hide all links by default */
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav a.active {
    display: block; /* Always show the active (Home) link */
  }
  
  .active {
    background-color: #04AA6D;
    color: white;
  }
  
  .topnav .icon {
    float: right;
    display: block; /* Show the hamburger icon */
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
  
  .topnav.responsive .icon {
    display: none; /* Hide the hamburger icon when in responsive mode */
  }
  
  </style>
  </head>
  <body>
  
  <div class="topnav" id="myTopnav">
    <a href="#home" class="active">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="toggleMenu()">&#9776;</a>
  </div>
  
  <div style="padding-left:16px">
      <p>Test navbar component</p>
  </div>
  
  <script>
  function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.addEventListener('click', closeMenuOnClickOutside);
    } else {
      x.className = "topnav";
      document.removeEventListener('click', closeMenuOnClickOutside);
    }
  }
  
  function closeMenuOnClickOutside(event) {
    var x = document.getElementById("myTopnav");
    if (!x.contains(event.target)) {
      x.className = "topnav";
      document.removeEventListener('click', closeMenuOnClickOutside);
    }
  }
  
  // Prevent toggleMenu function from closing the menu when clicking inside the menu
  document.querySelector('.icon').addEventListener('click', function(event){
    event.stopPropagation();
  });
  </script>
  
  </body>
  
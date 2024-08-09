<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Image Slider</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
  />


</head>
<body>
  <style>
    swiper-container {
      width: 100%;
      height: 100%;
    }

    swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    swiper-container {
      margin-left: auto;
      margin-right: auto;
    }
  </style>

  <swiper-container class="swiper mySwiper" 
  loop="true" speed="1000" autoplay="true">
    <swiper-slide><img src="./assets/fashion.jpg" alt="" /></swiper-slide>
    <swiper-slide><img src="./assets/fashion2.jpg" alt="" /></swiper-slide>
    <swiper-slide><img src="./assets/fashion3.jpg" alt="" /></swiper-slide>
  </swiper-container>

  <script
    src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
  ></script>

  
</body>

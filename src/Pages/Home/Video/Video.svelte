<script>
  import Swiper from 'swiper/bundle';
  import 'swiper/css/bundle';

  let swiper;

  import { onMount } from 'svelte';

  onMount(() => {
    swiper = new Swiper('.mySwiper', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
</script>

<style>
  /* Make Swiper container take up full viewport height */
  .swiper-container {
    width: 100%;
    height: 100vh; /* Full viewport height */
  }

  /* Ensure each slide takes up full container space */
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Full container height */
  }

  /* Make images fit the slide area, covering it completely */
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire slide */
  }
</style>

<div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="./assets/fashion.jpg" alt="" /></div>
    <div class="swiper-slide"><img src="./assets/fashion2.jpg" alt="" /></div>
    <div class="swiper-slide"><img src="./assets/fashion3.jpg" alt="" /></div>
  </div>
  <div class="swiper-pagination"></div>
</div>

<script>
  import Swiper from 'swiper/bundle'; // Use the bundle version
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
</script>

<div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="./assets/fashion.jpg" alt="" /></div>
    <div class="swiper-slide"><img src="./assets/fashion2.jpg" alt="" /></div>
    <div class="swiper-slide"><img src="./assets/fashion3.jpg" alt="" /></div>
  </div>
  <!-- Add Pagination -->
  <div class="swiper-pagination"></div>
  <!-- Add Navigation -->
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>

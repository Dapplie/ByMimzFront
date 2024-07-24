<script>
  let imgsrc = "./assets/fashion.jpg";
  let vidsrc = "./assets/fashion.mp4";
</script>

<main>
  <div class="video1 flex justify-center items-center">
    <!-- <img alt="smd" width="400" src={imgsrc} /> -->
    <video loop muted autoplay class="px-auto mx-auto pt-0 mt-0 w-screen">
      <source src={vidsrc} type="video/mp4" />
    </video>
  </div>
</main>

<style>
</style>

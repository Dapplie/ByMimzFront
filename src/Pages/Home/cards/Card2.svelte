<script>
    export let item;
  </script>

<div class='Card2item'>
<div class="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div class="relative mx-4 mt-4 h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
      <img
        src="./assets/0F0A1098copy.jpg"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="p-6">
      <div class="mb-2 flex items-center justify-between">
        <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          {item.name}
        </p>
        <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          ${item.price}
        </p>
      </div>
      <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
       {item.description}
      </p>
    </div>
    <div class="p-6 pt-0">
      <div class="flex justify-between gap-2"> <!-- Added flex container -->
        <button
          class="block select-none rounded-lg bg-neutral-200 py-2 px-2 text-center align-middle font-sans text-[0.65rem] text-nowrap font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add&nbsp;to Cart
        </button>
        <button
          class="block select-none rounded-lg bg-neutral-200 py-2 px-2 text-center align-middle font-sans text-[0.65rem] text-nowrap font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add&nbsp;to Favorite
        </button>
      </div>
    </div>
    
    
  </div>
 </div> <!-- card2 item -->
  
  <!-- stylesheet -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
  />
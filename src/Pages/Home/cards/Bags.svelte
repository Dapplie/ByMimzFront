<script>
  import Card from "./Card.svelte";
  import Item from "./Item";
  import Card2 from "./Card2.svelte";

  // const items = [
  //     new Item('Summer Dress', 'This is the description for item 1.', 19, 'bag'),
  //     new Item('Summer Dress', 'This is the description for item 2.', 29, 'bag'),
  //     new Item('Item 3', 'This is the description for item 3.', 39, 'bag'),
  //     new Item('Item 4', 'This is the description for item 3.', 39, 'bag'),
  //     new Item('Item 5', 'This is the description for item 3.', 39, 'bag'),
  //     new Item('Item 6', 'This is the description for item 3.', 39, 'bag'),
  //     new Item('Item 7', 'This is the description for item 3.', 39, 'bag'),
  //     new Item('Item 45', 'This is the description for item 3.', 39, 'bag'),
  //     new Item('Item 32', 'This is the description for item 3.', 39, 'bag')
  // ];

  let searchQuery = "";
  const itemssearch = [
    new Item("Summer Dress", "This is the description for item 1.", 19, "bag"),
    new Item("Summer Dress", "This is the description for item 2.", 29, "bag"),
    new Item("Item 3", "This is the description for item 3.", 39, "bag"),
    new Item("Item 4", "This is the description for item 3.", 39, "bag"),
    new Item("Item 5", "This is the description for item 3.", 39, "bag"),
    new Item("Item 6", "This is the description for item 3.", 39, "bag"),
    new Item("Item 7", "This is the description for item 3.", 39, "bag"),
    new Item("Item 45", "This is the description for item 3.", 39, "bag"),
    new Item("Item 32", "This is the description for item 3.", 39, "bag"),
    // Add more items as needed
  ];

  // Reactive filtered items
  $: filteredItems = itemssearch.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<main>
  <div>
    <!-- Searchbar -->
    <div class="mx-auto w-[85svw] my-5 md:w-[75vw]">
      <input
        id="searchbar"
        bind:value={searchQuery}
        type="text"
        name="search"
        placeholder="Search items.."
        class="border-1 w-full border-black rounded-xl p-2"
      />
    </div>

    <div class="flex flex-row flex-wrap gap-5 justify-center items-center">
      {#each filteredItems as item}
        <Card2 {item} />
      {/each}
    </div>
  </div>
</main>

<style>
  input { padding-inline: .5rem; }
  input::placeholder {
    /* color: red; */
    padding-inline: .5rem;
  }
</style>

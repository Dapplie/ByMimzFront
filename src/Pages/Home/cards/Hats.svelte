<script>
    import Card from "./Card.svelte";
    import Item from "./Item";
    import Card2 from "./Card2.svelte";

    const items = [
        new Item('Summer Dress', 'This is the description for item 1.', 19, 'bag'),
        new Item('Summer Dress', 'This is the description for item 2.', 29, 'bag'),
        new Item('Item 3', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 4', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 5', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 6', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 7', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 45', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 32', 'This is the description for item 3.', 39, 'bag')
    ];
</script>


<div class="flex flex-row flex-wrap gap-5 justify-center items-center">
    {#each items as item}
        <Card2 {item} />
    {/each}
</div>


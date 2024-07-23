<script>
    import Item from "./Home/cards/Item";

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

<div class="container">
    <h1 class="mb-8">
        All items online:
    </h1>

    <table class="text-left w-full">
        <thead class="bg-gray-800 flex text-white w-full">
            <tr class="flex w-full mb-2">
                <th class="p-4 w-1/4">Name</th>
                <th class="p-4 w-1/4">Description</th>
                <th class="p-4 w-1/4">Price</th>
                <th class="p-4 w-1/4">Type</th>
                <th class="p-4 w-1/4">Action</th>
            </tr>
        </thead>
        <!-- Remove the inline CSS fixed height on production and replace it with a CSS class -->
        <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style="height: 50vh;">
            {#each items as item}
            <tr class="flex w-full mb-2">
                <td class="p-4 w-1/4">{item.name}</td>
                <td class="p-4 w-1/4">{item.description}</td>
                <td class="p-4 w-1/4">${item.price}</td>
                <td class="p-4 w-1/4">{item.type}</td>
                <td class="p-4 w-1/4">
                    <button class="bg-gray-800 text-white rounded-xl px-4 py-2">Remove item</button>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

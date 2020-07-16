<script>
  import "smelte/src/tailwind.css";
  import SearchBar from "./SearchBar.svelte";
  import Trains from "./Trains.svelte";
  import Cars from "./Cars.svelte";
</script>

<main>
  <div class="bg-secondary-100 opacity-50 absolute top-0 w-screen h-screen">
    <div class="text-center mt-10">
      <SearchBar />
    </div>
    <div class="m-10 text-center mx-auto">
      <Trains />
    </div>
    <div>
      <Cars />
    </div>
  </div>
</main>

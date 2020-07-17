<script>
  import { getStations } from "./dataFetch";
  import { nearestStation } from "./geolocation";
  import { currentStation, stationsList as stations } from "./store";

  import fuzzysort from "fuzzysort";

  import Spinner from "smelte/src/components/ProgressCircular";

  let stationFetchPromise;
  let hidden = true;
  let searchTerm = "";

  $: filteredOptions = fuzzysort.go(searchTerm, $stations, {
    key: "name",
    limit: 10,
  });
  $: availiableOptions = renderOptions(searchTerm, filteredOptions, $stations);

  const onFocus = () => {
    hidden = false;
    if ($stations.length !== 0) {
      stationFetchPromise = Promise.resolve();
      return;
    }
    stationFetchPromise = getStations().then((res) => {
      if (!res.ok) {
        throw new Error();
      } else {
        res.json().then((body) => {
          stations.set(body);
        });
      }
    });
  };

  function onSelect(station) {
    searchTerm = station.name;
    hidden = true;
    currentStation.set(station);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const station = nearestStation(
        $stations,
        position.coords.latitude,
        position.coords.longitude
      );
      onSelect(station);
    });
  }

  function renderOptions(searchTerm, filteredStations, stations) {
    const visibleStations = searchTerm ? filteredStations : stations;
    return visibleStations.map((result) => {
      try {
        const html = fuzzysort.highlight(result);
        return {
          ...result.obj,
          html,
        };
      } catch {
        return result;
      }
    });
  }
</script>

<style>
  .hidden {
    display: none;
  }
</style>

<!-- gray background -->
<div
  class="absolute left-0 top-0 z-10 bg-gray-300 opacity-25 w-screen h-screen"
  class:hidden
  on:click={() => (hidden = true)} />
<!-- end gray background -->

<div class="z-20 p-0 py-3 relative w-2/3 text-center inline-block rounded-lg">
  <input
    type="search"
    class="h-8 m-auto rounded border-gray-400 border-solid shadow-md w-full
    border-2"
    bind:value={searchTerm}
    on:focus={onFocus} />
  {#if !hidden}
    <ul class="fixed m-0 p-0 list-none w-2/3 rounded-lg bg-gray-200">
      {#await stationFetchPromise}
        <li
          class="m-0 h-8 p-8 bg-gray-200 hover:bg-gray-500 shadow-md rounded-lg
          relative">
          <Spinner />
        </li>
      {:then}
        <li
          class="m-0 h-8 p-8 py-2 bg-gray-200 hover:bg-gray-500 shadow-md
          rounded-lg relative"
          tabindex="0"
          on:click={getCurrentLocation}>
          Get my current location
        </li>
        {#each availiableOptions as station, i}
          <li
            class="m-0 h-8 p-8 py-2 bg-gray-200 hover:bg-gray-500 shadow-md
            rounded-lg relative"
            tabindex={i + 1}
            on:click={() => onSelect(station)}>
            <span>
              {@html station.html || station.name}
            </span>
          </li>
        {:else}
          <li>No Matching Stations</li>
        {/each}
      {:catch}
        An error has occurred.
      {/await}
    </ul>
  {/if}
</div>

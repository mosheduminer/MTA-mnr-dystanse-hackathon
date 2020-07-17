<script>
  import ProgressBar from "smelte/src/components/ProgressLinear";
  import Train from "./Train.svelte";
  import { getTrainsApproaching } from "./dataFetch";
  import { currentStation, trainsData } from "./store";
  let stationId = undefined;
  let trains = [];
  let fetchingDataPromise;

  $: {
    stationId = $currentStation.station_id;
    if (stationId)
      fetchingDataPromise = getTrainsApproaching(stationId).then((data) => {
        data.json().then((data) => {
          trains = data["details"];
          trainsData.set(data["details"]);
        });
      });
  }
</script>

<style>
  li {
    box-shadow: inset 5px 0px 5px rgba(0, 0, 0, 0.1);
  }
  ul::-webkit-scrollbar {
    width: 0.4rem;
  }
  ul::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ul::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
</style>

<ul class="flex overflow-x-scroll w-screen">
  {#await fetchingDataPromise}
    <ProgressBar />
  {:then}
    {#if trains.length === 0 && stationId}
      <li class="p-2 text-lg w-40">No Trains Approaching This Station</li>
    {:else}
      {#each trains as train}
        <Train {train} />
      {/each}
    {/if}
  {:catch}
    <div>Uh oh, an error has occurred.</div>
  {/await}
</ul>

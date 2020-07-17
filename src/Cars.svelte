<script>
  import { selectedTrain, trainsData } from "./store";
  import Car from "./Car.svelte";

  let train;
  $: {
    const id = $selectedTrain;
    const trainList = $trainsData.filter((obj) => {
      return obj.id == id;
    });
    train = trainList[0];
  }
</script>

<div class="mx-auto text-center w-1/3">
  {#if train}
    <div>
      Train:{train.id}
      <br />
      <em>front of train</em>
    </div>
    <div class="w-24 inline-block">
      {#each train.cars as car}
        <Car {car} />
      {/each}
    </div>
  {/if}
</div>

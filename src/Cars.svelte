<script>
  import { selectedTrain, trainsData } from "./store";
  import Car from "./Car.svelte";

  let train;
  $: {
    const id = $selectedTrain;
    console.log(id);
    const trainList = $trainsData.filter((obj) => {
      return obj.id == id;
    });
    train = trainList[0];
    console.log(train);
  }
</script>

<div class="container">
  <div class="center">
  {#if train}
    <div class="inline-block w-1/3">
      {#each train.cars as car}
        <Car {car} />
      {/each}
    </div>
  {/if}
  </div>
</div>

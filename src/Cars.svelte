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
<style>
  .train-car{
  width: 3rem;
  padding: 3rem
  }
</style>
<div class="container p-10 mx-auto">
  {#if train}
  <div>
    Train:{train.id}<br>
    <em>front of train</em>
  </div>
    <div class="container p-5 inline-block w-1/3">
      {#each train.cars as car}
        <Car {car} />
      {/each}
    </div>
  {/if}
</div>

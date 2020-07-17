<script>
  export let train;
  import { selectedTrain } from "./store";

  const onClick = () => {
    selectedTrain.set(train.id);
  };
</script>
<style>
  li {
    box-shadow: inset 10px 0px 10px rgba(0, 0, 0, 0.1);
    min-width: 8rem;
  }
</style>

<li on:click={onClick} class="p-2 cursor-pointer hover:bg-gray-300 text-lg w-40">
  {train.id}
  <hr />
  {train.summary}
</li>

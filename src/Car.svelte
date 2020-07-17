<script>
  export let car;

  let style = "";

  $: {
    if (car.PassengerLevel.toLowerCase() === "full") {
      style = "red";
    } else if (car.PassengerLevel.toLowerCase() === "half full") {
      style = "yellow";
    } else if (car.PassengerLevel.toLowerCase() === "empty") {
      style = "green";
    }
  }
</script>
<style>
  div{
  text-align: center;
  font-weight: bold;
  }
  .green{
  background-color: green;
  }
  .yellow{
  background-color: yellow;
  }
  .red{
  background-color: red;
  }
</style>
<div class="rounded p-12 m-1 {style}">
  <span>
    {car.PassengerCount}
    <!--riders -->
    <!-- car is about  -->
    {car.PassengerLevel.toLowerCase()}
  </span>
</div>

<script>
  export let car;

  let style = "";

  $: {
    if (car.PassengerLevel.toLowerCase() === "full") {
      style = "bg-error-400";
    } else if (car.PassengerLevel.toLowerCase() === "half full") {
      style = "bg-alert-400";
    } else if (car.PassengerLevel.toLowerCase() === "empty") {
      style = "bg-success-400";
    }
  }
</script>
<div class="container p-1 w-3">
  <div class="rounded p-8 border-solid border-red-400 {style}">
    {car.PassengerCount}  <!--riders -->
    <!-- car is about  -->
    {car.PassengerLevel.toLowerCase()}
  </div>
</div>
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

<hr>
<div class="rounded p-12 border-solid border-red-400 text-center mx-1 {style}">
  <span>
    {car.PassengerCount}
    <!--riders -->
    <!-- car is about  -->
    {car.PassengerLevel.toLowerCase()}
  </span>
</div>

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

<div class="rounded border-solid border-red-400 {style}">
  {car.PassengerCount}
</div>

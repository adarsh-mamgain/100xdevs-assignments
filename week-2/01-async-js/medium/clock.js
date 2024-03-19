setInterval(() => {
  const time = new Date();
  let Hours = time.getHours() + 5;
  let Minutes = time.getMinutes();
  let Seconds = time.getSeconds();

  console.log(`${Hours}::${Minutes}::${Seconds}`);
  console.log(
    `${Hours < 12 ? 12 : Hours - 12}::${Minutes}::${Seconds} ${
      Hours >= 12 ? "PM" : "AM"
    }`
  );
}, 1000);

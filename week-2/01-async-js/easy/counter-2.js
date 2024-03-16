function recursiveInterval() {
  const time = new Date();
  console.log(`${time.getHours()}::${time.getMinutes()}::${time.getSeconds()}`);

  setTimeout(recursiveInterval, 1000);
}

recursiveInterval();

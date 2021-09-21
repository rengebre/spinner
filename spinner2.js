let timer = 0;

while (timer < 1600) {
  const symbolArray = ['|', '/', '-', '\\'];
  for (const symbol of symbolArray) {
    setTimeout(() => {
      process.stdout.write(`\r${symbol}   `);
    }, timer += 200);
  }
}

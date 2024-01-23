document.getElementById('btn').addEventListener('click', async () => {
  let text = document.getElementById('text').value;
  let delay = document.getElementById('delay').value;

  if (text && delay) {
    let myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(text);
      }, delay);
    });

    let text2 = await myPromise;

    document.getElementById("output").textContent = text2;
  }
});

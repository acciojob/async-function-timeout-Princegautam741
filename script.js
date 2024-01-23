let text = document.getElementById('btn').innerText;
let delay = 2000; // Replace with your desired delay in milliseconds

if (text && delay) {
  let myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });

  let text2 = await myPromise;

  document.getElementById("output").textContent = text2;
}

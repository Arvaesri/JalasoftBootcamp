if (typeof Worker !== undefined) {
  const worker = new Worker("./serviceWorker.js");

  document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
      command: "setQuota",
      quota,
    });
  });

  worker.addEventListener("message", (event) => {
    document.querySelector(
      "#output"
    ).textContent = `Finished calculating your stuff ${event.data}`;
  });

  document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#output").value =
      'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
  });
} else {
  document.querySelector("#output").textContent =
    "Your browser does not support Web Workers";
  document.querySelector("#generate").style.display = "none";
  document.querySelector("#quota").style.display = "none";
  document.querySelector("#reload").style.display = "none";
}

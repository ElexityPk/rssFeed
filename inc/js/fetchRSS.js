function fetchRSS() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Process XML response here
        var xmlText = xhr.responseText;
        console.log(xmlText);
        // Parse XML and handle new job posts
        // Show notification or update popup if new job found
      } else {
        console.error("Failed to fetch RSS:", xhr.status);
      }
    }
  };
  xhr.open("GET");
  xhr.send();
}

// Fetch RSS every 5 minutes (300,000 milliseconds)
setInterval(fetchRSS, 3000);

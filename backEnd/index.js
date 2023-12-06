const express = require("express");
const axios = require("axios"); // Import Axios
const xml2js = require("xml2js");
// Parse XML data

const app = express();
const rssURL =
  "https://www.upwork.com/ab/feed/jobs/rss?q=%28React+AND+Node+AND+js+AND+Express+AND+MERN%29+AND+%28React+OR+Node+OR+js+OR+javascript%29&sort=recency&paging=0%3B10&api_params=1&securityToken=7ef2a4f1001abebcf4d37460e432a8f38587b1779ce724e0c55cc9d033cfb74a66ab0ecb11c5b1b4f1d0f18d4804cdf2166b7beff5177c255f2f2e1cf637188e&userUid=651708445704474624&orgUid=651708445708668929";
app.get("/upwork-rss", async (req, res) => {
  try {
    const response = await axios.get(rssURL);
    const xmlData = response.data; // Axios response has a `data` property containing the response body
    xml2js.parseString(xmlData, (parseErr, result) => {
      if (parseErr) {
        console.error("Error parsing XML:", parseErr);
        return;
      }
      // Access the entries from the RSS feed (adjust the path according to your XML structure)
      const entries = result.rss.channel[0].item;

      // Find the entry with the latest publication date or timestamp
      let latestEntry = entries[0];
      for (let i = 1; i < entries.length; i++) {
        const currentDate = new Date(
          latestEntry.pubDate || latestEntry.timestamp
        );
        const entryDate = new Date(entries[i].pubDate || entries[i].timestamp);
        if (entryDate > currentDate) {
          latestEntry = entries[i];
        }
      }

      // Access the details of the latest entry
      console.log("Latest entry:", latestEntry);
      // Access other details as needed
      res.send(latestEntry);
    });
  } catch (error) {
    res.status(500).send("Error fetching Upwork RSS");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

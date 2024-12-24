import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const day = new Date('December 23, 2024 01:01:30');
    const day1 = day.getDay();
    console.log(day1);
    if (day1 == 0 || day1 == 6 ){
    res.render("index.ejs", {dayType:"weekend", advice:"It's time to have fun!",});
    }else {res.render("index.ejs", {dayType:"a weekday", advice:"It's time to work hard!",});
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
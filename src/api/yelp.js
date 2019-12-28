import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 8KUXEpmM7lBI2QkUN0SYlVe_Ktu8-28SF17EyE8bCl1QWSn5mnfzb5ejxunpUXjP8EYsGcJyLtptk-5maKx8thUym_rKqp-SPWdXuMNPxtxxWZqcx4g2hMUnNmv7XXYx"
  }
});

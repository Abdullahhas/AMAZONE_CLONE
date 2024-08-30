let url = "https://api.github.com/users/abdullahhas";

let getinfo = async () => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data.bio);
};
getinfo();
console.log("abdullah");

async function getPost() {
  const aw = await fetch("https://www.reddit.com/r/aww/.json");
  
  const data = await aw.json();
    
  let datawewant = data.data.children;
    console.log(datawewant);

    let title = datawewant[i].data.title;

    for(let i = 0; i <= datawewant.length; i++) {
  console.log(title);
  
  let image = datawewant[i].data.thumbnail;
  console.log(image);

  let workingLink = datawewant[i].data.url;
  console.log(workingLink);
}
}
getPost();

//async function getPost() {
  const aw = await fetch("https://www.reddit.com/r/aww/.json");

  const data = await aw.json();

  let whatwewant = data.data.children;
  console.log(whatwewant);
  for (let i = 0; i <= whatwewant.length; i++) {
    let title = whatwewant[i].data.title;
    console.log(title);
    let image = whatwewant[i].data.thumbnail;
    console.log(image);
    let workinglink = whatwewant[i].data.url;
    console.log(workinglink);
  }
}

//title, image, working link

getPost();
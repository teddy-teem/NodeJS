(async () => {
  const divElem = document.getElementById("root");
  console.log(divElem);
  const data = await fetch("http://192.168.1.123:3000/data").then((res) =>
    res.json()
  );
  divElem.innerText = data.data.name;
})();

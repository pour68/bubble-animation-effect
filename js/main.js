const circle = () => {
  const amount = 35;
  const body = document.querySelector("body");
  let i = 0;

  while (i < amount) {
    let element = document.createElement("i");

    element.classList.add("circle");

    let posX = Math.floor(Math.random() * window.innerWidth);
    let size = Math.random() * 250;
    let delay = Math.random() * -20;
    let duration = Math.random() * 10;

    element.style.width = `${10 + size}px`;
    element.style.height = `${10 + size}px`;
    element.style.left = `${posX}px`;
    element.style.animationDelay = `${delay}s`;
    element.style.animationDuration = `${5 + duration}s`;
    element.style.boxShadow = "4px 4px 24px #333";
    element.style.zIndex = -1;

    body.appendChild(element);

    i++;
  }
};

circle();

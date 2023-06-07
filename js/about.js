let team = [
    {
      id: 1,
      image: "https://i.postimg.cc/kg54X1N1/C12-C1-Sidwell-Batyi-2.jpg",
      name: "Sidwell Batyi",
      role: "Contact page team",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/7LgrrW7F/C12-Timothy-Barry-1.jpg",
      name: "Timothy Barry",
      role: "Team leader",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/YCj8KLcY/C12-C-1-Lyle-Brown-2.jpg",
      name: "Lyle Brown",
      role: "Contact page team",
    },
    {
      id: 4,
      image: "https://i.postimg.cc/Njdr7d5w/c12-marcel-brown-1.jpg",
      name: "Marcel Brown",
      role: " About team",
    },
    {
      id: 5,
      image: "https://i.ibb.co/CtmZ2t9/IMG-20230428-WA0009.jpg",
      name: "Xola Bangaza",
      role: "Cart team",
    },
    {
        id: 6,
        image: "https://i.postimg.cc/jjLwsxr3/rrr.jpg",
        name: "Ridhaa Gabier",
        role: "About team",
      },
      {
        id: 7,
        image: "https://i.postimg.cc/4NbcnfGy/C12-Olwethu-Bhiya-2.jpg",
        name: "Olwethu Bhiya",
        role: "Cart team",
      },
      {
        id: 8,
        image: "https://i.postimg.cc/28vwGNDN/IMG-2409-2.jpg",
        name: "Zulaigah Benjamin",
        role: "About team",
      },
      {
        id: 8,
        image: "https://i.postimg.cc/k5jwBXZ0/imooo.png",
        name: "Imraan Bernksen",
        role: "Founder",
      },
  ];
  
  let myTeam = document.querySelector(".team");
  team.forEach((data) => {
    myTeam.innerHTML += `
   
  <div class= "card">
         <div class="image">
             <img src="${data.image}" loading="lazy" class="img-fluid">
             <br>
             <h3>${data.name}</h3>
             <br>
         </div>
    <p class="price">${data.role}</p>
    <br>
    </div>
  
   `
  });
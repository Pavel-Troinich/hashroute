const routes = {
  404: {
      template: "/hashroute/templates/404.html",
      title: "404",
      description: "Page not found",
  },
  "/": {
      template: "/hashroute/templates/index.html",
      title: "Home",
      description: "This is the home page",
  },
  about: {
      template: "/hashroute/templates/about.html",
      title: "About Us",
      description: "This is the about page",
  },
  contact: {
      template: "/hashroute/templates/contact.html",
      title: "Contact Us",
      description: "This is the contact page",
  },
};


const locationHandler = async () => {
  var location = window.location.hash.replace("#", "");
  if (location.length == 0) {
    location = "/";
  }
  const route = routes[location] || routes["404"];
  
  const html = await fetch(route.template).then((response) => response.text());
  
  document.getElementById("content").innerHTML = html;
  
  document.title = route.title;
  
  document
      .querySelector('meta[name="description"]')
      .setAttribute("content", route.description);
};



window.addEventListener("hashchange", locationHandler);

locationHandler();

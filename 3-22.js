let user = {
    name: "Yana",
    age: 25,
    articles: [{ name: "JS" }, { name: "React" }, { name: "Vue" }, { name: "Cource" }],
  };
  
  const logUserArticles = (user) => {
    let userArticles = user.articles;

    userArticles.forEach((article,index) => {
        console.log(`Article ${index+1} name is ${article.name}`);
    });
  };
    
  logUserArticles(user);

  user.articles = user.articles.map((article) => {
    article.text = "default text";
    return article;
  });

  console.log(user);

  let articleName = user.articles.reduse((prev, curr) => {
    return prev + "" + curr.name;
  }, "");

  console.log(articleName);
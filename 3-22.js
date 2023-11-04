let user = {
    name: "Yana",
    age: 25,
    articles: [{ name: "JS" }, { name: "React" }, { name: "Vue" }, { name: "Cource" }],
  };
  
  const logUsersArticles = (user) => {
    let userArticles = user.articles;

    userArticles.forEach((article, index) => {
        console.log(`Article ${index + 1} name is ${article.name}`);
    });
  };
    
  logUsersArticles(user);

  user.articles = user.articles.map((article) => {
    article.text = "default text";
    return article;
  });

  console.log(user);

  let articlesName = user.articles.reduce((prev, curr) => {
    return prev + " " + curr.name;
  }, "");

  console.log(articlesName);
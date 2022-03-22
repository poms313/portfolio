document.addEventListener("DOMContentLoaded", async () => {

    const data = [{
        id: "webAgency",
        name: "webAgency",
        coverUrl: "images/portfolio/webagency.svg",
        coverAlt: "",
        title: "WebAgency",
        subtitle: "Création d'un site en Html/CSS",
        categories: "symfony",
        descriptionTitle: "`test`",
        descriptionSubTitle: `test`,
        description: "Utilisation de Flex box<br>Coder la structure d'une page web en HTML et Css<br>Site responsive: adapté aux mobiles, tablettes et ordinateurs<br>Gérer la responsivité avec les Media Queries (CSS).",
        githubLink: "https://github.com/poms313/integrerMaquette",
        demoLink: "projets/webAgency/index.html",
    }, {
        name: "ttttt",
        id: "ttttt",
        coverUrl: "images/portfolio/webagency.svg",
        coverAlt: "",
        title: "ttttt",
        subtitle: "Création d'un site en Html/CSS",
        categories: "symfony",
        description: "test",
        descriptionTitle: "test",
        githubLink: "https://github.com/poms313/integrerMaquette",
        demoLink: "projets/webAgency/index.html",
    }];

    const template = await fetch("./portfolio.html");
    const html = await template.text();
    const parser = new DOMParser();

    data.forEach((project) => {
        let resultHtml = html;

        Object.keys(project).forEach((key) => {
            resultHtml = resultHtml.replace(`{{project.${key}}}`, project[key]);
        }
        );
        const doc = parser.parseFromString(resultHtml, "text/html");
        const element = doc.querySelector("article");
        document.getElementById("works").appendChild(element);
    }
    )





});
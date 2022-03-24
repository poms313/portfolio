document.addEventListener("DOMContentLoaded", async () => {

    var json = await fetch('js/data.json');
    const jsonData = await json.text();
    const data = JSON.parse(jsonData);

    const parser = new DOMParser();

    // buils skills list
    const templateSkill = await fetch("./html/skillItem.html");
    const htmlSkill = await templateSkill.text();

    data['skills'].forEach((skill) => {
        let resultHtml = htmlSkill;
        Object.keys(skill).forEach((key) => {
            resultHtml = resultHtml.replace(`{{skill.${key}}}`, skill[key]);
        });

        const doc = parser.parseFromString(resultHtml, "text/html");
        const article = doc.querySelector("article");

        document.getElementById("skills-list").appendChild(article);
    });




    const templatePortfolio = await fetch("./html/portfolioItem.html");
    const htmlPortfolio = await templatePortfolio.text();

    // build portfolio modal
    const modal = parser.parseFromString(htmlPortfolio, "text/html").getElementById("portfolio-modal");
    document.getElementById("works").appendChild(modal);
    const titleElement = modal.querySelector('.project__title');
    const subTitleElement = modal.querySelector('.project__subTitle');
    const descriptionElement = modal.querySelector('.project__description');
    let demoLinkElement = modal.querySelector('.project__demoLink');
    const githubLinkElement = modal.querySelector('.project__githubLink');

    modal.addEventListener('hidden.bs.modal', () => {
        titleElement.innerHTML = "";
        subTitleElement.innerHTML = "";
        descriptionElement.innerHTML = "";
        demoLinkElement.href = "";
        demoLinkElement.style.display = "inline-block";
        githubLinkElement.href = "";
        githubLinkElement.style.display = "inline-block";
    });
    modal.addEventListener('shown.bs.modal', () => {
        if (demoLinkElement.href.includes("null")) {
            demoLinkElement.style.display = "none";
        }
        if (githubLinkElement.href.includes("null")) {
            githubLinkElement.style.display = "none";
        }
    });

    // build portfolio cards
    data['projects'].forEach((project) => {
        let resultHtml = htmlPortfolio;

        Object.keys(project).forEach((key) => {
            resultHtml = resultHtml.replace(`{{project.${key}}}`, project[key]);
        });
        const doc = parser.parseFromString(resultHtml, "text/html");
        const article = doc.querySelector("article");

        article.querySelector('.open-modal').addEventListener('click', () => {
            titleElement.innerHTML = project.title;
            subTitleElement.innerHTML = project.descriptionSubTitle;
            descriptionElement.innerHTML = project.description;
            demoLinkElement.href = project.demoLink;
            githubLinkElement.href = project.githubLink;
        })


        document.getElementById("works").appendChild(article);
    });
});

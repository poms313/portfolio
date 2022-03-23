document.addEventListener("DOMContentLoaded", async () => {

    var json = await fetch('js/data.json');
    const jsonData = await json.text();
    const data = JSON.parse(jsonData);

    const template = await fetch("./portfolio.html");
    const html = await template.text();

    const parser = new DOMParser();

    // build portfolio modal
    const modal = parser.parseFromString(html, "text/html").getElementById("portfolio-modal");
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
        demoLinkElement.classList.remove("fade");
        githubLinkElement.href = "";
        githubLinkElement.classList.remove("fade");
    });
    modal.addEventListener('shown.bs.modal', () => {
        if (demoLinkElement.href.includes("null")) {
            demoLinkElement.classList.add("fade");
        }
        if (githubLinkElement.href.includes("null")) {
            githubLinkElement.classList.add("fade");
        }
    });


    // build portfolio cards
    data['projects'].forEach((project) => {
        let resultHtml = html;

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

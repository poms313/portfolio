document.addEventListener("DOMContentLoaded", async () => {

    var json = await fetch('js/data.json');
    const jsonData = await json.text();
    const data = JSON.parse(jsonData);

    const template = await fetch("./portfolio.html");
    const html = await template.text();

    const parser = new DOMParser();

    // inject portfolio modal
    const modal = parser.parseFromString(html, "text/html").getElementById("portfolio-modal");
    document.getElementById("works").appendChild(modal);
    modal.addEventListener('hidden.bs.modal', () => {
        modal.querySelector('.project__title').innerHTML = "";
        modal.querySelector('.project__subTitle').innerHTML = "";
        modal.querySelector('.project__description').innerHTML = "";
        modal.querySelector('.project__demoLink').href = "";
        modal.querySelector('.project__githubLink').href = "";
    });

    // build project cards
    data['list'].forEach((project) => {
        let resultHtml = html;

        Object.keys(project).forEach((key) => {
            resultHtml = resultHtml.replace(`{{project.${key}}}`, project[key]);
        });
        const doc = parser.parseFromString(resultHtml, "text/html");
        const article = doc.querySelector("article");

        article.querySelector('.open-modal').addEventListener('click', () => {
            modal.querySelector('.project__title').innerHTML = project.title;
            modal.querySelector('.project__subTitle').innerHTML = project.descriptionSubTitle;
            modal.querySelector('.project__description').innerHTML = project.description;
            modal.querySelector('.project__demoLink').href = project.demoLink;
            modal.querySelector('.project__githubLink').href = project.githubLink;
        })

        document.getElementById("works").appendChild(article);
    });
});

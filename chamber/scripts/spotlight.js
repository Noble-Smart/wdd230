document.addEventListener("DOMContentLoaded", function () {
    const spotlightContainer = document.getElementById("spotlight-container");

    const companies = [
        { name: "Thankful Transport", email: "hello@thankfultransport.com", phone: "+999-9999-9999" },
        { name: "Code Primera", email: "contact@codeprimera.com", phone: "+999-9999-9999" },
        { name: "Build A Treefort", email: "build@treefort.com", phone: "+888-8888-8888" }
    ];

    companies.forEach(company => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${company.name}</h3>
            <p>${company.email}</p>
            <p>${company.phone}</p>
        `;
        spotlightContainer.appendChild(div);
    });
});

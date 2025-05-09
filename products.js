const buttonMenu= document.querySelectorAll(".custom-button");
const productGrid = document.querySelector(".prdouct__grid");

const product = {
    "ALL": [
        { image: "resim/Sandbox.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "Bootstrap", title: "Sandbox", date: "2024-Mayıs", link: "https://sandboxx-web.netlify.app/", projelers: "Sandbox, bootstrap ile oluşturmuş olduğum ilk mobile duyarlı projemdir." },
        { image: "resim/Coffe.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "JavaScript", title: "Coffee", date: "2024-Subat", link: "https://coffeew.netlify.app", projelers: "Coffee,Html Css ve JavaScript ile yapmış olduğum bir projedir." },
        { image: "resim/Hisar.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "JavaScript", title: "Hisar", date: "2024-Subat", link: "https://hisarpastanesi.netlify.app", projelers: "Hisar,yazılama başladığım zaman oluşturduğum bir projedir." },
        { image: "resim/Landpick.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "JavaScript", title: "Landpick", date: "2024-Temmuz", link: "https://daynexbootstrap-2.netlify.app", projelers: "Landpick,stajımda bana verilen ilk projedir." },
        { image: "resim/Portofolio.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "", title: "Portfolio", date: "2023-Aralık", link: "https://emir-profil-card.netlify.app/", projelers: "Portfolio,stajımda bana verilen ilk projedir." },
        { image: "resim/graphit.png", tagsp1: "HTML", tagsp2: "SASS", tagsp3: "JavaScript", title: "Graphit", date: "2024-Aralık",link:"https://graphitt.netlify.app/", projelers: "Graphit,Bu projede SASS kullanımını ve onla beraber Javascript kullanımını pekiştirdim." },
        { image: "resim/KoruOtel.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "", title: "Koru Otel", date: "2024-Temmuz", link: "http://koruotellprojesi.netlify.app", projelers: "Koru Otel,stajımda bana verilen ilk projedir." },
        { image: "resim/fasco.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "SASS",tagsp4:"JavaScript", title: "FASCO", date: "2025-Ağustos", link: "https://fascoo.netlify.app/", projelers: "Yakında Sizlerle" },
    ],
    "WEBSITE": [
        { image: "resim/Sandbox.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "Bootstrap", title: "Sandbox", date: "2024-Mayıs", link: "https://sandboxx-web.netlify.app/", projelers: "Sandbox, bootstrap ile oluşturmuş olduğum ilk mobile duyarlı projemdir." },
        { image: "resim/Coffe.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "JavaScript", title: "Coffee", date: "2024-Subat", link: "https://coffeew.netlify.app", projelers: "Coffee,Html Css ve JavaScript ile yapmış olduğum bir projedir." },
        { image: "resim/Hisar.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "JavaScript", title: "Hisar", date: "2024-Subat", link: "https://hisarpastanesi.netlify.app", projelers: "Hisar,yazılama başladığım zaman oluşturduğum bir projedir." },
        { image: "resim/KoruOtel.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "", title: "Koru Otel", date: "2024-Temmuz", link: "http://koruotellprojesi.netlify.app",  projelers: "Koru Otel,stajımda bana verilen ilk projedir." },
        { image: "resim/Landpick.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "JavaScript", title: "Graphit", date: "2024-Kasim",link: "https://daynexbootstrap-2.netlify.app", projelers: "Graphit, Bu proje sass kullanimi kendi basima ogrendigim projedir." },
        { image: "resim/graphit.png", tagsp1: "HTML", tagsp2: "SASS", tagsp3: "JavaScript", title: "Graphit", date: "2024-Aralık",link:"https://graphitt.netlify.app/", projelers: "Graphit,Bu projede SASS kullanımını ve onla beraber Javascript kullanımını pekiştirdim." },
        { image: "resim/Portofolio.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "", title: "Portfolio", date: "2023-Aralık", link: "https://emir-profil-card.netlify.app/", projelers: "Portfolio,stajımda bana verilen ilk projedir." },
        { image: "resim/film-sitesi.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "", title: "Film-sitesi", date: "2023-Mayis", link: "https://filmm-web-sitesi.netlify.app/", projelers: "Film-Web-Sitesi, Bu site yazilama basladigimda ogrendigim basit bir film sitesidir.(Kullanimi yoktur.)" },
        { image: "resim/fasco.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "SASS",tagsp4:"JavaScript", title: "FASCO", date: "2025-Ağustos", link: "https://fascoo.netlify.app/", projelers: "Yakında Sizlerle" },
    ],
    "WEB-APPS": [
        { image: "resim/graphit.png", tagsp1: "HTML", tagsp2: "SASS", tagsp3: "JavaScript", title: "Graphit", date: "2024-Aralık",link:"https://graphitt.netlify.app/", projelers: "Graphit,Bu projede SASS kullanımını ve onla beraber Javascript kullanımını pekiştirdim." },
        { image: "resim/Coffe.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "JavaScript", title: "Coffee", date: "2024-Subat",link: "https://coffeew.netlify.app",  projelers: "Coffee,Html Css ve JavaScript ile yapmış olduğum bir projedir." },
    ],
    "LANDING PAGE": [
        { image: "resim/Sandbox.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "Bootstrap", title: "Sandbox", date: "2024-Mayıs", link: "https://sandboxx-web.netlify.app/",  projelers: "Sandbox, bootstrap ile oluşturmuş olduğum ilk mobile duyarlı projemdir." },
        { image: "resim/KoruOtel.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "", title: "Koru Otel", date: "2024-Temmuz",link: "http://koruotellprojesi.netlify.app",  projelers: "Koru Otel,stajımda bana verilen ilk projedir." },
        { image: "resim/Coffe.png", tagsp1: "HTML", tagsp2: "CSS", tagsp3: "JavaScript", title: "Coffee", date: "2024-Subat",link: "https://coffeew.netlify.app",  projelers: "Coffee,Html Css ve JavaScript ile yapmış olduğum bir projedir." },
    ],
};



let activeCategory = "ALL"; 

const renderProducts = (category)=>{
    const productHTML = product[category]
    .map((product) => {
        return `<div class="col-md-6 col-xl-4">
            <div class="card card-projelers">
                <div class="card-img">
                    <a href="${product.link}">
                        <img src="${product.image}" alt="" class="img-fluid">
                    </a>
                </div>
                <div class="card-body">
                    <div class="tags">
                        <span class="tags-p1">${product.tagsp1}</span>
                        <span class="tags-p1">${product.tagsp2}</span>
                        ${product.tagsp3 ? `<span class="tags-p1">${product.tagsp3}</span>` : ''}
                         ${product.tagsp4 ? `<span class="tags-p1">${product.tagsp4}</span>` : ''}
                    </div>
                    <h5 class="card-title">${product.title}</h5>
                    <span class="date">${product.date}</span>
                    <p class="projelers-p">${product.projelers}</p>
                </div>
            </div>
        </div>`;
    })
    .join("");

productGrid.innerHTML = productHTML;
}

buttonMenu.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.textContent.trim();
        
     
        buttonMenu.forEach((btn)=>{
            btn.classList.remove("active");
        });
      
        button.classList.add("active");
        
        activeCategory = category;
        renderProducts(category);
    });
});


renderProducts("ALL");


const navBar = ["Learner","Gooder","Foostger","greater","bester"];

const fullList = [
    {
        English : {
            Basics : [
              {
                Be_Verb: [
                  'Be Verb Sentences', 
                  'https://instagram.com/lesson1', 
                  [
                      { link: 'https://www.instagram.com/p/C86YwHnI23t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', name: 'Instagram Crousel' },
                  ]
              ],
              Imperative: [
                  'Imperative Sentences', 
                  'https://instagram.com/lesson2', 
                  [
                      { link: 'https://www.instagram.com/p/C88lqoMo1u_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', name: 'Instagram Crousel' },
                      
                  ]
              ],
              }
            ]
            
            
        },
        Learner : {
            Onion: ``,
            ANimal: ` <div class="main" style="display: flex;gap: 10px;flex-wrap: wrap;justify-content: space-evenly;">
            <blockquote class="instagram-media"><a href="https://www.instagram.com/p/C7WUjCbNUgg/?utm_source=ig_embed&amp;utm_campaign=loading"target="_blank"></a></blockquote>
            <blockquote class="instagram-media"><a href="https://www.instagram.com/p/C8yIGriIgno/?utm_source=ig_embed&amp;utm_campaign=loading"target="_blank"></a></blockquote>
            <blockquote class="instagram-media"><a href="https://www.instagram.com/p/C8w1XgmMXIe/?utm_source=ig_embed&amp;utm_campaign=loading"target="_blank"></a></blockquote>
            <blockquote class="instagram-media"><a href="https://www.instagram.com/p/C86YwHnI23t/?utm_source=ig_embed&amp;utm_campaign=loading"></a></blockquote>
    
        </div>`,

        },
        
    },
]





const topNavLogo  = document.querySelector("#logo-image img");
const topNavLinks = document.querySelector("#top-nav-links");
const sidesNavLinks = document.querySelector("#side-nav-bar");
const sideBarButton = document.querySelector("#side-bar-open-close");
const mainContent = document.querySelector("#main-content");
const responsive_container = document.querySelector(".responsive-container");



sideBarButton.addEventListener('click', function() {
    if(sidesNavLinks.classList.contains("nav-open")) {
    sidesNavLinks.classList.remove("nav-open");
    
    } else {
        sidesNavLinks.classList.add("nav-open");
    }
})





for (let TopNavKey in fullList[0]) {
    let topNavAnchors = document.createElement("a");
    topNavAnchors.innerHTML = TopNavKey;

    topNavLinks.appendChild(topNavAnchors);

    topNavAnchors.addEventListener('click', function() {
        sidesNavLinks.innerHTML = '';

        topNavLinks.querySelectorAll("a").forEach(anchor => {
          anchor.style.backgroundColor = "black";
        })
        
        this.style.backgroundColor = "green";

        Object.keys(fullList[0][TopNavKey]).forEach(function(SideNavKey) {
            let sideNavAnchors = document.createElement("a");
            sideNavAnchors.innerHTML = SideNavKey;

            sidesNavLinks.appendChild(sideNavAnchors);













            sideNavAnchors.addEventListener('click', function() {

              if(sidesNavLinks.classList.contains("nav-open")) {
                sidesNavLinks.classList.remove("nav-open");
                
                }

                
                responsive_container.innerHTML = '';

                sidesNavLinks.querySelectorAll("a").forEach(anchor => {
                  anchor.style.backgroundColor = "orange";
                })

                this.style.backgroundColor ="green";


                fullList[0][TopNavKey][SideNavKey].forEach(lesson => {
                  for (let key in lesson) {
                    let lessonDetails = lesson[key];
                    let lessonRow = document.createElement('div');
                    lessonRow.className = 'lesson-row';
        
                    let lessonLinkDiv = document.createElement('div');
                    lessonLinkDiv.className = 'lesson-link';
                    let lessonLink = document.createElement('a');
                    lessonLink.href = lessonDetails[1];
                    lessonLink.textContent = lessonDetails[0];
                    lessonLinkDiv.appendChild(lessonLink);
        
                    let dropdownDiv = document.createElement('div');
                    dropdownDiv.className = 'dropdown';
        
                    let dropbtn = document.createElement('button');
                    dropbtn.className = 'dropbtn';
                    dropbtn.textContent = '🡇';
        
                    let dropdownContent = document.createElement('div');
                    dropdownContent.className = 'dropdown-content';
        
                    lessonDetails[2].forEach((download, index) => {
                        let downloadLink = document.createElement('a');
                        downloadLink.href = download.link;
                        downloadLink.textContent = `${download.name}`;
                        downloadLink.target = '_blank';
                        dropdownContent.appendChild(downloadLink);
                    });
        
                    dropdownDiv.appendChild(dropbtn);
                    dropdownDiv.appendChild(dropdownContent);
        
                    lessonRow.appendChild(lessonLinkDiv);
                    lessonRow.appendChild(dropdownDiv);
        
                    responsive_container.appendChild(lessonRow);
                }
                })

                
            });
        });
    });
}

const githubCardContainer = document.querySelector("#github-cards");

fetch('https://api.github.com/users/shreekrishnalamichhane/repos')
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      for (let index = 0; index < 6; index++) {
          githubCardContainer.innerHTML+= `<div class="col-lg-6 mb-30">
          <div class="single-resume">
              <div class="single-resume-card">
                  <h3><a href="${data[index].html_url}" target="_blank" title="${data[index].name}">${trimName(data[index].name)}</a></h3>
                  <div class="expreience-band">
                      <i class="far fa-calendar"></i>
                      <span>${(data[index].updated_at).substr(0,4)}</span>
                  </div>
              </div>
          </div>
      </div>`          
      }
  });

  function trimName(name){
    if(name.length >30){
        return name.substr(0,28) + "...";
    }
    else{
        return name;
    }
  }

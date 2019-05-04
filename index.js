const nextBtn=document.querySelector(".nextBtn");
const prevBtn=document.querySelector(".prevBtn");
const container=document.querySelector(".images");

let counter=0;


nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);

function nextSlide(){
  container.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:1000,fill:"forwards"});

  //to create an infinte loop
  if(counter==4){
    counter=-1;
  }
  counter++;
  container.style.backgroundImage=`url(images/tom${counter}.png)`;
}

function prevSlide(){
  container.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:1000,fill:"forwards"});

  //to create an infinte loop
  if(counter==0){
    counter=4;
  }
  counter--;
  container.style.backgroundImage=`url(images/tom${counter}.png)`;
}

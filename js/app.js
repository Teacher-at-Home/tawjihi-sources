'use strict';
let videos = document.getElementById('videos');
let links =  document.getElementById('links');
let form =  document.getElementById('major');
let selectMajor =  document.getElementById('selectMajor');
let clear = document.getElementById('clear');
let majors = [];


let CreateMajor = function (majorName,vidArray=['video1', 'video2', 'video3', 'video4'], linkArray=['lectureSrc1', 'lectureSrc2', 'lectureSrc3','lectureSrc4'])
{
  this.majorName = majorName;
  this.vidArray =vidArray;
  this .linkArray=linkArray;
  majors.push(this);
  let option = document.createElement('option');
  selectMajor.appendChild(option);
  option.textContent=this.majorName;

};
new CreateMajor('Science',
  ['https://www.youtube.com/embed/?v=0rHUDWjR5gg&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL',
    'https://www.youtube.com/embed/?v=L-Wtlev6suc&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=3',
    'https://www.youtube.com/embed/?v=01QWC-rZcfE&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=4',
    'https://www.youtube.com/embed/?v=AQ5vty8f9Xc&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=5'],
  ['https://www.udemy.com',
    'https://fingerprintvideos.net',
    'https://www.edraak.org','https://www.edraak.org']
);

new CreateMajor('Literature',
  ['https://www.youtube.com/embed/watch?v=Z0zConOPZ8Y',
    'https://www.youtube.com/embed/?v=L-Wtlev6suc&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=3',
    'https://www.youtube.com/embed/?v=01QWC-rZcfE&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=4',
    'https://www.youtube.com/embed/?v=AQ5vty8f9Xc&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=5'],
  ['https://www.udemy.com',
    'https://fingerprintvideos.net',
    'https://www.edraak.org','https://www.google.jo']
);

new CreateMajor('Industrial',
  ['https://www.youtube.com/embed/?v=0rHUDWjR5gg&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL',
    'https://www.youtube.com/embed/?v=L-Wtlev6suc&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=3',
    'https://www.youtube.com/embed/?v=01QWC-rZcfE&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=4',
    'https://www.youtube.com/embed/?v=AQ5vty8f9Xc&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=5'],
  ['https://www.udemy.com',
    'https://fingerprintvideos.net',
    'https://www.edraak.org','https://www.edraak.org']
);

if(localStorage.savedMajors){
  localStorage.savedMajors;
}
let returnMajors= JSON.parse(localStorage.savedMajors);

function render(){
  for(let i=0;i<returnMajors.vidArray.length;i++){
    let vid = document.createElement('iframe');
    videos.appendChild(vid);
    vid.src=returnMajors.vidArray[i];}

  for(let i=0;i<returnMajors.linkArray.length;i++){
    let link = document.createElement('a');
    links.appendChild(link);
    link.textContent=returnMajors.linkArray[i].replace('https://', '');
    link.href=returnMajors.linkArray[i];}

}
if(localStorage.savedMajors && localStorage.savedMajors !=0){
  render();
}

form.addEventListener('submit',submitHandler);

function submitHandler(event){
  event.preventDefault();
  let option = event.target.selectMajor.value;

  for(let i=0;i<majors.length;i++){
    if(majors[i].majorName === option){
      localStorage.savedMajors = JSON.stringify(majors[i]) ;
      returnMajors = JSON.parse(localStorage.savedMajors);
      render();
      console.log(localStorage.savedMajors);
      form.removeEventListener('submit',submitHandler);
      location.reload();
    }
  }
}

clear.addEventListener('click',clearHandler);
function clearHandler(event){
  localStorage.savedMajors = 0;
  location.reload();
}

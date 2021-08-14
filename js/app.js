'use strict';
let videos = document.getElementById('videos');
let links =  document.getElementById('links');
let form =  document.getElementById('major');
let selectMajor =  document.getElementById('selectMajor');
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
  ['https://www.youtube.com/embed/?v=0rHUDWjR5gg&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL',
    'https://www.youtube.com/embed/?v=L-Wtlev6suc&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=3',
    'https://www.youtube.com/embed/?v=01QWC-rZcfE&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=4',
    'https://www.youtube.com/embed/?v=AQ5vty8f9Xc&list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL&index=5'],
  ['https://www.udemy.com',
    'https://fingerprintvideos.net',
    'https://www.edraak.org','https://www.edraak.org']
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
localStorage.savedMajors = JSON.stringify(majors);
let returnMajors = JSON.parse(localStorage.savedMajors);

function render(){
  for(let i=0;i<majors[0].vidArray.length;i++){
    let vid = document.createElement('iframe');
    videos.appendChild(vid);
    vid.src=majors[0].vidArray[i];}

  for(let i=0;i<majors[0].linkArray.length;i++){
    let link = document.createElement('a');
    links.appendChild(link);
    link.textContent=majors[0].linkArray[i].replace('https://', '');
    link.href=majors[0].linkArray[i];}

}

form.addEventListener('submit',submitHandler);
function submitHandler(event){
  event.preventDefault();
  console.log(event.target.selectMajor.value);
  //   if(event.target.selectMajor.value === majors[0].majorName){render();}


  if(event.target.selectMajor.value === 'Science'){
    render();
  }else if(event.target.selectMajor.value === 'Literature'){
    render();
  }else if(event.target.selectMajor.value === 'Industrial'){
    render();
  }
}

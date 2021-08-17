'use strict';
let videos = document.getElementById('videos');
let links = document.getElementById('links');
let form = document.getElementById('major');
let selectMajor = document.getElementById('selectMajor');
let clear = document.getElementById('clear');
let userName = document.getElementById('userName');
// eslint-disable-next-line no-unused-vars
let enterName = document.getElementById('enterName');
let majors = [];

let CreateMajor = function (majorName, vidArray = ['video1', 'video2', 'video3', 'video4'], linkArray = ['lectureSrc1', 'lectureSrc2', 'lectureSrc3', 'lectureSrc4']) {
  this.majorName = majorName;
  this.vidArray = vidArray;
  this.linkArray = linkArray;
  majors.push(this);
  let option = document.createElement('option');
  selectMajor.appendChild(option);
  option.textContent = this.majorName;
};

new CreateMajor('Science',
  ['https://www.youtube.com/embed/vWnetGodwVE',
    'https://www.youtube.com/embed/8sb8p0gDV_0',
    'https://www.youtube.com/embed/FEpgC6pSd44',
    'https://www.youtube.com/embed/p9rVT1YazN4'],
  [['Maths', 'https://www.youtube.com/playlist?list=PLa8IbBityehHH4ayUAQX3TJ_HrLms56s6'],
    ['Chemistry', 'https://www.youtube.com/playlist?list=PLa8IbBityehFIsAEQ5wdffL7xWtSjs_9D'],
    ['Biology', 'https://www.youtube.com/playlist?list=PLa8IbBityehGPfGRD5a-JAX5AaerEsmXd'],
    ['Physics', 'https://www.youtube.com/playlist?list=PLa8IbBityehHxCUsBCqLVTNFqYiKluf0W']]
);

new CreateMajor('Arts',
  ['https://www.youtube.com/embed/Pb6sMI3Y5uI',
    'https://www.youtube.com/embed/XuiTkWL3IOM',
    'https://www.youtube.com/embed/RsIblKl1kNg',
    'https://www.youtube.com/embed/p9rVT1YazN4'],
  [['English', 'https://www.youtube.com/playlist?list=PLa8IbBityehH3hlqQ86bHd9pFL9_TrhCQ'],
    ['Arabic', 'https://www.youtube.com/playlist?list=PLa8IbBityehGqiw-xae3i3O7SqEwup803'],
    ['Computer Science', 'https://www.youtube.com/playlist?list=PLCvvxMCAGP8lyop3JZSDk3eswFeI8SKxt'],
    ['Maths', 'https://www.youtube.com/playlist?list=PLsy0ZR3_3NhVyqkB1WhA9g0GQtV_jNOM3']]
);
new CreateMajor('Industrial',
  ['https://www.youtube.com/embed/A7zCOOEBxhU',
    'https://www.youtube.com/embed/7to7aLAHimk',
    'https://www.youtube.com/embed/YvXTMs-MfrQ',
    'https://www.youtube.com/embed/b9Ep-0GchTY'],
  [['Drawing', 'https://www.youtube.com/playlist?list=PLtO2df0ZfbQ1_31_cbhiP373c-rPZA_EO'],
    ['Industrial Science', 'https://www.youtube.com/playlist?list=PLtO2df0ZfbQ2HScPeHNplfv-fDv2LPVWd'],
    ['Maths', 'https://www.youtube.com/playlist?list=PLa8IbBityehHH4ayUAQX3TJ_HrLms56s6'],
    ['Physics', 'https://www.youtube.com/playlist?list=PLa8IbBityehHxCUsBCqLVTNFqYiKluf0W']]
);

if (localStorage.savedMajors) {
  localStorage.savedMajors;
} else { localStorage.savedMajors = 0; }
let returnMajors = JSON.parse(localStorage.savedMajors);

function render() {
  for (let i = 0; i < returnMajors.vidArray.length; i++) {
    let vid = document.createElement('iframe');
    videos.appendChild(vid);
    vid.src = returnMajors.vidArray[i];
  }
  for (let i = 0; i < returnMajors.linkArray.length; i++) {
    let link = document.createElement('a');
    links.appendChild(link);
    link.textContent = returnMajors.linkArray[i][0];
    link.href = returnMajors.linkArray[i][1];
  }
}
if (localStorage.savedMajors && localStorage.savedMajors !== '0') {
  render();
}

form.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault();
  let option = event.target.selectMajor.value;
  for (let i = 0; i < majors.length; i++) {
    if (majors[i].majorName === option) {
      localStorage.savedMajors = JSON.stringify(majors[i]);
      returnMajors = JSON.parse(localStorage.savedMajors);
      if (!localStorage.savedName || event.target.enterName.value) {
        localStorage.savedName = event.target.enterName.value;
      }
      location.reload();
    }
  }
}
userName.textContent = localStorage.savedName;

clear.addEventListener('click', clearHandler);
function clearHandler() {
  localStorage.savedMajors = 0;
  location.reload();
}

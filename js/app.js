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
  ['https://www.youtube.com/embed/watch?v=tHfIzvgL7Ow&list=RDCMUC5MXpNfBN-PkGGmHOKD8uAg&start_radio=1&rv=tHfIzvgL7Ow&t=7',
    'https://www.youtube.com/embed/watch?v=cD-HQZFRE0c&list=RDCMUCTqxDded1EOGX8puKzVxbrA&start_radio=1&rv=cD-HQZFRE0c&t=2',
    'https://www.youtube.com/embed/watch?v=ZSz8DCFsOI0&list=RDCMUCLbGgaTG2eijfFeWhtrWKLw&start_radio=1&rv=ZSz8DCFsOI0&t=1',
    'https://www.youtube.com/embed/watch?v=p9rVT1YazN4&list=RDCMUCa7sO8mFcUB4Lvvih-rvt7g&start_radio=1&rv=p9rVT1YazN4&t=1'],
  [['Maths', 'https://www.youtube.com/playlist?list=PLa8IbBityehHH4ayUAQX3TJ_HrLms56s6'],
    ['Chemistry', 'https://www.youtube.com/playlist?list=PLa8IbBityehFIsAEQ5wdffL7xWtSjs_9D'],
    ['Biology', 'https://www.youtube.com/playlist?list=PLa8IbBityehGPfGRD5a-JAX5AaerEsmXd'],
    ['Physics', 'https://www.youtube.com/playlist?list=PLa8IbBityehHxCUsBCqLVTNFqYiKluf0W']]
);

new CreateMajor('Arts',
  ['https://www.youtube.com/embed/watch?v=Pb6sMI3Y5uI&list=RDCMUCupmOKDcuHZ_t1r-uys1eGQ&start_radio=1&rv=Pb6sMI3Y5uI&t=2',
    'https://www.youtube.com/embed/watch?v=XuiTkWL3IOM&list=RDCMUCRt_FEebiyPEjm6_Bk6vndA&start_radio=1&rv=XuiTkWL3IOM&t=2',
    'https://www.youtube.com/embed/watch?v=VWhEIqyNFx8&list=RDCMUCEHvaZ336u7TIsUQ2c6SAeQ&start_radio=1&rv=VWhEIqyNFx8&t=0',
    'https://www.youtube.com/embed/watch?v=RsIblKl1kNg&list=RDCMUC1GFfLv_emQUDUMpu8XDLdQ&start_radio=1&rv=RsIblKl1kNg&t=2'],
  [['English', 'https://www.youtube.com/playlist?list=PLa8IbBityehH3hlqQ86bHd9pFL9_TrhCQ'],
    ['Arabic', 'https://www.youtube.com/playlist?list=PLa8IbBityehGqiw-xae3i3O7SqEwup803'],
    ['Computer Science', 'https://www.youtube.com/playlist?list=PLCvvxMCAGP8lyop3JZSDk3eswFeI8SKxt'],
    ['Maths', 'https://www.youtube.com/playlist?list=PLsy0ZR3_3NhVyqkB1WhA9g0GQtV_jNOM3']]
);
new CreateMajor('Industrial',
  ['https://www.youtube.com/embed/watch?v=A7zCOOEBxhU&list=RDCMUCEHvaZ336u7TIsUQ2c6SAeQ&start_radio=1&rv=A7zCOOEBxhU&t=0',
    'https://www.youtube.com/embed/watch?v=XGrGaavKQUI&list=RDCMUCjVHqZ3b3qSOQPU-cYUnrkg&start_radio=1&rv=XGrGaavKQUI&t=2',
    'https://www.youtube.com/embed/watch?v=YvXTMs-MfrQ&list=RDCMUCGaFIObIzWA3Cg0BrB4HBAg&start_radio=1&rv=YvXTMs-MfrQ&t=1',
    'https://www.youtube.com/embed/watch?v=b9Ep-0GchTY&list=RDCMUC1XJWy7kVElm4tzHnZtGszg&start_radio=1&rv=b9Ep-0GchTY&t=0'],
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

const singleBtn=document.getElementById('singleBtn');
const multiBtn=document.getElementById('multiBtn');
const singleFrame=document.getElementById('singleFrame');
const multiFrame=document.getElementById('multiFrame');
function showMode(mode){
  const single=mode==='single';
  singleFrame.classList.toggle('hidden',!single);
  multiFrame.classList.toggle('hidden',single);
  singleBtn.classList.toggle('active',single);
  multiBtn.classList.toggle('active',!single);
}
singleBtn.addEventListener('click',()=>showMode('single'));
multiBtn.addEventListener('click',()=>showMode('multi'));

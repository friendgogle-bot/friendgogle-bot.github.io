"use strict";
const field=document.getElementById('book-search');
const cards=Array.from(document.querySelectorAll('#book-grid article'));
const counter=document.getElementById('search-count');
const noResults=document.getElementById('none');
if(field&&counter&&noResults){
  field.addEventListener('input',()=>{
    const query=field.value.trim().normalize('NFKC').toLocaleLowerCase();
    let found=0;
    for(const card of cards){
      const title=(card.dataset.title||'').normalize('NFKC').toLocaleLowerCase();
      const match=title.includes(query);
      card.classList.toggle('hidden',!match);
      if(match)found++;
    }
    counter.textContent=`目前顯示 ${found} 本`;
    noResults.classList.toggle('hidden',found!==0);
  });
}

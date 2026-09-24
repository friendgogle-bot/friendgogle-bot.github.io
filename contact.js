"use strict";
/* FormSubmit handles the POST on its own origin; never assert inbox delivery from frontend state. */
(()=>{
  const form=document.getElementById("contact-compose");
  const status=document.getElementById("contact-guidance");
  if(!form||!status)return;
  form.addEventListener("submit",event=>{
    const message=form.elements.namedItem("message");
    if(!message)return;
    const trimmed=message.value.trim();
    if(trimmed.length<3){
      event.preventDefault();
      message.setCustomValidity("請填寫至少三個非空白字元。");
      message.reportValidity();
      return;
    }
    message.setCustomValidity("");
    status.textContent="正在前往表單服務，可能需要完成反機器人驗證；此提示不是原澈信箱收件回執。";
  });
  const message=form.elements.namedItem("message");
  if(message)message.addEventListener("input",()=>message.setCustomValidity(""));
})();

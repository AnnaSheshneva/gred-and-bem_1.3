const callbackOpen = document.querySelector('.head__img-repair1120'); 
const callbackClose = document.querySelector('.callback__close'); 
 const callBack = document.querySelector('.callback__cont')

const cont = document.querySelector('.container');
const callbackOpenBut = document.querySelector('.head__cont_repair');
const checkstatus1120_Open = document.querySelector('.head__img-checkstatus-1120');
const checkstatus_Open = document.querySelector('.head__cont_checkstatus');
let menu = document.querySelector('.wind'); 
callbackOpen.onclick = function() {
  callBack.classList.toggle('openn');
    };
    callbackClose.onclick = function() {
    callBack.classList.remove('openn');
    }
    callbackOpenBut.onclick = function() {
        callBack.classList.toggle('openn');
          };
          callbackClose.onclick = function() {
          callBack.classList.remove('openn');
          }


    const callClose = document.querySelector('.call__close'); 
    const call = document.querySelector('.call__cont')
checkstatus1120_Open.onclick = function() {
    call.classList.toggle('openn');
      };
      callbackClose.onclick = function() {
        call.classList.remove('openn');
        
    }
    checkstatus_Open.onclick = function() {
        call.classList.toggle('openn');
          };
          callClose.onclick = function() {
          call.classList.remove('openn');
          }

         
         
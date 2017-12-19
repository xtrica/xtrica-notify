/*
 * xtrica-notify v1.0.1513665413 (https://xtrica.com)
 * Copyright 2017 (or 2150?) Xtrica
 * Licensed under MIT
 */
export default function(parent){this.element=document.createElement('span')
if(this.element){this.element.setAttribute('style','opacity:0;transition:opacity 300ms linear;-o-transition:opacity 300ms linear;-ms-transition:opacity 300ms linear;-moz-transition:opacity 300ms linear;-webkit-transition:opacity 300ms linear;')
if(!parent.appendChild(this.element)){document.body.appendChild(this.element)}}
this.remaining=0
this.timeout=null
this.notifyActive=!1
this.notify=function(html,classes,duration){let vm=this
return new Promise(function(resolve,reject){vm.notifyActive=!0
if(!!vm&&!!vm.timeout){clearTimeout(vm.timeout)}
if(!!vm&&!!vm.element){vm.element.style.opacity=1
vm.element.style.display='inline-block'
if(classes){vm.element.className=classes}
vm.element.innerHTML=html
vm.remaining=duration
vm.timeout=setTimeout(()=>{if(!!vm&&!!vm.element){vm.element.style.opacity=0
setTimeout(()=>{if(!!vm&&vm.element){vm.element.style.display='none'
vm.element.innerHTML=''
vm.notifyActive=!1}
resolve()},300)}else{resolve()}},parseInt(duration))}else{if(!!vm){vm.notifyActive=!1}
resolve()}})}
this.clear=()=>{let vm=this
return new Promise(function(resolve,reject){if(!!vm&&!!vm.timeout){clearTimeout(vm.timeout)}
if(!!vm&&!!vm.element){vm.element.style.opacity=0
setTimeout(()=>{resolve()},300)}else{resolve()}})}
this.cleanup=()=>{let vm=this
vm.clear().then(()=>{if(!!vm&&!!vm.element){vm.element.parentElement.removeChild(vm.element)
vm.element=null}})}}
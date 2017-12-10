/*
 * xtrica-notify v1.0.1512929300 (https://xtrica.com)
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
if(vm.timeout){clearTimeout(vm.timeout)}
if(vm.element){vm.element.style.opacity=1
vm.element.style.display='inline-block'
if(classes){vm.element.className=classes}
vm.element.innerHTML=html
vm.remaining=duration
vm.timeout=setTimeout(()=>{vm.element.style.opacity=0
setTimeout(()=>{vm.element.style.display='none'
vm.element.innerHTML=''
vm.notifyActive=!1
resolve()},300)},parseInt(duration))}else{vm.notifyActive=!1
resolve()}})}
this.clear=()=>{let vm=this
return new Promise(function(resolve,reject){if(vm.timeout){clearTimeout(vm.timeout)}
if(vm.element){vm.element.style.opacity=0
setTimeout(()=>{resolve()},300)}else{resolve()}})}
this.cleanup=()=>{let vm=this
vm.clear().then(()=>{if(vm.element){vm.element.parentElement.removeChild(vm.element)
vm.element=null}})}}
function onc_slimselect_tags(data){
    document.querySelector(data).parentNode.querySelector('[type~=search]').onkeyup=function(event){                                            
        if (event.keyCode === 13) {
            var opt=document.createElement('option');
            var vl=new Date().getTime();
            opt.value = vl;
            opt.innerHTML =event.target.value;
            opt.setAttribute('selected','selected')
            var slc=event.target.parentNode.parentNode.parentNode.parentNode.querySelector('select');
            slc.appendChild(opt);
            event.target.value='';
        }
    }
} 

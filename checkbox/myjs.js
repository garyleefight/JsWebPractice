var listLen = 9;

window.onload = function(){
    init();
    selectAll = document.getElementById('selectAll');
    unselectAll = document.getElementById('unselectAll');
    selectAll.onclick = function(){toggle(selectAll);}
    unselectAll.onclick = function(){inverse()};
    for(i=1;i<=listLen;i++){
        checkbox = document.getElementById('c' + i);
        checkbox.onclick = function(){
            checkStatus();
        }
    }
}

function init(){
    var container = document.getElementsByTagName('container')[0];
    for(i=1;i<=listLen;i++){
        wrapper = document.createElement('p');
        newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.className = 'checkbox';
        newCheckbox.id = 'c' + i;
        newLabel = document.createElement('label');
        newLabel.appendChild(newCheckbox);
        newLabel.appendChild(document.createTextNode('box'+i));
        wrapper.appendChild(newLabel);
        container.appendChild(wrapper);
    }
}

function checkStatus(){
    for(i=1;i <= listLen;i++){
        checkbox = document.getElementById('c'+i);
        if(!checkbox.checked){
            document.getElementById('selectAll').nextElementSibling.innerHTML = 'select All';
            document.getElementById('selectAll').checked = false;
            return;
        }
    }
    document.getElementById('selectAll').nextElementSibling.innerHTML = 'unselect All';
    document.getElementById('selectAll').checked = true;
}


function select(){
    for(i=1;i <= listLen;i++){
        checkbox = document.getElementById('c'+i);
        if(!checkbox.checked){
            checkbox.checked = true;
        }
    }
    checkStatus();
}

function unselect(){
    for(i=1;i <= listLen;i++){
        checkbox = document.getElementById('c'+i);
        if(checkbox.checked){
            checkbox.checked = false;
        }
    }
    checkStatus();
}   

function toggle(checkbox){
    if(checkbox.checked){
        select();
    }else{
        unselect();
    }
}

function inverse(){
    for(i=1;i<=listLen;i++){
        checkbox = document.getElementById('c'+i);
        checkbox.checked = !checkbox.checked;
    }
    checkStatus();
}



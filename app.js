// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friendsArray = [];


//Function that receives a string, validates and push to the friends array
const validateFriend = (name) => {
    const trimName = name.trim();
    const regex = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(n+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/
    return regex.test(trimName);
}
const addFriend = () => {
    const friendInput = document.getElementById('amigo');
    
    if(validateFriend(friendInput.value)){
        friendsArray.push(friendInput.value.trim());
        friendInput.value = '';
        renderList();
    }
    else{
        alert('Por favor, inserte un nombre valido')
        friendInput.value = '';
    }
};

const renderList = () => {
    const friendList = document.getElementById('listaAmigos');
    friendList.innerHTML = '';
    friendsArray.forEach((el,index)=>{
        const friend = document.createElement('li');
        friend.className = 'friendItem',
        friend.id = index;
        friend.innerHTML = `
        ${el} 
        <button id='update-${el}' class='friend-button' onclick='updateFriend(${index})'>📋</button>
        <button id='delete-${el}' class='friend-button' onclick='deleteFriend(${index})'>❌</button>  
        `;
        friendList.appendChild(friend);
    })
};

const deleteFriend = (index) => {
    friendsArray.splice(index, 1);
    renderList();
};

const updateArray=(index)=>{
    const updateInput = document.getElementById('inputUpdate');
    if(validateFriend(updateInput.value)){
        friendsArray[index] = updateInput.value;
        renderList();
    }else{
        alert('Por favor, inserte un nombre valido')
        updateInput.value = '';
    }
}

const updateFriend = (index) => {
    
    const listItem = document.getElementById(index);
    
    onlyOneUpdate();
    listItem.innerHTML = `
    <input type="text" id="inputUpdate" class="update-input" placeholder="Actualiza el nombre" required maxlength="15">
    <button class='update-button' onclick='updateArray(${index})'>✔</button>
    `
};

const onlyOneUpdate = () => {
    friendsArray.forEach((el)=>{
        const button = document.getElementById(`update-${el}`);
        button.remove();
    })
}


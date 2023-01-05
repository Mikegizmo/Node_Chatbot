const sendBtn = document.getElementById('sendBtn');
const textbox = document.getElementById('textbox');
const chatContainer = document.getElementById('chatContainer');

const user = {message: ''};

const arrayOfPossibleMessages = [
  {message:'hi', response:'ni hao'},
  {message:'thank you', response:'you\'re welcome'},
  {message:'how are you?', response:'I\'m fine'},
  {message:'what is your name?', response:'I\'m a chatbot'},
  {message:'goodbye', response:'see you later'}
]

const sendMessage = (userMessage) => {
  const messageElement = document.createElement('div');
  messageElement.style.textAlign = 'right';
  messageElement.style.margin = '10px';
  messageElement.style.color = 'navy';

  messageElement.innerHTML = 
    '<span> You: </span>' + '<span>' + userMessage + '</span>';
  chatContainer.appendChild(messageElement);
}

const chatbotResponse = (userMessage) => {
  let chatbotMessage = '';
  
  if (userMessage.length >= 5 || userMessage == 'hi') {
    const result = arrayOfPossibleMessages.filter(val => val.message.includes(userMessage.toLowerCase()));

    if (result.length > 0) {
      const response = result[0].response;
      chatbotMessage = response;
    } else {
      chatbotMessage = 'I\'m unable to decipher your input. Please send another message';
    }
  } else {
    chatbotMessage = 'Please send a different message';
  }

  const messageElement = document.createElement('div');
  messageElement.style.textAlign = 'left';
  messageElement.style.margin = '10px';

  messageElement.innerHTML = 
    '<span> Chatbot: </span>' + '<span>' + chatbotMessage + '</span>';
  setTimeout(() => {
    messageElement.animate([{easing:'ease-in', opacity:0}, {opacity:1}], {duration:1000});
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop =chatContainer.scrollHeight;
  }, 1500)
  
}

sendBtn.addEventListener('click', (e) => {
  const userMessage = textbox.value;
  console.log(userMessage);
  
  if (userMessage==''){
    alert('Please type in a message');
  } else {
    let userMessageText = userMessage.trim();
    user.message = userMessageText;
    textbox.value='';
    sendMessage(userMessageText);
    chatbotResponse(userMessageText);
  }
});
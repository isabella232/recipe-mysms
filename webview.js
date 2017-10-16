module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const elements = document.getElementsByClassName('unread');

  	let count = 0;
  	for(let i = 0; i < elements.length; i++) {
  		let count_line = parseInt(elements[i].innerText.replace(/[^0-9.]/g, ""));
  		if (count_line > 0) {
  			count++; // count 1 per channel with messages
  		}
  	}

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};

window.arenaCallback = () => {
    // Put your JavaScript in here!
    // This will run after Are.na’s API returns your data.
let imageBlocks = document.querySelectorAll('li.image-block')
let linkBlocks = document.querySelectorAll('li.link-block')
let videoBlocks = document.querySelectorAll('li.video-embed-block')

//Make the blocks react on click
imageBlocks.forEach((block) => {
    block.onclick = () => {
        block.classList.add('active');
    }
})

linkBlocks.forEach((block) => {
    block.onclick = () => {
        block.classList.add('active');
    }
})

videoBlocks.forEach((block) => {
    block.onclick = () => {
        block.classList.add('active');
    }
})
//Add or remove a class called active
}












// window.arenaCallback = () => {
//     // Put your JavaScript in here!
//     // This will run after Are.na’s API returns your data.
//  let imageBlocks = document.querySelectorAll('li.image-block')

//     imageBlocks.forEach((block) => {
//       //Make the blocks react on click
//          block.querySelector('figure').onclick = () => {
// 	      // Add a class called active
//          block.classList.add('active')
// 		}

// 	   //Remove a class called active
// 	   block.querySelector('aside').onclick = () => {
// 		  block.classList.remove(‘active’)
//         }
//  })

//  }



/*
window.addEventListener('click', (e) => {
	const element = document.querySelector(".active.image-block");
	if(e.target == element) {
		element.classList.remove(".active")
	}
})

*/

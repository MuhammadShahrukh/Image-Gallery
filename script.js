// creating imagesObject, it will select all the images from html
var imagesObject = document.querySelectorAll("#gallery>ul>li>img");
// this will create separate unordered lists for comments of each image
var commentUnorderedList= new Array();
// this is for total number of comments for each image
var numberOfComments = [];
// this is for total number of likes for each image
var numberOfLikes = [];



// creating a viewer in which we can see images in large size
var viewer = document.createElement("div");
// styling the viewer
viewer.style.width="1300px";
viewer.style.height="570px";
viewer.style.padding="10px";
viewer.style.backgroundColor="rgba(33,33,33,0.7)";
viewer.style.borderRadius="20px";
viewer.style.position="absolute";
viewer.style.top="30px";
viewer.style.left="20px";
viewer.style.visibility="hidden";


// attaching the viewer to the body
document.getElementById("body").appendChild(viewer);




// creating image to show in the viewer
var image = document.createElement("img");
// styling the image
image.setAttribute("src","_images/1.jpg");
image.style.width="990px";
image.style.height="570px";
image.style.borderTopLeftRadius="15px";
image.style.borderBottomLeftRadius="15px";

// attaching image to the viewer
viewer.appendChild(image);




// creating comment and like div to show in the viewer
var commentDiv = document.createElement("div");
var commentDiv;
// styling the commentbox
commentDiv.style.width="310px";
commentDiv.style.height="540px";
commentDiv.style.backgroundColor="#fff";
commentDiv.style.display="inline-block";
commentDiv.style.paddingBottom="30px";
commentDiv.style.borderTopRightRadius="15px";
commentDiv.style.borderBottomRightRadius="15px";
commentDiv.style.position="absolute";
commentDiv.style.top="10px";
commentDiv.style.right="10px";
commentDiv.style.overflow="auto";

// attaching commentbox to the viewer
viewer.appendChild(commentDiv);




// creating close button for the viewer
var closeButton = document.createElement("img");
closeButton.setAttribute("src","_images/cross2.png");
closeButton.style.position="absolute";
closeButton.style.top="20px";
closeButton.style.right="25px";
closeButton.style.cursor="pointer";


// attaching close button to the viewer
commentDiv.appendChild(closeButton);




// creating comment box
var commentBox = document.createElement("textarea");
// styling input
commentBox.style.resize="none";
commentBox.style.width="270px";
commentBox.style.height="25px";
commentBox.style.display="inline-block";
commentBox.style.margin="50px 0 0 20px";
commentBox.style.paddingTop="10px";

//attaching commentBox to the commentDiv
commentDiv.appendChild(commentBox);




// creating unordered list for commments
function allImagesCommentListSeparately() {
	for( var i=0; i<imagesObject.length; i++){
		commentUnorderedList[i] = document.createElement("ul");
		commentUnorderedList[i].setAttribute("id","image"+i);
		//number of comments will be zero in the start
		numberOfComments[i]=0;
		// number of likes will be zero in the start
		numberOfLikes[i]=0;
	}
}
// styling comments of the images
function stylingComments(){
	for(var i=0;i<commentUnorderedList.length;i++){
		for(var j=0;j<commentUnorderedList[i].children.length;j++){
			commentUnorderedList[i].children[j].style.backgroundColor="rgb(230,230,250)";
			commentUnorderedList[i].children[j].style.width="250px";
			commentUnorderedList[i].children[j].style.margin="0 20px";
			commentUnorderedList[i].children[j].style.padding="10px";
			commentUnorderedList[i].children[j].style.fontSize="13px";
			commentUnorderedList[i].children[j].style.border="1px solid rgb(220,220,250)";
		}
	}
}

function showNumberOfCommentsOnImage(i){
	var totalNumberOfComments = document.querySelectorAll("#gallery>ul>li>div>span.comments");
		totalNumberOfComments[i].innerText= numberOfComments[i]+" Comments";	
}



//======================================================================




// if user clicks on the image, the image will be
// open in large size in the viewer

imagesObject[0].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentDiv.appendChild(commentUnorderedList[0]);
};

imagesObject[1].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[1]);
};

imagesObject[2].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[2]);
};

imagesObject[3].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[3]);
};

imagesObject[4].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[4]);
};

imagesObject[5].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[5]);
};

imagesObject[6].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[6]);
};

imagesObject[7].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[7]);
};

imagesObject[8].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[8]);
};

imagesObject[9].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[9]);
};

imagesObject[10].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[10]);
};

imagesObject[11].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[11]);
};

imagesObject[12].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[12]);
};

imagesObject[13].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[13]);
};

imagesObject[14].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[14]);
};

imagesObject[15].onclick=function () {
	image.setAttribute("src",this.getAttribute("src"));	
	viewer.style.visibility="visible";
	// this condition will remove tha comments of other pictures from 
	// commentDiv 
	if (commentDiv.childNodes.length > 2) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=2;
			if (commentDiv.children[j]==commentUnorderedList[i]) {
				commentDiv.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}		
	}
	commentDiv.appendChild(commentUnorderedList[15]);
};

//=================================================================================

//if user click on the close button the viewer will hide
closeButton.onclick=function(){
	viewer.style.visibility="hidden";
}




// if user enter some comment in the commentBox and presses enter
commentBox.onkeypress=function(e){
	if (e.keyCode == 13) {
		e.preventDefault();
		if (commentBox.value.length == 0) {
			return;
		}
		else{
			for(var i=0; i<imagesObject.length; i++){
				if (image.getAttribute("src") == imagesObject[i].getAttribute("src")) {
					var li = document.createElement("li");
					li.innerText = commentBox.value;
					commentUnorderedList[i].appendChild(li);
					//this will increase tha number of comments for each image
					numberOfComments[i]++;
					//it will show total number of comments on each image
					showNumberOfCommentsOnImage(i);
				}
			}
			commentBox.value="";
			stylingComments();	
		}
	}	
}



// if user clicks on the like button below are the events 
// of each like button on each image
var likes = document.querySelectorAll("#gallery>ul>li>div>span.likes");

// By click like, the number of likes will be increase
likes[0].onclick=function(){
	this.innerText=(++numberOfLikes[0])+" Likes";
}
likes[1].onclick=function(){
	this.innerText=(++numberOfLikes[1])+" Likes";
}

likes[2].onclick=function(){
	this.innerText=(++numberOfLikes[2])+" Likes";
}
likes[3].onclick=function(){
	this.innerText=(++numberOfLikes[3])+" Likes";
}
likes[4].onclick=function(){
	this.innerText=(++numberOfLikes[4])+" Likes";
}
likes[5].onclick=function(){
	this.innerText=(++numberOfLikes[5])+" Likes";
}
likes[6].onclick=function(){
	this.innerText=(++numberOfLikes[6])+" Likes";
}
likes[7].onclick=function(){
	this.innerText=(++numberOfLikes[7])+" Likes";
}
likes[8].onclick=function(){
	this.innerText=(++numberOfLikes[8])+" Likes";
}
likes[9].onclick=function(){
	this.innerText=(++numberOfLikes[9])+" Likes";
}
likes[10].onclick=function(){
	this.innerText=(++numberOfLikes[10])+" Likes";
}
likes[11].onclick=function(){
	this.innerText=(++numberOfLikes[11])+" Likes";
}
likes[12].onclick=function(){
	this.innerText=(++numberOfLikes[12])+" Likes";
}
likes[13].onclick=function(){
	this.innerText=(++numberOfLikes[13])+" Likes";
}
likes[14].onclick=function(){
	this.innerText=(++numberOfLikes[14])+" Likes";
}
likes[15].onclick=function(){
	this.innerText=(++numberOfLikes[15])+" Likes";
}



// if user clicks on the comment button below are the events 
// of each comment button on each image
var commentButton = document.querySelectorAll("#gallery>ul>li>div>span.comments");

// creating a comment viewer for each image
var commentViewer = document.createElement("div");

commentViewer.style.width="310px";
commentViewer.style.height="400px";
commentViewer.style.padding="10px";
commentViewer.style.backgroundColor="rgba(33,33,33,0.7)";
commentViewer.style.borderRadius="20px";
commentViewer.style.position="absolute";
commentViewer.style.top="150px";
commentViewer.style.left="520px";
commentViewer.style.visibility="hidden";

// attaching commentViewer to the body
document.getElementById("body").appendChild(commentViewer);

//creating comment panel inside the commentViewer
var commentPanel = document.createElement("div");

commentPanel.style.width="310px";
commentPanel.style.height="370px";
commentPanel.style.paddingBottom="30px";
commentPanel.style.backgroundColor="#fff";
commentPanel.style.borderRadius="10px";
commentPanel.style.overflow="auto";

// attaching comment panel to the commentViewer
commentViewer.appendChild(commentPanel);


var closeButtonForCommentPanel = document.createElement("img");
closeButtonForCommentPanel.setAttribute("src","_images/cross2.png");
closeButtonForCommentPanel.style.cursor="pointer";
//closeButtonForCommentPanel.style.position="absolute";
//closeButtonForCommentPanel.style.top="30px";
//closeButtonForCommentPanel.style.right="30px";
closeButtonForCommentPanel.style.margin="20px 0 20px 270px";


// now adding close image to the commen panel
commentPanel.appendChild(closeButtonForCommentPanel);

// if user clicks on closeButtonForCommentPanel, it will hide
closeButtonForCommentPanel.onclick=function(){
	commentViewer.style.visibility="hidden";
}

// now adding commentBox to this comment panel
//commentPanel.appendChild(commentBox);



// creating events for each comment button to see 
// the comments of each image in comment viewer
commentButton[0].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[0]);
}
commentButton[1].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[1]);
}
commentButton[2].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[2]);
}
commentButton[3].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[3]);
}
commentButton[4].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[4]);
}
commentButton[5].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[5]);
}
commentButton[6].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[6]);
}
commentButton[7].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[7]);
}
commentButton[8].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[8]);
}
commentButton[9].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[9]);
}
commentButton[10].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[10]);
}
commentButton[11].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[11]);
}
commentButton[12].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[12]);
}
commentButton[13].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[13]);
}
commentButton[14].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[14]);
}
commentButton[15].onclick=function(){
	commentViewer.style.visibility="visible";
	if (commentPanel.childNodes.length > 1) {
		for (var i=0; i<commentUnorderedList.length; i++) {
			var j=1;
			if (commentPanel.children[j]==commentUnorderedList[i]) {
				commentPanel.removeChild(commentUnorderedList[i]);	
			}
			j++;
		}
	}
	commentPanel.appendChild(commentUnorderedList[15]);
}

window.onload=function(){
	allImagesCommentListSeparately();
};







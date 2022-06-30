document.addEventListener("DOMContentLoaded", function(){
	const menuBtn = document.querySelector('.sfm-navicon-button');
	const xBtn = document.querySelector('.sfm-sidebar-close');

	function opacityOnChange () {
		xBtn.style.opacity = 1;
	}
	function opacityOffChange () {
		xBtn.style.opacity = 0;
	}

	menuBtn.addEventListener('click',opacityOnChange);
	xBtn.addEventListener('click',opacityOffChange);
});


// document.querySelector("#simul").addEventListener('load', function () {
//     console.log('loaded');
//     let mainMode;
//     let subMode;
//     let jsonObject;
//     let selectData;
//     let inputIdx = 0;
//     let imageRatio;

//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     ctx.globalCompositeOperation = "source-over";

//     // 1. Get Data
//     const xhr = new XMLHttpRequest();

//     xhr.onload = function () {
//         const responseObject = JSON.parse(xhr.responseText);

//         jsonObject = [...responseObject.data];
//         selectData = jsonObject[0];
//         mainMode = jsonObject[0].title;
//         subMode = jsonObject[0].subtitle;

//         mainDepth(jsonObject);

//         subDepth(mainMode, jsonObject);

//         // inputReset(subMode, jsonObject);

//         canvsReset();
//     };

//     xhr.open('GET', './wp-content/themes/kallyas-child/js/data.json', true);
//     xhr.send(null);

//     // main depth 만들기
//     function mainDepth(jsonObject) {
//         // console.log("act mainDepth");
//         let newContent = "<ul>";
//         let beforeTitle;
//         let newTitle;
//         for (let i = 0; i < jsonObject.length; i++) {
//             newTitle = jsonObject[i].title;
//             if (newTitle == beforeTitle) {
//                 continue;
//             } else if (newTitle != beforeTitle) {
//                 newContent += `<li class="title"><a href="#">${newTitle}</a></li>`;
//                 beforeTitle = newTitle;
//             }
//         }

//         newContent += "</ul>";

//         const simulNav = document.querySelector('#simul_nav');
//         simulNav.innerHTML = newContent;

//         mainAddHandle();
//     }

//     // sub depth 만들기
//     function subDepth(mainMode, jsonObject) {

//         let newContent = "<ul>";
//         for (let i = 0; i < jsonObject.length; i++) {
//             if (jsonObject[i].title != mainMode) {
//                 continue;
//             } else if (jsonObject[i].title == mainMode) {
//                 newContent += `<li><a href="#">${jsonObject[i].subtitle}</a></li>`;
//             }
//         }

//         newContent += "</ul>";

//         const simulSubNav = document.querySelector('#simul_sub_nav');
//         simulSubNav.innerHTML = newContent;

//         subMode = document.querySelector('#simul_sub_nav ul li a').textContent;

//         inputReset(subMode, jsonObject);
//     }

//     // form 만들기
//     function formSet(selectData) {

//         const imageForm = document.querySelector('#image_form');

//         let newContent = "<form>";

//         for (let i = 0; i < selectData.points.length; i++) {
//             newContent += `<p><label for="file${i + 1}">${i + 1} 번 파일</label><input type="file" name="file${i + 1}" id="file${i + 1}" accept="image/*"/></p>`;
//         }

//         newContent += "</form>"

//         imageForm.innerHTML = newContent;

//         inputAddHandle();
//     }

//     function inputReset(subMode, jsonObject) {
//         // console.log("act inputReset");

//         for (let i = 0; i < jsonObject.length; i++) {
//             if (jsonObject[i].subtitle != subMode) {
//                 continue;
//             } else {
//                 selectData = jsonObject[i];

//             }
//         }
//         formSet(selectData);
//         subAddHandle();
//     }

//     // 3. Function

//     // 1depth btns
//     function mainHandle() {

//         if (mainMode == this.textContent) {
//             return false;
//         }

//         mainMode = this.textContent;

//         subDepth(mainMode, jsonObject);
//         canvsReset();
//         subAddHandle();
//     }

//     // 2depth btns
//     function subHandle() {
//         if (subMode == this.textContent) {
//             return false;
//         }
//         // console.log("act subHandle");
//         subMode = this.textContent;
//         canvsReset();
//         inputReset(subMode, jsonObject);
//     }

//     function canvsReset() {

//         for (let i = 0; i < jsonObject.length; i++) {
//             if (mainMode != jsonObject[i].title) {
//                 continue;
//             } else if (mainMode == jsonObject[i].title) {
//                 if (subMode != jsonObject[i].subtitle) {
//                     continue;
//                 } else if (subMode == jsonObject[i].subtitle) {
//                     src = `./wp-content/uploads/images/${jsonObject[i].src}.jpg`;

//                     selectData = jsonObject[i];
//                 }
//             }
//         }

//         const newImage = new Image();
//         newImage.src = `./wp-content/uploads/images/${selectData.src}.jpg`;

//         newImage.onload = () => {
//             const canvasMaxwidth = document.querySelector('#canvas_wrap').clientWidth;
//             const canvasMaxHeight = 400;

//             const width = newImage.width > newImage.height ? canvasMaxwidth : (newImage.width * canvasMaxHeight) / newImage.height;
//             const height = newImage.width > newImage.height ? (newImage.height * canvasMaxwidth) / newImage.width : canvasMaxHeight;

//             canvas.width = width;
//             canvas.height = height;

//             ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);

//             imageRatio = newImage.width / canvas.width;

//             imageView();

//         }
//     }

//     function inputHandle() {

//         inputIdx = findIndex(this.parentElement);

//         const fileList = this.files;
//         const reader = new FileReader();
//         reader.readAsDataURL(fileList[0]);

//         reader.onload = function () {
//             const newImage = new Image();
//             newImage.src = reader.result;

//             newImage.onload = () => {

//                 switch (selectData.draw) {
//                     case "drawImage":
//                         const canvasX = selectData.points[inputIdx].x / imageRatio;
//                         const canvasY = selectData.points[inputIdx].y / imageRatio;
//                         const canvasWidth = selectData.points[inputIdx].width / imageRatio;
//                         const canvasHeight = selectData.points[inputIdx].height / imageRatio;
//                         ctx.drawImage(newImage, canvasX, canvasY, canvasWidth, canvasHeight);
//                         imageView();
//                         break;
//                     case "fill":
//                         const points = selectData.points[inputIdx].point;
//                         ctx.beginPath();
//                         ctx.moveTo(points[0][0] / imageRatio, points[0][1] / imageRatio);
//                         for (let i = 1; i < points.length; i++) {
//                             ctx.lineTo(points[i][0] / imageRatio, points[i][1] / imageRatio);
//                         }
//                         ctx.closePath();
//                         const pattern = ctx.createPattern(newImage, "repeat");
//                         ctx.fillStyle = pattern;
//                         ctx.fill();
//                         imageView();
//                         break;
//                 }
//             }
//         }
//     }

//     function imageView() {
//         const dataURI = canvas.toDataURL("image/jpeg");
//         document.querySelector(`#preview`).src = dataURI;
//     }

//     function findIndex(el) {
//         // console.log("act index");
//         let preNode = el.previousElementSibling;
//         let index = 0;
//         while (preNode != null) {
//             preNode = preNode.previousElementSibling;
//             index += 1;
//         }
//         return index;
//     }

//     // 5. add Event
//     function mainAddHandle() {
//         // console.log("act mainAddHandle");
//         const btns = document.querySelectorAll('#simul_nav a');
//         for (let i = 0; i < btns.length; i++) {
//             btns[i].addEventListener('click', mainHandle);
//         }
//     }

//     function subAddHandle() {
//         // console.log("act subAddHandle");
//         const btns = document.querySelectorAll('#simul_sub_nav a');
//         for (let i = 0; i < btns.length; i++) {
//             btns[i].addEventListener('click', subHandle);
//         }
//     }

//     function inputAddHandle() {
//         // console.log("act inputAddHandle");
//         const inputs = document.querySelectorAll('#img_input form input');
//         for (let i = 0; i < inputs.length; i++) {
//             inputs[i].addEventListener('change', inputHandle);
//         }
//     }

// });
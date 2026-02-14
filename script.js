let eventsArray = [];
let input = document.getElementById("input");
let inputButton = document.getElementById("inputButton");
let firstFlag = document.getElementById("firstFlag");
let secondFlag = document.getElementById("secondFlag");
let thirdFlag = document.getElementById("thirdFlag");
let oneNoteOption = document.getElementById("oneNoteOption");
let twoNoteOption = document.getElementById("twoNoteOption");
let threeNoteOption = document.getElementById("threeNoteOption");
let chooseImportance = document.getElementById("chooseImportance");
let chooseLevel = document.getElementById("chooseLevel");
let chooseImg = document.getElementById("chooseImg");
let levelOrdering = {HARD: 0 , NORMAL: 1, EASY: 2};
let chooseDate = document.getElementById("chooseDate");
let chooseEdit = document.getElementById("edit");
let chooseSetting = document.getElementById("chooseSetting");
let chooseBackground = document.getElementById("chooseBackground");
let chooseBackgroundType = document.getElementById("chooseBackgroundType");
let chooseBackgroundImg = document.getElementById("chooseBackgroundImg");
let taskOptions = document.getElementById("taskOptions");
let taskOptionsTwo = document.getElementById("taskOptionsTwo");
let noteOptions = document.getElementById("noteOptions");
let typeOptions = document.getElementById("typeOptions");
let theNote = document.getElementById("theNote");
let noteInput = document.getElementById("noteInput");
let titleInput = document.getElementById("titleInput");
let titleOfNote = document.getElementById("titleOfNote");
let contentOfNote = document.getElementById("contentOfNote");
let writeNote = document.getElementById("writeNote");
let searchOptions = document.getElementById("searchOptions");
let orderingOptions = document.getElementById("orderingOptions");
let searchDateInput = document.getElementById("searchDateInput");
let theSearchDateInput = document.getElementById("theSearchDateInput");
let todayDate = makeTodayDate();
let theSearchDate = "";
let theSearchType = "";
let dateButton = document.getElementById("dateButton");
let dayInput = document.getElementById("dayInput");
let monthInput = document.getElementById("monthInput");
let yearInput = document.getElementById("yearInput");
let taskPlace = document.getElementById("tasksPlace");
let newTask = {
  name:"",
  flagColor:"#cccccc",
  flagType:"far fa-flag",
  flagOrder:3,
  dateIconColor:"#cccccc",
  imgSrc:"Imgs/7373647_3644225.jpg",
  createDate : "",
  dateValue:"",
  seDate:"",
  dayValue:"",
  monthValue:"",
  yearValue:"",
  levelName:"EASY",
  levelId:"easyLevel",
  circleBackground:"white",
  noteTitle: "",
  noteContent: "",
  noteIcon: "",
  theType : "",
  theTypeIcon: "",
  taskOpacity:"1",
};
let specificElement;
let specificIcon;
let specificTask;
let specificRenameTask;
let backgroundColor;
let backgroundImg;
if(localStorage.backgroundImg != null){
  backgroundImg = localStorage.backgroundImg;
}
if(localStorage.theBackground != null){
  backgroundColor = localStorage.theBackground;
}else{
  backgroundColor = "rgb(126 138 255)";
}
let mood = "normal";
//make width for them
firstFlag.style.width = chooseImportance.getBoundingClientRect().width/3 + "px";
secondFlag.style.width = chooseImportance.getBoundingClientRect().width/3 + "px";
thirdFlag.style.width = chooseImportance.getBoundingClientRect().width/3 + "px";
// run the time of hidden and show
document.addEventListener("click", function(event){
  if("flagIcon" != event.target.id){
    anime({
      targets: chooseImportance,
      translateY: -80
    });
  }

  if("levelIcon" != event.target.className){
    anime({
      targets: chooseLevel,
      translateY: -80
    });
  }

  if("imgIcon" != event.target.id){
    anime({
      targets: chooseImg,
      translateY: -80
    });
  }
  
  if("orderingIcon" != event.target.id){
    anime({
      targets: orderingOptions,
      translateY: -80
    });
  }

  if("far fa-calendar-alt" != event.target.className){
    if("thisInput" != event.target.className){
      if(mood == "normal"){
        dateButton.style.visibility = "hidden"; 
      }
      anime({
        targets: chooseDate,
        translateY: -330
      });
    }
  }
  
  if("fas fa-paperclip" != event.target.className){
    anime({
      targets: taskOptions,
      translateY: -80
    });
  }

  if("fas fa-file-signature" != event.target.className){
    anime({
      targets: taskOptionsTwo,
      translateY: -80
    });
  }
  
  if("fas fa-wrench" != event.target.className){
    anime({
      targets: chooseEdit,
      translateY: -80
    });
  }

  if("searchIcon" != event.target.className){
    anime({
      targets: searchOptions,
      translateY: -80
    });
  }
  
  if("fas fa-sticky-note" != event.target.className){
    anime({
      targets: noteOptions,
      translateY: -80
    });
  }
  if("far fa-sticky-note this" != event.target.className){
    if(event.target.id != "noteInput" && event.target.id != "titleInput"){
      anime({
        targets: writeNote,
        translateY: -330
      });
    }
  }
  if("far fa-eye" != event.target.className){
    anime({
      targets: theNote,
       easing: 'easeOutExpo',
      translateY: -440
    });
  }

  if("fas fa-hashtag" != event.target.className){
    anime({
      targets: typeOptions,
      translateY: -80
    });
  }
  if("far fa-calendar-alt search" != event.target.className){
    if("theSearchDateInput" != event.target.id){
      anime({
        targets: searchDateInput,
        translateY: -80
      });
    }
  }
  if("fas fa-cog setting" != event.target.className){
    chooseSetting.style.display = "none";
  }
  if("backgroundIcon" != event.target.id){
    anime({
      targets: chooseBackground,
      translateY: -80
    });
  }

  if("backgroundIcon" != event.target.id){
    anime({
      targets: chooseBackgroundType,
      translateY: -80
    });
  }

  if("backgroundImgIcon" != event.target.id){
    anime({
      targets: chooseBackgroundImg,
      translateY: -80
    });
  }
  
});
window.onload=function(){
  document.getElementById("title").click();
};
//make storage for tasks
let storageOfTasks;
if(localStorage.tasks != null){
  storageOfTasks = JSON.parse(localStorage.tasks);
}else{
  storageOfTasks = [];
}

//calendar 
function saveArrayOfEvents() {
  eventsArray = storageOfTasks.filter(checkDate);
  localStorage.setItem('dataArray', JSON.stringify(eventsArray));
}
function checkDate(newTask){
  return newTask.dateValue != "";
}

//edit the form of input when focus on it
inputButton.style.display = "block";

function changeFormOfInput(){
  inputButton.style.display = "block";
  input.style.backgroundColor = "white";
  input.style.color = "black";
  input.style.paddingLeft = "10px";
  input.placeholder = "";
  input.style.opacity = "1";
}

function removeInputStyle(){
  inputButton.style.display = "block";
  input.style.backgroundColor = "black";
  input.style.color = "white";
  input.placeholder = " Add Task";
  input.style.opacity = "20%";
}
//add new task
function addNewTask(){
  if(input.value != ""){
    if(mood == "normal"){
      newTask.name = input.value;
      newTask.createDate = Date.now();
      let lowerInput = input.value.toLowerCase();
      if(lowerInput.includes("easy")){
         newTask.levelName = "EASY";
         newTask.levelId = "easyLevel";
         newTask.name = newTask.name.replace(/easy/i, "");
      }
      if(lowerInput.includes("normal")){
         newTask.levelName = "NORMAL";
         newTask.levelId = "normalLevel";
         newTask.name = newTask.name.replace(/normal/i, "");
      }
      if(lowerInput.includes("hard")){
         newTask.levelName = "HARD";
         newTask.levelId = "hardLevel";
         newTask.name = newTask.name.replace(/hard/i, "");
      }
      if(lowerInput.includes("not-important")){
         newTask.flagColor = "#63E6BE";
         newTask.flagType = "fas fa-flag";
         newTask.flagOrder = 2;
         lowerInput = lowerInput.replace("not-important", "");
         newTask.name = newTask.name.replace(/not-important/i, "");
      }
      if(lowerInput.includes("may-important")){
         newTask.flagColor = "#FFD43B";
         newTask.flagType = "fas fa-flag";
         newTask.flagOrder = 1;
         lowerInput = lowerInput.replace("may-important", "");
         newTask.name = newTask.name.replace(/may-important/i, "");
      }
      if(lowerInput.includes("important")){
         newTask.flagColor = "hsl(336deg 82.95% 53.81%)";
         newTask.flagType = "fas fa-flag";
         newTask.flagOrder = 0;
         newTask.name = newTask.name.replace(/important/i, "");
      }
      if(lowerInput.includes("img1")){
        newTask.imgSrc = "Imgs/27996422_7384905.jpg";
        newTask.name = newTask.name.replace(/img1/i, "");
      }
      if(lowerInput.includes("img2")){
        newTask.imgSrc = "Imgs/29874943_GST CAM 939-13.jpg";
        newTask.name = newTask.name.replace(/img2/i, "");
      }
      if(lowerInput.includes("img3")){
        newTask.imgSrc = "Imgs/7373647_3644225.jpg";
        newTask.name = newTask.name.replace(/img3/i, "");
      }
      if(lowerInput.includes("img4")){
        newTask.imgSrc = "Imgs/8134870_3818146.jpg";
        newTask.name = newTask.name.replace(/img4/i, "");
      }
      if(lowerInput.includes("today")){
        newTask.dateValue = todayDate.fullDate;
        newTask.dayValue = todayDate.day;
        newTask.monthValue = todayDate.month;
        newTask.yearValue = todayDate.year;
        newTask.seDate = todayDate.searchDate;
        newTask.dateIconColor = "#C499F3";
        newTask.name = newTask.name.replace(/today/i, "");
      }
      if(newTask.name.trim() != ""){
        storageOfTasks.push(newTask);
        localStorage.tasks = JSON.stringify(storageOfTasks);
        input.value = "";
        showTasks();
           newTask = {
          name:"",
          flagColor:"#cccccc",
          flagType:"far fa-flag",
          flagOrder:3,
          dateIconColor:"#cccccc",
          imgSrc:"Imgs/7373647_3644225.jpg",
          createDate : "",
          dateValue:"",
          seDate:"",
          dayValue:"",
          monthValue:"",
          yearValue:"",
          levelName:"EASY",
          levelId:"easyLevel",
          circleBackground:"white",
          noteTitle: "",
          noteContent: "",
          noteIcon: "",
          theType : "",
          theTypeIcon: "",
          taskOpacity:"1",
        };
        saveArrayOfEvents();
      }else{
        input.value = "";
        alert("please write name of task");
        newTask = {
          name:"",
          flagColor:"#cccccc",
          flagType:"far fa-flag",
          flagOrder:3,
          dateIconColor:"#cccccc",
          imgSrc:"Imgs/7373647_3644225.jpg",
          createDate : "",
          dateValue:"",
          seDate:"",
          dayValue:"",
          monthValue:"",
          yearValue:"",
          levelName:"EASY",
          levelId:"easyLevel",
          circleBackground:"white",
          noteTitle: "",
          noteContent: "",
          noteIcon: "",
          theType : "",
          theTypeIcon: "",
          taskOpacity:"1",
        };
      }
    }else{
      storageOfTasks[specificRenameTask].name = input.value;
      showTasks();
      dateButton.style.visibility = "hidden";
      inputButton.innerHTML = `<h3>Add</h3>`;
      dateButton.innerHTML = `<h2>SAVE</h2>`;
      mood = "normal";
      localStorage.tasks = JSON.stringify(storageOfTasks);
      input.value = "";
      saveArrayOfEvents();
    }
  }
}

// flag of task 
function changeFlag(i){
  specificTask = i;
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    chooseImportance.style.display = "block";
    anime({
      targets: chooseImportance,
      translateY: 15
    });
  }
}
function greenColorOfFlag (){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].flagColor = "#63E6BE";
    storageOfTasks[specificTask].flagType = "fas fa-flag";
    storageOfTasks[specificTask].flagOrder = 2;
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}
function yellowColorOfFlag (){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].flagColor = "#FFD43B";
    storageOfTasks[specificTask].flagType = "fas fa-flag";
    storageOfTasks[specificTask].flagOrder = 1;
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}
function redColorOfFlag (){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].flagColor = "hsl(336deg 82.95% 53.81%)";
    storageOfTasks[specificTask].flagType = "fas fa-flag";
    storageOfTasks[specificTask].flagOrder = 0;
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}
function normalColorOfFlag (){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].flagColor = "#cccccc";
    storageOfTasks[specificTask].flagType = "far fa-flag";
    storageOfTasks[specificTask].flagOrder = 3;
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}

//change the hard level of task
function changeLevel(i) {
  specificTask = i;
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    chooseLevel.style.display = "block";
    anime({
      targets: chooseLevel,
      translateY: 15
    });
  }
}
function changeToEasy(){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].levelId = "easyLevel";
    storageOfTasks[specificTask].levelName = "EASY";
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}
function changeToNormal(){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].levelId = "normalLevel";
    storageOfTasks[specificTask].levelName = "NORMAL";
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}
function changeToHard(){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].levelId = "hardLevel";
    storageOfTasks[specificTask].levelName = "HARD";
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}

//change image of task 
function changeImage(i) {
  specificTask = i;
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    chooseImg.style.display = "block";
    anime({
      targets: chooseImg,
      translateY: 15
    });
  }
}
function changeToImgOne(){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].imgSrc = "Imgs/27996422_7384905.jpg";
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}

function changeToImgTwo(){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].imgSrc = "Imgs/29874943_GST.jpg";
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}

function changeToImgThree(){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].imgSrc = "Imgs/7373647_3644225.jpg";
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}

function changeToImgFourth(){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].imgSrc = "Imgs/8134870_3818146.jpg";
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
  }
}
//change date of task
function changeDate(i){
  specificTask = i;
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    if(mood == "normal"){
      chooseDate.style.display = "block";      
      dateButton.style.visibility = "visible";      
      anime({
        targets: chooseDate,
        easing: 'easeOutExpo',
        translateY: 100
      });
    }
  }
}

function removeDate(){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].dateIconColor = "#cccccc";
    storageOfTasks[specificTask].dateValue = "";
    storageOfTasks[specificTask].dayValue = "";
    storageOfTasks[specificTask].monthValue = "";
    storageOfTasks[specificTask].yearValue = "";
    storageOfTasks[specificTask].seDate = "";
    showTasks();
    localStorage.tasks = JSON.stringify(storageOfTasks);
    saveArrayOfEvents();
  }
}

function saveDate(){
  if(mood == "normal"){
    if(storageOfTasks[specificTask].taskOpacity == "1"){
      if(dayInput.value < 32 && dayInput.value.length < 3 && monthInput.value < 13 && monthInput.value.length < 3 && yearInput.value > 2023 && yearInput.value.length < 5 ){
        storageOfTasks[specificTask].dateIconColor = "#C499F3";
        storageOfTasks[specificTask].dateValue = dayInput.value.trim().replace(/\s/g, '') + "/" + monthInput.value.trim().replace(/\s/g, '') + "/" + yearInput.value.trim().replace(/\s/g, '');
        storageOfTasks[specificTask].seDate = makeSearchDateValue(dayInput.value , monthInput.value , yearInput.value);
        showTasks();
        storageOfTasks[specificTask].dayValue = dayInput.value;
        storageOfTasks[specificTask].monthValue = monthInput.value;
        storageOfTasks[specificTask].yearValue = yearInput.value;
        dayInput.value = "";
        monthInput.value = "";
        yearInput.value = "";
        localStorage.tasks = JSON.stringify(storageOfTasks);
        saveArrayOfEvents();
      }else if(dayInput.value == "" && monthInput.value == "" && yearInput.value == ""){
        dayInput.value = "";
        monthInput.value = "";
        yearInput.value = "";
        alert("please, write a date");
      }else{
        dayInput.value = "";
        monthInput.value = "";
        yearInput.value = "";
        alert("please, write logic information");
      }
    }else {
      dayInput.value = "";
      monthInput.value = "";
      yearInput.value = "";
    }
  }else {
    input.blur();
    inputButton.innerHTML = `<h3>Add</h3>`;
    dateButton.innerHTML = `<h2>SAVE</h2>`;
    dateButton.style.visibility = "hidden";
    mood = "normal";
    input.value = "";
  }
}
// edit in your task
function editTheTask(){
  chooseEdit.style.display = "block";    
  anime({
    targets: chooseEdit,
    translateY: 20
  });
}

//delete the task
function deleteTask(){
  storageOfTasks.splice(specificTask, 1);
  showTasks();
  localStorage.tasks = JSON.stringify(storageOfTasks);
  saveArrayOfEvents();
}
//rename
function renameTask(){
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    specificRenameTask = specificTask;
    input.value = storageOfTasks[specificRenameTask].name;
    mood = "rename";
    inputButton.innerHTML = `<h3>Done</h3>`;
    dateButton.innerHTML = `<h2>CANCEL</h2>`;
    dateButton.style.visibility = "visible";
    input.focus();
  }
}

// check your task 
function makeCheck(i){
  specificTask = i;
  if(storageOfTasks[specificTask].taskOpacity == "1"){
    storageOfTasks[specificTask].taskOpacity = "0.5";
    storageOfTasks[specificTask].circleBackground = "grey";
  }else{
    storageOfTasks[specificTask].circleBackground = "white";
    storageOfTasks[specificTask].taskOpacity = "1";
  }
  showTasks();
  localStorage.tasks = JSON.stringify(storageOfTasks);
}

//setting
function showSetting(){
  chooseSetting.style.display = "block"; 
}
function printPage (){
  chooseSetting.style.display = "none";
  print();
}

function deleteAllTasks(){
  storageOfTasks.splice(0 , storageOfTasks.length);
  showTasks();
  localStorage.removeItem("tasks");
  saveArrayOfEvents();
}
function changeBackground(){
  chooseBackground.style.display = "block";    
  anime({
    targets: chooseBackground,
    translateY: 20
  });
}
function changeBackgroundColor(inputBackgroundColor){
  backgroundColor = inputBackgroundColor;
  document.body.style.backgroundImage = "url()";
  localStorage.theBackground = inputBackgroundColor;
  document.body.style.backgroundColor = inputBackgroundColor;
  localStorage.backgroundImg = null;
}

function changeBackgroundType(){
  chooseBackgroundType.style.display = "block";    
  anime({
    targets: chooseBackgroundType,
    translateY: 20
  });
}

function changeBackgroundImg(){
  chooseBackgroundImg.style.display = "block";    
  anime({
    targets: chooseBackgroundImg,
    translateY: 20
  });
}

function changeToImg(Theimg) {
  backgroundImg = Theimg;
  localStorage.backgroundImg = Theimg;
  document.body.style.backgroundImage = "url(" + Theimg + ")";
}

//more task options 
 function chooseMoreTaskOptions(i){
   specificTask = i;
   taskOptions.style.display = "block";    
   anime({
     targets: taskOptions,
     translateY: 20
   });
 }
 function showTaskOptionsTwo(){
   switch(storageOfTasks[specificTask].taskOpacity){
     case "1":
       taskOptionsTwo.style.display = "block";    
        anime({
          targets: taskOptionsTwo,
          translateY: 20
        });
        break;
   }
 }
//note of your task
function showNoteOptions(){
  noteOptions.style.display = "block";    
  anime({
    targets: noteOptions,
    translateY: 20
  });
}

function taskNote(){
  writeNote.style.display = "block";
  anime({
    targets: writeNote,
    easing: 'easeOutExpo',
    translateY: 100
  });
}

function deleteNote(){
  storageOfTasks[specificTask].noteTitle = "";
  storageOfTasks[specificTask].noteContent = "";
  storageOfTasks[specificTask].noteIcon = "";
  showTasks();
  localStorage.tasks = JSON.stringify(storageOfTasks);
}

function saveNote() {
  if(noteInput.value && titleInput.value != "" && titleInput.value.length < 30){
          storageOfTasks[specificTask].noteTitle = titleInput.value;
          storageOfTasks[specificTask].noteContent = noteInput.value;
          storageOfTasks[specificTask].noteIcon = "far fa-sticky-note";
          showTasks();
          localStorage.tasks = JSON.stringify(storageOfTasks);
          noteInput.value = "";
          titleInput.value = "";
        }else{
            alert("please, write right information")
        }
  }

function showMyNote(){
  switch(storageOfTasks[specificTask].noteIcon){
    case "far fa-sticky-note":
      theNote.style.display = "block";
      titleOfNote.innerHTML = storageOfTasks[specificTask].noteTitle;
      contentOfNote.innerHTML = storageOfTasks[specificTask].noteContent;
      anime({
        targets: theNote,
        easing: 'easeOutExpo',
        translateY: 100
      });
      break;
  }
}

function showTypeOptions(){
  typeOptions.style.display = "block";
  anime({
    targets: typeOptions,
    translateY:20
  });
}

function writeType(){
  let theType = prompt("write type of your task").trim().replace(/\s/g, '');;
  switch(theType){
    case "":
      alert("please, write a type");
      break;
    default:
      switch(theType.charAt(0)){
        case "#":
          storageOfTasks[specificTask].theType = theType;
          storageOfTasks[specificTask].theTypeIcon = "fas fa-hashtag";
          showTasks();
          localStorage.tasks = JSON.stringify(storageOfTasks);
          break;
        default:
          alert("write a type with #")
      }
  }
}
function deleteType(){
  storageOfTasks[specificTask].theType = "";
  storageOfTasks[specificTask].theTypeIcon = "";
  showTasks();
  localStorage.tasks = JSON.stringify(storageOfTasks);
}

function showSearchOptions (){
  searchOptions.style.display = "block";
  anime({
    targets: searchOptions,
    translateY:20
  });
}

function searchAboutType(){
  let theTypeOfSearch = prompt("write type of your task").trim().replace(/\s/g, '');
  switch(theTypeOfSearch){
    case "" :
      alert("please, write a type");
      break;
    default:
      switch(theTypeOfSearch.charAt(0)){
        case "#":
          theSearchType = theTypeOfSearch;
          showTasks();
          break;
        default:
          alert("write a type with #")
      }
  }
}

function showDateInput(){
  searchDateInput.style.display = "block";
  anime({
    targets: searchDateInput,
    translateY:20
  });
}

function makeSearchDateValue(theDay , theMonth , theYear){
  let myNewDay;
  let myNewMonth;
  if(theDay.length == 1){
       myNewDay = "0" + theDay;
  }else{
    myNewDay = theDay;
  }
  if(theMonth.length == 1){
    myNewMonth = "0" + theMonth;
  }else {
    myNewMonth = theMonth;
  }
  let myNewDate = theYear + "-" + myNewMonth + "-" + myNewDay;
  return myNewDate;
}

function searchAboutDate(){
  if(theSearchDateInput.value != ""){
    theSearchDate = theSearchDateInput.value;
    showTasks();
    theSearchDateInput.value = "";
  }else{
    alert("please, write a date");
  }
}

function cancelSearch(){
  theSearchDate = "";
  theSearchType = "";
  showTasks();
}

function showOrderingOptions(){
  orderingOptions.style.display = "block";    
  anime({
    targets: orderingOptions,
    translateY: 20
  });
}

function orderByLevel(){
  storageOfTasks.sort((a , b) => levelOrdering[a.levelName] - levelOrdering[b.levelName]);
  showTasks();
}

function nativeOrdering(){
  storageOfTasks.sort((a , b) => a.createDate - b.createDate);
  showTasks();
}

function orderByFlag(){
  storageOfTasks.sort((a , b) => a.flagOrder - b.flagOrder);
  showTasks();
}

function letterOrdering(){
  storageOfTasks.sort((a , b) => a.name.localeCompare(b.name));
  showTasks();
}
function makeTodayDate() {
  let todayDay = new Date().getDate();
  let todayMonth = new Date().getMonth() + 1;
  let todayYear = new Date().getFullYear();
  return {day: todayDay , month: todayMonth , year: todayYear, fullDate: todayDay + "/" + todayMonth + "/" + todayYear,  searchDate:makeSearchDateValue(String(todayDay) , String(todayMonth) , String(todayYear)),}
}
// show tasks
function showTasks(){
  let mohtwa = "";
  for(let i = 0; i < storageOfTasks.length; i++){
    if(storageOfTasks[i].theType.includes(theSearchType) && storageOfTasks[i].seDate.includes(theSearchDate)){
      
        mohtwa += ` <div id="task" style="width:96%; opacity:${storageOfTasks[i].taskOpacity}">
              <table border="0px;">
                <tr>
                   <td style="width:4%; vertical-align: middle; text-align:right;"><div id="check-circle" style="background-color:${storageOfTasks[i].circleBackground};" onclick="makeCheck(${i});"><i class="fas fa-check"></i></div></td>
                   <td style="width:55%"><h3 id="task-name">${storageOfTasks[i].name}<i class="${storageOfTasks[i].noteIcon}"></i><i class="${storageOfTasks[i].theTypeIcon}" title="${storageOfTasks[i].theType}"></i></h3></td>
                   <td style=" font-size:20px; vertical-align:middle; color:#cccccc; text-align:center;"><i class="fas fa-paperclip" onclick="chooseMoreTaskOptions(${i});"></i></td>
                   <td><img id="imgIcon" src=${storageOfTasks[i].imgSrc} onclick="changeImage(${i});"></td>
                   <td style=" font-size:20px; vertical-align:middle; color:${storageOfTasks[i].dateIconColor}; text-align:center;"><i class="far fa-calendar-alt" onclick="changeDate(${i});" title="${storageOfTasks[i].dateValue}"></i></td>
                   <td style="width:15%"><div class="levelIcon" id=${storageOfTasks[i].levelId} onclick="changeLevel(${i});">${storageOfTasks[i].levelName}</div></td>
                   <td id="flag" style=" font-size:20px; vertical-align:middle; color:${storageOfTasks[i].flagColor}; width:5%; text-align:center;"><i class="${storageOfTasks[i].flagType}" id="flagIcon" onclick="changeFlag(${i});"></i></td>
                </tr>
              </table>
            </div>`;
          }
        }
  document.getElementById("tasksPlace").innerHTML = mohtwa;
}
showTasks();
saveArrayOfEvents();
//localStorage.clear();
//some edits in buttons in rename mood 
//inputButton.style.padding="8px";
inputButton.style.color="white";
dateButton.style.color="white";
document.body.style.backgroundImage = "url(" + backgroundImg + ")";
document.body.style.backgroundColor = backgroundColor;
function themassege(){
  if (window.innerWidth < 730){
   alert("Optimal viewing experience requires a wider screen. Please rotate your device to landscape mode.")
}}
window.onload = themassege();

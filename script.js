document.addEventListener("DOMContentLoaded", function() {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    
    const changeBox1Btn = document.getElementById("changeBox1");
    const changeBox2Btn = document.getElementById("changeBox2");
    const changeBox3Btn = document.getElementById("changeBox3");
    const changeAllBtn = document.getElementById("changeAll");
    
    const hideBox1Btn = document.getElementById("hideBox1");
    const hideBox2Btn = document.getElementById("hideBox2");
    const hideBox3Btn = document.getElementById("hideBox3");
    const hideAllBtn = document.getElementById("hideAll");
    
    const resetColorsBtn = document.getElementById("resetColors");
    const showAllBtn = document.getElementById("showAll");
    
    changeBox1Btn.addEventListener("click", function() {
      box1.style.backgroundColor = "orange";
      box1.style.borderColor = "purple";
    });
    
    changeBox2Btn.addEventListener("click", function() {
      box2.style.backgroundColor = "yellow";
      box2.style.borderColor = "green";
    });
    
    changeBox3Btn.addEventListener("click", function() {
      box3.style.backgroundColor = "pink";
      box3.style.borderColor = "red";
    });
    
    changeAllBtn.addEventListener("click", function() {
      box1.style.backgroundColor = "cyan";
      box1.style.borderColor = "blue";
      box2.style.backgroundColor = "cyan";
      box2.style.borderColor = "blue";
      box3.style.backgroundColor = "cyan";
      box3.style.borderColor = "blue";
    });
    
    hideBox1Btn.addEventListener("click", function() {
      box1.style.display = "none";
    });
    
    hideBox2Btn.addEventListener("click", function() {
      box2.style.display = "none";
    });
    
    hideBox3Btn.addEventListener("click", function() {
      box3.style.display = "none";
    });
    
    hideAllBtn.addEventListener("click", function() {
      box1.style.display = "none";
      box2.style.display = "none";
      box3.style.display = "none";
    });
    
    resetColorsBtn.addEventListener("click", function() {
      box1.style.backgroundColor = "red";
      box1.style.borderColor = "orange";
      box2.style.backgroundColor = "green";
      box2.style.borderColor = "yellow";
      box3.style.backgroundColor = "blue";
      box3.style.borderColor = "pink";
    });
    
    showAllBtn.addEventListener("click", function() {
      box1.style.display = "block";
      box2.style.display = "block";
      box3.style.display = "block";
    });
  });
  
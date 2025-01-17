function Confirmation() {
    confirm('Are you sure ?');
  }


var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");




// Function to open the modal
function openModal() 
{
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() 
{
    modal.style.display = "none";
}

// Event listeners for buttons
openModalBtn.onclick = openModal;
closeModalBtn.onclick = closeModal;

window.onclick = function(ae)
{
      if(ae.target == modal)
          { closeModal(); }
}
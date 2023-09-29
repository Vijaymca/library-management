
function addBook() {
    const imageInput = document.getElementById("imageInput");
    const library = document.getElementById("library");

   
    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];

        const bookImage = document.createElement("img");
        bookImage.src = URL.createObjectURL(file);
        bookImage.alt = "Book Cover";

        
        library.appendChild(bookImage);

       
        imageInput.value = "";
    }
}

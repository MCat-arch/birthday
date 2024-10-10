document.getElementById('wishForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const wishInput = document.getElementById('wishInput');
    const wishList = document.getElementById('wishList');
    value = wishInput.value;

    if (value) {
        const newWish = document.createElement('li');
        newWish.innerText = `Semoga ${value} Terkabul.... aamiin`;
        wishList.appendChild(newWish);
        wishInput.value = ''; // Clear the input
    }
});

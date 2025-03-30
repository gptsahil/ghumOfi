document.addEventListener("DOMContentLoaded", function() {
    const destinations = ["Paris", "New York", "Dubai", "London", "Tokyo"];
    let index = 0;
    
    setInterval(() => {
        document.getElementById("changing-text").textContent = "Visit " + destinations[index];
        index = (index + 1) % destinations.length;
    }, 200);
});

function validateBooking() {
    let whereTo = document.getElementById("whereTo")?.value.trim();
    let persons = document.getElementById("persons")?.value;
    let startDate = document.getElementById("startDate")?.value;
    let endDate = document.getElementById("endDate")?.value;
    let description = document.getElementById("description")?.value.trim();
    
    let today = new Date().toISOString().split("T")[0];

    if (!whereTo) {
        alert("Please select a destination.");
        return;
    }
    if (!persons || persons < 1) {
        alert("Please enter a valid number of persons.");
        return;
    }
    if (!startDate || startDate < today) {
        alert("Start Date should be a future date.");
        return;
    }
    if (!endDate || endDate <= startDate) {
        alert("End Date should be greater than Start Date.");
        return;
    }
    if (description.length < 50 || description.length > 500) {
        alert("Description must be between 50 and 500 characters.");
        return;
    }

    alert("Booking Successful!");
    document.getElementById("bookingForm")?.reset();
}

// Dynamic Package Gallery
const packages = [
    {name: "Paris", image: "images/paris.jpg", description: "City of love and lights.", price: "$1500", rating: "⭐⭐⭐⭐"},
    {name: "New York", image: "images/newyork.jpg", description: "The city that never sleeps.", price: "$2000", rating: "⭐⭐⭐⭐⭐"},
    {name: "Dubai", image: "images/dubai.jpg", description: "Luxury and adventure combined.", price: "$1800", rating: "⭐⭐⭐⭐"},
    {name: "London", image: "images/london.jpg", description: "History and modern life together.", price: "$1700", rating: "⭐⭐⭐⭐"},
    {name: "Tokyo", image: "images/tokyo.jpg", description: "Blend of tradition and technology.", price: "$1900", rating: "⭐⭐⭐⭐"},
    {name: "Sydney", image: "images/sydney.jpg", description: "Beautiful beaches and Opera House.", price: "$1600", rating: "⭐⭐⭐⭐⭐"},
    {name: "Rome", image: "images/rome.jpg", description: "Explore the ancient empire.", price: "$1400", rating: "⭐⭐⭐⭐"},
    {name: "Bangkok", image: "images/bangkok.jpg", description: "Street food and nightlife.", price: "$1300", rating: "⭐⭐⭐⭐"},
    {name: "Bali", image: "images/bali.jpg", description: "Tropical paradise with beaches.", price: "$1200", rating: "⭐⭐⭐⭐⭐"}
];

document.addEventListener("DOMContentLoaded", function() {
    let packageContainer = document.getElementById("package-gallery");
    if (!packageContainer) return;

    let content = "";
    for (let i = 0; i < packages.length; i++) {
        if (i % 3 === 0) content += '<div class="row">';
        content += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${packages[i].image}" class="card-img-top" alt="${packages[i].name}">
                    <div class="card-body">
                        <h5 class="card-title">${packages[i].name}</h5>
                        <p class="card-text">${packages[i].description}</p>
                        <p>Price: ${packages[i].price} | Rating: ${packages[i].rating}</p>
                        <button class="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        `;
        if (i % 3 === 2) content += '</div>';
    }

    if (packages.length % 3 !== 0) content += '</div>'; // Ensure last row closes
    packageContainer.innerHTML = content;
});

//Register Form
document.addEventListener("DOMContentLoaded", function () {
    let registerForm = document.getElementById("registerForm");

    if (!registerForm) {
        console.error("registerForm not found! Make sure it exists in the DOM.");
        return;
    }

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let fullname = document.getElementById("fullname")?.value.trim();
        let contact = document.getElementById("contact")?.value.trim();
        let dob = document.getElementById("dob")?.value;
        let email = document.getElementById("email")?.value.trim();
        let password = document.getElementById("password")?.value.trim();
        let gender = document.querySelector('input[name="gender"]:checked')?.value;

        if (!fullname || fullname.length < 3) {
            alert("Full Name must be at least 3 characters.");
            return;
        }

        if (!/^\d{10}$/.test(contact)) {
            alert("Enter a valid 10-digit contact number.");
            return;
        }

        if (!dob) {
            alert("Please select your Date of Birth.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Enter a valid Email ID.");
            return;
        }

        if (!password || password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (!gender) {
            alert("Please select your Gender.");
            return;
        }

        // **Store user details in localStorage**
        let user = { fullname, contact, dob, email, password, gender };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration Successful!");

        registerForm.reset();

        // Close the modal after successful registration
        let modalElement = document.getElementById("registerModal");
        let modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();

        // Redirect to login page
        let loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
        loginModal.show();
    });
});

//Login form
document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");

    // Handle login form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Enter a valid Email ID.");
            return;
        }

        if (!password || password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        alert("Login Successful!");
        loginForm.reset();

        // Close the login modal after successful login
        let loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
        loginModal.hide();
    });

    // Open Register Modal when clicking "Register here"
    document.getElementById("openRegisterModal").addEventListener("click", function () {
        let loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
        loginModal.hide(); // Close login modal first

        let registerModal = new bootstrap.Modal(document.getElementById("registerModal"));
        registerModal.show(); // Open register modal
    });
});



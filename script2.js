      // Function to load the count from localStorage
      let clickCount;  
        function loadCount() {
            let count = parseInt(localStorage.getItem("clickCount") || 0);
 
            document.getElementById("countDisplay").innerText = count;
        }

        // Function to increment the count
        // function incrementCount() {
        //     let count = parseInt(localStorage.getItem("clickCount") || 0);
        //     count += 10; // Increment count
        //     localStorage.setItem("clickCount", count); // Store updated count
        //     document.getElementById("countDisplay").innerText = count; // Update display
        // }

        function incrementCount() {
            let count = parseInt(sessionStorage.getItem("clickCount") || 0); // Get count from sessionStorage or default to 0

            count += 10; // Increment count by 10
            sessionStorage.setItem("clickCount", count); // Store updated count in sessionStorage
            document.getElementById("countDisplay").innerText = count; // Update display
        }

        // Function to reset the count
        // function resetCount() {
        //     localStorage.setItem("clickCount", 0); // Reset count to 0
        //     document.getElementById("countDisplay").innerText = 0; // Update display
        // }

        loadCount(); // Load count when page loads

        //scorign the score 


        function saveScore() {
            sessionStorage.setItem("round_1_score", count);
            window.location.href = "indexN.html"; // Redirect
        }
        



// // Function to initialize count from localStorage
//         function loadCount() {
//             let count = localStorage.getItem("clickCount");
//             if (count === null) {
//                 count = 0;
//                 localStorage.setItem("clickCount", count);
//             }
//             document.getElementById("countDisplay").innerText = count;
//         }

//         // Function to increment the count
//         function incrementCount() {
//             let count = localStorage.getItem("clickCount");
//             count = parseInt(count) + 1; // Convert to number and increment
//             localStorage.setItem("clickCount", count); // Store updated count
//             document.getElementById("countDisplay").innerText = count; // Update display
//         }

//         // Load count on page load
//         loadCount();

// let score = 0;
// function marks() {
//     sc = score + 10;

// }
    // function loadCount() {
    //         let count = localStorage.getItem("clickCount");
    //         if (count === null) {
    //             count = 0;
    //             localStorage.setItem("clickCount", count);
    //         }
    //         document.getElementById("countDisplay").innerText = count;
    //     }

    //     // Function to increment the count
    //     function incrementCount() {
    //         let count = localStorage.getItem("clickCount");
    //         count = parseInt(count) + 10; // Convert to number and increment
    //         localStorage.setItem("clickCount", count); // Store updated count
    //         document.getElementById("countDisplay").innerText = count; // Update display
    //     }

    //     // Load count on page load
//     loadCount();
    


// Function to load the score from sessionStorage
function loadScore() {
    let score = parseInt(sessionStorage.getItem("clickCount")) || 0;
    document.getElementById("countDisplay").innerText = score;
}

// Function to increment the score when the correct answer is selected
function incrementCount() {
    let score = parseInt(sessionStorage.getItem("clickCount")) || 0;
    score += 10; // Increase by 10 for a correct answer
    sessionStorage.setItem("clickCount", score); // Save updated score
    document.getElementById("countDisplay").innerText = score; // Update UI
}

// Ensure score is loaded when the page loads
document.addEventListener("DOMContentLoaded", loadScore);

// Function to navigate to the next question while keeping the score
function nextQuestion(nextPage) {
    window.location.href = nextPage; // Navigate to the next page
}

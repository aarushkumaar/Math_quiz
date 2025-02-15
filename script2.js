      // Function to load the count from localStorage
        function loadCount() {
            let count = localStorage.getItem("clickCount") || 0;
            document.getElementById("countDisplay").innerText = count;
        }

        // Function to increment the count
        function incrementCount() {
            let count = parseInt(localStorage.getItem("clickCount") || 0);
            count += 10; // Increment count
            localStorage.setItem("clickCount", count); // Store updated count
            document.getElementById("countDisplay").innerText = count; // Update display
        }

        // Function to reset the count
        function resetCount() {
            localStorage.setItem("clickCount", 0); // Reset count to 0
            document.getElementById("countDisplay").innerText = 0; // Update display
        }

        loadCount(); // Load count when page loads

        //scorign the score 


        function saveScore() {
            let count = parseInt(localStorage.getItem("clickCount") || 0);
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
    
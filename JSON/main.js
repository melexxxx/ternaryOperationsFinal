// Function to check the age and display a message
function ageCheck() {
    // Get the age value from an input element with the ID "age"
    var age = document.getElementById("age").value;
    
    // Determine whether the age is 18 or above and set a message accordingly
    var canVote = age >= 18 ? "You are old enough to vote" : "You are not old enough to vote";
    
    // Display the message in an element with the ID "ageReturn"
    document.getElementById("ageReturn").innerHTML = canVote;

    // Check if age is 18 or above, and show/hide the "voteCaster" section accordingly
    if (age >= 18) {
        // If age is 18 or above, show the "voteCaster" section
        document.getElementById("voteCasterContainer").style.display = "block";
    } else {
        // If age is below 18, hide the "voteCaster" section
        document.getElementById("voteCasterContainer").style.display = "none";
    }
}

// Function to handle voter information
function voter() {
    // Get the first name and last name from input elements
    var name = document.getElementById("firstName").value;
    var surname = document.getElementById("lastName").value;
    
    // Get the selected vote input element
    var selectedVoteInput = document.querySelector('input[name="vote"]:checked');

    // Determine the vote based on the selected input or set a default value
    if (selectedVoteInput) {
        var vote = selectedVoteInput.value;
    } else {
        var vote = "No vote selected";
    }

    // Nested function definition within the voter function
    function displayVoterInfo(name, surname, vote) {
        // Display a message with voter information in an element with the ID "constructor"
        document.getElementById("constructor").innerHTML =
            "Hello " + name + " " + surname + ". Thank you for voting " + vote + ".";
    }

    // Call the nested function to display voter information
    displayVoterInfo(name, surname, vote);
}

// Constructor function to create a voter object
function voterConstructor(name, surname, vote) {
    // Create a voter object with Name, Surname, and Vote properties
    this.Name = name;
    this.Surname = surname;
    this.Vote = vote;
}

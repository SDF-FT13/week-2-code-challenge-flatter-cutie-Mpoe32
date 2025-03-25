// Your code here
document. addEventListener("DOMContentLoaded", () =>{
 const characterBar = document.getElementById("character-bar");
 const detailedInfo = document.getElementById("detailed-info");
 const votesForm = document.getElementById("votes-form");
 const votesInput = document.getElementById("votes-input");
 const characterForm = document.getElementById("character-form");
 const nameInput = document.getElementById("name-input");
 const imageInput = document.getElementById("image-input");
 const resetVotesBtn = document.getElementById("reset-votes-btn");})

 const apiUrl = "http;//localhost:3000/characters";

 //fetch and display characters
 const loadCharacters = async () =>{
    const response = await fetch(apiUrl);
    const characters = await response.json();
    characterBar.innerHTML = "";
    characters.forEach(character =>{
        const characterSpan = document.createElement("span");
        characterSpan.textContent = character.name;
        characterSpan.addEventListener("click", () => displayCharacterDetails(character));
        characterBar.appendChild(characterSpan);
    });
 };
  //Display Character details
  const displayCharacterDetails = (character) => {
    detailedInfo.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>Votes: <span id="vote-count">${character.votes}</span></p>
    `;
    votesForm.onsubmit = (event) => handleVoteSubmit(event, character);
  };

  //handle vote submission
  const handleVoteSubmit = async (event, character) => {
    event.preventDefault();
    const voteToAdd = parseInt(votesInput.value, 10);
    if (isNaN(votesToAdd)) return;//updates votes 
  }
//update votes locally and on the server
character.votes += votesToAdd;
await updateVotes(character.id, character.votes);
//update the displayed vote count

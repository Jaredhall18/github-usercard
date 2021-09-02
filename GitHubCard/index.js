/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entryPoint = document.querySelector('.cards');
const url =`https://api.github.com/users/jaredhall18`;
axios.get(url)
  .then(resp => {
    console.log(resp.data);
    const card = gitCardMaker(resp.data);
    entryPoint.appendChild(card); //Append to the div we created cards
  })
  .catch(err => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'FAILED TO LOAD DATA';
    entryPoint.appendChild(errorMessage);
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
// const gitCardMaker({ url, name, username, location, address, followers, following, bio }) {
//   //instantiating elements
//   const userCard = document.createElement('div');
//   const userImage = document.createElement('img');
//   const userCardInfo = document.createElement('div');
//   const userNameTitle = document.createElement('h3');
//   const userUsername = document.createElement('p');
//   const userLocation = document.createElement('p');
//   const userProfile = document.createElement('p');
//   const userProfileURL = document.createElement('a');
//   const userFollowers = document.createElement('p');
//   const userFollowing = document.createElement('p');
//   const userBio = document.createElement('p');

//   //Setting Class Names, Attributes, and Text
//   userCard.classList.add('card');
//    userImage = document.createElement('img');
//    userCardInfo = document.createElement('div');
//    userNameTitle = document.createElement('h3');
//    userUsername = document.createElement('p');
//    userLocation = document.createElement('p');
//    userProfile = document.createElement('p');
//    userProfileURL = document.createElement('a');
//    userFollowers = document.createElement('p');
//    userFollowing = document.createElement('p');
//    userBio = document.createElement('p');
  
// }
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
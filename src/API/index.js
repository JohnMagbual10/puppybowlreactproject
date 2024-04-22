// src/API/index.js

const cohortCode = '2401-FTB-MT-WEB-PT';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortCode}`;

const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.players;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
        return [];
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.player;
    } catch (err) {
        console.error('Uh oh, trouble fetching player!', err);
        return null;
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(`${APIURL}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playerObj)
        });
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.player;
    } catch (err) {
        console.error('Uh oh, trouble adding player!', err);
        return null;
    }
};

const deletePlayer = async (playerId) => {
    console.log('Deleting player with ID:', playerId);
    try {
      // Your delete player logic here
    } catch (error) {
      console.error('Error deleting player:', error);
      throw error; // Rethrow the error to handle it in the calling code
    }
  };
  
  
  
  export { fetchAllPlayers, fetchSinglePlayer, addNewPlayer, deletePlayer };

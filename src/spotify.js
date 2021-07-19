export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-clone-react-js.netlify.app/";
// const redirectUri = "http://localhost:3000/";
const clientId = "749c22f1171646bfa2488b2c55e1fd11";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]
export const getTokenFromUrl = () => {
    return window.location.hash
     .substring(1)
     .split("&")
     .reduce((intial , item)=>{
         var parts = item.split('=');
         intial[parts[0]] = decodeURIComponent(parts[1]);
         return intial;
     },{});
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

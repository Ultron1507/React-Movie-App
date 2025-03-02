import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNhYjJmY2RhZjFjMGY5ZjgxNmVkMDMwYWVlZGFkMSIsIm5iZiI6MTc0MDc0OTE5MS4wNTUsInN1YiI6IjY3YzFiOTg3YzVkZTg0MmI0YmEyNzI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yv6xu1xFpSebtV87ATgI0nK3lRK7f3JK1BgjrFcg4WA'
      }
    });


    export default instance;
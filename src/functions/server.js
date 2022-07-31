import axios from 'axios';
import configData from '../config';

const server = (function () {
    const address = configData.address;
    // console.log(address);

    async function getUserData(userid) {
        try {
            const response = await axios.get(`${address}/user/${userid}`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    }

    async function getUserGoal(userid) {
        try {
            const response = await axios.get(`${address}/user_goal/${userid}`);
            return response.data.list;
        } catch (e) {
            console.error(e);
        }
    }

    async function getThisWeek() {
        try {
            const response = await axios.get(`${address}/this_week`);
            return response.data.list;
        } catch (e) {
            console.error(e);
        }
    }

    async function getThisMonth() {
        try {
            const response = await axios.get(`${address}/this_month`);
            return response.data.list;
        } catch (e) {
            console.error(e);
        }
    }

    async function getPeopleGoal() {
        try {
            const response = await axios.get(`${address}/people_goal`);
            return response.data.list;
        } catch (e) {
            console.error(e);
        }
    }

    async function postToday(data) {
        try {
            const response = await axios.post(`${address}/today`, {
                id: data.id,
                date: data.date,
                goal: data.goal,
                check: data.check
            })
        } catch (e) {
            console.error(e);
        }
    }

    return {
        userData: getUserData,
        userGoal: getUserGoal,
        thisWeek: getThisWeek,
        thisMonth: getThisMonth,
        peopleGoal: getPeopleGoal,
        postToday: postToday,
    }
}());

export default server
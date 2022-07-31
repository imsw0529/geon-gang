import axios from 'axios';
import configData from '../config';

const server = (function () {
    const address = configData.address;
    // console.log(address);

    async function getUserData(userid) {
        const response = await fetch(`${address}/user/${userid}`);
        const responseJson = await response.json();

        return responseJson;
    }

    async function getUserGoal(userid) {
        const response = await fetch(`${address}/user_goal/${userid}`);
        const responseJson = await response.json();

        return responseJson.list;
    }

    async function getThisWeek() {
        const response = await fetch(`${address}/this_week`);
        const responseJson = await response.json();

        return responseJson.list;
    }

    async function getThisMonth() {
        const response = await fetch(`${address}/this_month`);
        const responseJson = await response.json();

        return responseJson.list;
    }

    async function getPeopleGoal() {
        const response = await fetch(`${address}/people_goal`);
        const responseJson = await response.json();

        return responseJson.list;
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
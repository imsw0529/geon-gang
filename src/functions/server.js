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

    return {
        userData: getUserData,
        userGoal: getUserGoal,
        thisWeek: getThisWeek,
        thisMonth: getThisMonth,
        peopleGoal: getPeopleGoal,
    }
}());

export default server
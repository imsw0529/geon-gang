import axios from 'axios';
import configData from '../config';
import { useCookies } from 'react-cookie';

const server = (function () {
    const address = configData.address;
    // console.log(address);

    async function login(userid, password) {
        try {
            const response = await axios.post(`${address}/login`, {
                id: userid,
                password: password
            })
        } catch (e) {
            console.error(e);
        }
    }

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

    async function getMyRecord(userid, year, month) {
        try {
            const response = await axios.get(`${address}/my_record/${userid}/${year}/${month}`);
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
            });
            window.alert(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function updateUserData(data) {
        try {
            const response = await axios.post(`${address}/update_user`, {
                id: data.id,
                name: data.name,
                password: data.password,
                goalText: data.goalText,
            });
            window.alert(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function updateUserGoal(data) {
        try {
            const response = await axios.post(`${address}/update_goal`, {
                id: data.id,
                goal: data.goal,
            });
            window.alert(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function registUser(data) {
        try {
            const response = await axios.post(`${address}/regist_user`, {
                id: data.id,
                name: data.name,
                password: data.password,
                goalText: data.goalText,
                goal: data.goal,
                code: data.code,
            });
            window.alert(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return {
        login: login,
        userData: getUserData,
        userGoal: getUserGoal,
        thisWeek: getThisWeek,
        thisMonth: getThisMonth,
        peopleGoal: getPeopleGoal,
        myRecord: getMyRecord,
        postToday: postToday,
        updateUserData: updateUserData,
        updateUserGoal: updateUserGoal,
        registUser: registUser,
    }
}());

export default server
import axios from 'axios';
import configData from '../config';

const server = (function () {
    const address = configData.address;
    axios.defaults.baseURL = address;
    // axios.defaults.withCredentials = true;
    // console.log(address);


    async function login(userid, password) {
        try {
            const response = await axios.post(`/login`, {
                id: userid,
                password: password
            })
            return response.data;
        } catch (e) {
            console.error(e);
        }
    }

    async function getUserData(userid) {
        try {
            const response = await axios.get(`/user/${userid}`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    }

    async function getUserGoal(userid) {
        try {
            const response = await axios.get(`/user_goal/${userid}`);
            return response.data.list;
        } catch (e) {
            console.error(e);
        }
    }

    async function getThisWeek() {
        try {
            const response = await axios.get(`/this_week`);
            return response.data.list;
        } catch (e) {
            console.error(e);
        }
    }

    async function getThisMonth() {
        try {
            const response = await axios.get(`/this_month`);
            return response.data.list;
        } catch (e) {
            console.error(e);
        }
    }

    async function getPeopleGoal() {
        try {
            const response = await axios.get(`/people_goal`);
            return response.data.list;
        } catch (e) {
            console.error(e);
        }
    }

    async function getMyRecord(userid, year, month) {
        try {
            const response = await axios.get(`/my_record/${userid}/${year}/${month}`);
            return response.data.list;
        } catch (e) {
            console.error(e);
        }
    }

    async function postToday(data) {
        const token = sessionStorage.getItem('token');
        token && (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`);
        try {
            const response = await axios.post(`/today`, {
                id: data.id,
                date: data.date,
                goal: data.goal,
                check: data.check,
                memo: data.memo
            });
            window.alert(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function updateUserData(data) {
        const token = sessionStorage.getItem('token');
        token && (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`);
        try {
            const response = await axios.post(`/update_user`, {
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
        const token = sessionStorage.getItem('token');
        token && (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`);
        try {
            const response = await axios.post(`/update_goal`, {
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
            const response = await axios.post(`/regist_user`, {
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
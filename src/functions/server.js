import configData from '../config';

const server = (function () {
    const address = configData.address;
    // console.log(address);

    function getUserData(userid) {
        return {
            userId: userid,
            userName: "userName",
            userGoalText: "userGoalText from server",
        };
    }

    function getUserGoal(userid) {
        return {
            list: [
                'goal1 from server',
                'goal2 from server',
                'goal3 from server',
                'goal4 from server'
            ]
        }
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

    function getPeopleGoal() {
        return {
            list: [
                {
                    id: 'id1',
                    name: 'user1 from server',
                    goalText: 'goalText1',
                    goal: 'goal'
                },
                {
                    id: 'id2',
                    name: 'user2 from server',
                    goalText: 'goalText2',
                    goal: 'goal'
                },
                {
                    id: 'id3',
                    name: 'user3 from server',
                    goalText: 'goalText3',
                    goal: 'goal'
                },
            ]
        };
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
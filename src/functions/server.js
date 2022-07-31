import configData from '../config';

const server = (function () {
    const parsed = configData;
    console.log(parsed);

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

    function getThisWeek() {

        return {
            list: [
                {
                    id: 'id1',
                    name: 'user1 from server',
                    checkedGoal: 4
                },
                {
                    id: 'id2',
                    name: 'user2 from server',
                    checkedGoal: 3
                },
                {
                    id: 'id3',
                    name: 'user3 from server',
                    checkedGoal: 6
                }
            ]
        };
    }

    function getThisMonth() {
        return {
            list: [
                {
                    id: 'id1',
                    name: 'user1 from server',
                    checkedGoal: 20
                },
                {
                    id: 'id2',
                    name: 'user2 from server',
                    checkedGoal: 14
                },
                {
                    id: 'id3',
                    name: 'user3 from server',
                    checkedGoal: 8
                }
            ]
        };
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
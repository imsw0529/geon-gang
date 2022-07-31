const util = {
    dateToString: (date) => {
        return date.getFullYear() + '-' + (date.getMonth() + 1 > 9 ? '' : '0') + (date.getMonth() + 1) + '-' + (date.getDate() > 9 ? '' : '0') + (date.getDate());
    },

    monthDayNum: () => {
        let d1 = new Date().setDate(1);
        let d2 = new Date().setMonth(new Date().getMonth() + 1, 1);
        return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
    }
}

export default util
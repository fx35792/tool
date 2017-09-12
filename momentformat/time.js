function formatTime(time) {
    moment.locale('zh-cn');
    return moment(time).format('YYYY/MM/DD');
}
function toMilliseconds(date) {
    moment.locale('zh-cn');
    return moment(date).valueOf();
}
function formatSecond(time) {
    moment.locale('zh-cn');
    return moment(time).format('HH:mm:ss');
}
function formatToMilliseconds(time){
    moment.locale('zh-cn');
    return moment(time).format('YYYY/MM/DD HH:mm:ss');
}

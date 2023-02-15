const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음 상태', store.getState());
    console.groupEnd(); // 그룹 끝    
};

export default loggerMiddleware;

/*
const loggerMiddleware = function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            //미들웨어 기본 구조
        };
    };
} ; */
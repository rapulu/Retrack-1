const INITIAL_STATE = {
    report: null
}

const reportReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CREATE_REPORT_SUCCESS':
                console.log('create report', action.report);
        return {
            state,
            
        }
        default:
            return state
    }
}

export default reportReducer;
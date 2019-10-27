export const createReport = report => (
    (dispatch, getState) =>
    {
        dispatch({type: 'CREATE_REPORT', report})
    }
);
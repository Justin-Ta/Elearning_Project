import { getTrendingCoursesService } from '../../Axios/course';
import { CHANGE_TRENDING_COURSES_PAGE } from '../../constant/actionType';

export const changeTrendingCoursesAction = (currentPage) => { 
    return dispatch => {
        getTrendingCoursesService(currentPage)
        .then( res => {
            dispatch({
                type: CHANGE_TRENDING_COURSES_PAGE,
                payload: res.data
            });
        })
        .catch( err => console.log(err) );
    }
}

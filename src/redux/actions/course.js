import { getTrendingCoursesService } from '../../Axios/course';
import { POST_TRENDING_COURSES } from '../../constant/actionType';

export const changeTrendingCoursesAction = (currentPage) => { 
    return dispatch => {
        getTrendingCoursesService(currentPage)
        .then( res => {
            dispatch({
                type: POST_TRENDING_COURSES,
                payload: res.data
            });
        })
        .catch( err => console.log(err) );
    }
}


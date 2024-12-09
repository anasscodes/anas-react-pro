import { GET_ARTICLES,DELETE_ARTICLE } from "./ArticleTypes"


const articleReducer = (state , action) => {

    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }    
          
        case DELETE_ARTICLE : 
            return {
                ...state,
                articles: state.articles.filter(article => article.id !== action.payload)
            }
        
    
        default:
            return state 
    }
}

export default articleReducer
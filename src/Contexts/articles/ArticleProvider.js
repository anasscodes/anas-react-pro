import ArticleContext from "./ArticleContext"
import { useReducer } from "react"
import articleReducer from "./ArticleReducer"
import { getAllArticles,deleteArticle } from "./ArticleAction"
import { GET_ARTICLES,DELETE_ARTICLE } from "./ArticleTypes"


const ArticleProvider = ({children}) =>{

    const initstate = {
        articles: []
    }
    const [state, dispatch] = useReducer(articleReducer, initstate)

    const getArticles = async() =>{
       let payload = await getAllArticles()
       dispatch({type: GET_ARTICLES, payload})
    }
    
    const deleteOneArticle = async(id) =>{
        let status = await deleteArticle(id)
        if(status) {
            dispatch({type: DELETE_ARTICLE , payload: id})
        }
    }

    return(
        <ArticleContext.Provider value={{
            getArticles,
            deleteOneArticle,
            articles: state.articles
        }}>{children}</ArticleContext.Provider>
    )
} 


export default ArticleProvider

import { useEffect, useContext } from "react"
import ArticleContext from "../../Contexts/articles/ArticleContext"


const ArticlesList = () => {

    const { articles, getArticles,deleteOneArticle} = useContext(ArticleContext)

   

      

    useEffect(()=>{
        getArticles()
    },[])



  return (
    <>
        <h1>List Of Articles</h1>
        {articles.map(article => (
            <div key={article.id}>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <button onClick={()=> deleteOneArticle(article.id)} className="btn btn-danger btn-sm">DELETE</button>
            </div>
        ))}
    </>
  )
}

export default ArticlesList
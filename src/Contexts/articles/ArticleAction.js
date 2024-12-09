import Swal from "sweetalert2"
import {articleApi} from "../../app/api"

export const getAllArticles = async() => {
    try {
        const response = await articleApi.get()
            return response.data
        //  dispatch({type: "GET_ARTICLES", payload: response.data })
    } catch (error) {
        console.error(error)
    }
}

export const deleteArticle = (id) => {
           let status = 0     
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to Delete this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async(result)=> {
        
        try {
            if (result.isConfirmed) {
            const response = await articleApi.delete(`/${id}`)
                status = response.status
            if (status === 200){


                    Swal.fire(

                      "Deleted!",
                      "Article has been deleted.",
                      "success"

                    ) 
                    
            }
            return status
        }
            
        } catch (error) {
            console.error(error)
        }
    })   
   
}
import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";

//POST
const PostNewsBlog = (data) => Post('posts', false, data); 

//Put
const UpdateNewsBlog = (data, id) => Put(`posts/${id}`, false, data); 

//Delete
const DeleteNewsBlog = (id) => Delete(`posts/${id}`, false); 

//GET
const GetNewsBlog = () => Get('posts?_sort=id&_order=desc');
const GetComments = () => Get('comments', true);

const API = {
    PostNewsBlog,
    UpdateNewsBlog,
    DeleteNewsBlog,
    GetNewsBlog,
    GetComments
}

export default API;


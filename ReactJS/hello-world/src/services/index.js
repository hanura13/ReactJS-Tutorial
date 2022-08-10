import Get from "./Get";
import Post from "./Post";

//POST
const PostNewsBlog = (data) => Post('posts', false, data); 

//GET
const GetNewsBlog = () => Get('posts?_sort=id&_order=desc');
const GetComments = () => Get('comments', true);

const API = {
    PostNewsBlog,
    GetNewsBlog,
    GetComments
}

export default API;


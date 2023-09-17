// const posts=[
//     {
//         title :"This is title 1",
//         body : "this is body 1",
//     },
//     {
//         title :"This is title 2",
//         body : "this is body 2",
//     },
//     {
//         title :"This is title 3",
//         body : "this is body 3",
//     },
//     {
//         title :"This is title 4",
//         body : "this is body 4",
//     },
//     {
//         title :"This is title 5",
//         body : "this is body 5",
//     },{
//         title :"This is title 6",
//         body : "this is body 6",
//     },{
//         title :"This is title 7",
//         body : "this is body 7",
//     },{
//         title :"This is title 8",
//         body : "this is body 8",
//     },
  
    
// ]


//ftch data
const fetchData = async (config)=>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("data is not fetched");
    }
    
}
// fetchData("https://jsonplaceholder.typicode.com/posts");

const postsElement=document.querySelector(".posts")

const loadAllData=async()=>{
    const posts= await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map(post=>{
        
        const postElement =document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML=`
        <h3 class="post-title"> ${post.title}</h3>
            <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement)
    })
   
}
loadAllData()

export default function Post({post}) {
         <p><small>PostId :</small></p>
         const {userId, title, id, body} = post
    return (
       <div className="box">
         <p><small>userId :{userId}</small></p>
         <h5>Titel: {title}</h5>
         <p><small>Id: {id}</small></p>
         <p><small>body: {body}</small></p>
       </div>
    )
}
import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {ListGroup,ListGroupItem,Button} from 'reactstrap'
import {GlobalContext} from '../context/GlobalState'

function UserList() {
    const {users,removeUser}=useContext(GlobalContext);
    // console.log("From UserList",users,removeUser);
    return (
        <ListGroup> 
            {
                users.length>0?(
                    <>{users.map((user)=>{
                            return(<ListGroupItem className="d-flex" key={user.id}>
                                    <strong>{user.name}</strong>
                                <div className="ml-auto  mr-2"> 
                                    <Link to={`/edit/${user.id}`} className="btn btn-warning mr-2">Edit</Link>
                                    <Button onClick={()=>removeUser(user.id)} className="btn btn-danger">delete</Button>
                                </div>
                            </ListGroupItem>
                            ) 
                        })}</>
                ):(
                    <h2 className="text-center">No user Found</h2>
                )
            }
            
        </ListGroup>
    )
}

export default UserList

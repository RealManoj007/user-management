import React, { useContext, useState ,useEffect} from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {Link, useHistory} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'


function EditUser(props) {

    const [selectedUser, setselectedUser] = useState({
        id:'',
        name:''
    })
    const {users,editUser}= useContext(GlobalContext)
    console.log(editUser);

    const history=useHistory()
    const currentUserId=props.match.params.id;
    useEffect(()=>{
        const userId=currentUserId;
        const selectedUser=users.find(user=>user.id===userId)
        setselectedUser(selectedUser)
    },[currentUserId,users])

    const onSubmit=()=>{
        editUser(selectedUser)
        history.push('/')
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" placeholder="Enter Name" value={selectedUser.name}  onChange={(e)=>setselectedUser({...selectedUser,[e.target.name]:e.target.value})}  />
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default EditUser


import React, { useContext,useState } from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {Link,useHistory} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'
import {v4 as uuid} from 'uuid'

function AddUser() {
    const [name, setname] = useState("")
    const {addUser}=useContext(GlobalContext);
    // console.log(addUser);
    const history=useHistory();
    const onSubMit=()=>{
        const newUser={
            id:uuid(),
            name:name
        }
        addUser(newUser);
        history.push('/')
    }
    return (
        <>
        <Form onSubmit={onSubMit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
        </>
    )
}

export default AddUser

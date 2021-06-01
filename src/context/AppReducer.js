export default (state,action)=>{
    console.log(state);
    switch(action.type){
        case 'REMOVE_USER':return{
            users:state.users.filter(user=>{
                return user.id!==action.payload
            })
        }
        case 'ADD_USER':return{
            users:[...state.users,action.payload]
        }
        case 'EDIT_USER':
            const updateUser=action.payload;
            const updateUsers=state.users.map(user=>{
                if(user.id==updateUser.id){
                    return updateUser
                }
                return user;
            })
        console.log("From EDIT USER ACION",updateUser);    
        return{
            users:updateUsers
        }
        default:return state
    }
};
const Dog = ({dog,dispatch}) => {
    const {id, name} = dog;

    return (
        <div>
            {id}) {name}
            <button onClick={()=>dispatch({type:'delete_dog', payload:id})}>delete</button>
        </div>
    );
};

export {Dog};
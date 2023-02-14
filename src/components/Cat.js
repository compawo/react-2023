const Cat = ({cat,dispatch}) => {
    const {id, name} = cat;

    return (
        <div>
            {id}) {name}
            <button onClick={()=>dispatch({type:'delete_cat', payload:id})}>delete</button>
        </div>
    );
};

export {Cat};
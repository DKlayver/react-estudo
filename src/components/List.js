import Item from "./Item"

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat"/>
                <Item  ano_lancamento={1985}/>

            </ul>
        </>
    )
}
export default List
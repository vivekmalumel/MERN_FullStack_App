import React,{useEffect} from 'react'
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {useDispatch,useSelector} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions';

const ShoppingList = () => {
    const items=useSelector(state=>state.item.items);

    const dispatch=useDispatch();
    const deleteAnItem=(itemId)=>dispatch(deleteItem(itemId));

    useEffect(() => {
        const getAllItems=()=>dispatch(getItems());
        getAllItems();
    }, [dispatch])

    return (
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({_id,name})=>(
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                              <ListGroupItem>
                                  <Button 
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={()=>{
                                            //setItems(items.filter(item=>item._id!==_id))
                                            deleteAnItem(_id);
                                        }}
                                  >
                                      &times;
                                  </Button>
                                  {name}
                                </ListGroupItem>  
                        </CSSTransition>
                    )
                    )}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

// ShoppingList.propTypes={
//     getItems:PropTypes.func.isRequired,
//     item:PropTypes.object.isRequired
// }



export default ShoppingList;

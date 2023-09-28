import React ,{useState}from 'react'
import './itemCOntent.scss'


function ItemsContent(props) {
    const [count, setCount] = useState(1)
    const [addtoCart, setAddtoCart] = useState(false);
    const {data, handleShowCart, cartItem} = props

    const handleaddToCart =()=>{
        handleShowCart(true, data, count);
        setAddtoCart(true);
    }

 
   
  return (
   <>
  
        <div className='col-md-3'>
            <div className='box'>
                <div className='image'>
                    <img src={data.images[0]} className=''/>
                </div>
                <div className='d-flex justify-content-between pt-2'>
                    <p className='price'>{data.brand}</p>
                    <p className='model'>${data.price}</p>
                </div>
                <div className='rating-category d-flex justify-content-between'>
                    <p >rating<span style={{paddingLeft:"5px"}}>{data.rating}</span></p>
                    <p>{data.category}</p>
                </div>
                <div className='d-flex justify-content-between'>
                <div className='butn'>
                <button onClick={(e) => { e.preventDefault(); handleaddToCart(); }} disabled={cartItem?.find(item => item.id === data.id) ? true : false}>
               
                {cartItem?.find(item => item.id === data.id) ? 'Added To Cart' : 'Add To Cart'}
                </button>
              
                </div>
                <div className='cart-items d-flex'>
                    <button onClick={() => setCount(count>1?count - 1:1)}>-</button>
                    <input type='text' placeholder='0' disabled value={count}/>
                    <button onClick={() => setCount(count + 1)}>+</button>
                  </div>
                </div>
            </div>
        </div>
       
        
   
   </>
  )
}

export default ItemsContent
import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import './addtocart.scss';
import { AiFillDelete } from 'react-icons/ai';

const AddTOcart = (props) => {
  const { cartItem, handleShowCart,handleDeleteItem } = props;
  const [carts, setCarts] = useState(cartItem)
 
  //  console.log("AddTOcart cartItem: ", cartItem)

  useEffect(() => {
    setCarts(props.cartItem)
  }, [props.cartItem])
  // const handleDeleteItem = (itemId) => {
  //   const updatedCarts = carts.filter((item) => item.id !== itemId);
  //   setCarts(updatedCarts);
  //   console.log(updatedCarts, "updated carts")
  // };


  //create a function that will handle delete operation
  //filter the array that matches the id
  //store the filtered array in to the carts


  return (
    <>
      <div className='cart-container'>
        <div className='add-container'>
          <div className='position-relative w-100 vh-100 '>
            <div className='icon'>
              <ImCross onClick={(e) => { e.preventDefault(); handleShowCart(false) }} />
            </div>

            <div className='cart-items-container mt-5 text-center'>
              {carts.map((items, index) => {
                console.log("Item:", items);
                return (

                  <div className='cart-item d-flex flex-column' key={index}>
                    <div className='cart-img'>
                      <img src={items.images[0]} className='' alt='image' />
                    </div>
                    <div className='brand-name-price d-flex justify-content-between px-5 mt-4'>
                      <div className='brand-price'>
                        <p className='m-0 pb-1'>Brand:</p>
                        <p className='m-0 pb-1'>Price:</p>
                      </div>
                      <div className='brand-price'>
                        <p className='m-0 pb-1'>{items.brand}</p>
                        <p className='m-0 pb-1'>${items.price}</p>
                      </div>
                    </div>
                    <div className='delete d-flex justify-content-between px-5 '>
                      <p className='m-0 pb-1'>Remove Items:</p>
                      <AiFillDelete onClick={() => handleDeleteItem(items.id)} style={{ cursor: "pointer" }} />
                    </div>
                    <div className='total-price d-flex justify-content-between px-5 '>
                      <div className='total-price'>
                        <p className='m-0'>Total Items:</p>
                      </div>
                      <div className='m-0 p-0'>
                        <p className='m-0'>{items.qty}</p>
                      </div>
                    </div>
                    <div className='total-price d-flex justify-content-between px-5 '>
                      <div className='total-price'>
                        <p className='m-0'>Total Price:</p>
                      </div>
                      <div className='m-0 p-0'>
                        <p className='m-0'>${items.qty_price}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTOcart;

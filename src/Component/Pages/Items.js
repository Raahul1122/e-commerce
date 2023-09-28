import React, { useEffect, useState } from 'react'
import ItemsContent from './ItemsContent/ItemsContent'
import '../Pages/ItemsContent/itemCOntent.scss'
import event from '../../Events/Events'
import AddTOcart from './Add to Card/AddTOcart'
const API = 'https://dummyjson.com/products'

const Items = ({ searchTerm }) => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [showCart, setShowCart] = useState(false)
    //declare state name cartItem - [] default
    const [cartItem, setCartItem] = useState([]);
    // const [totalQty,setTotalQty]=useState([]);
    const ItemPerPage = 30
    const fetchUser = async () => {
        try {
            const res = await fetch(`${API}?page=${page}&limit=${ItemPerPage}`);
            const userData = await res.json()
            setData((prevData) => [...prevData, ...userData.products])
            console.log(userData, "data")
        } catch (error) {

        }
    }
      useEffect(() => {
        fetchUser()
       }, [page])

         const fileterData = data.filter((item) =>
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //on search click
    // event.removeAllListeners("onSearch");
    // event.on("onSearch", (data) => {
    //     console.log("inside items component: ", data)

    // })

    const handleShowCart = (value = false, selectedItem = "", qty = 0) => {
        // let currentIndex = cartItem.findIndex(item=>item.id === currentSong.id);
        // if (qty!==-1) {

        // } else {

        // }

        if (selectedItem !== "" && qty !== 0) {
            selectedItem = {
                ...selectedItem, qty,
                qty_price: selectedItem?.price * qty
            }
            setCartItem((prevCartItems) => [...prevCartItems, selectedItem]);
        }
        setShowCart(value)

        console.log("qty" , qty)
    }

    const handleDeleteItem = (itemId) => {
        const updatedCarts = cartItem.filter((item) => item.id !== itemId);
        setCartItem(updatedCarts);
        console.log(updatedCarts, "updated carts")
    };

    return (
        <>
            <div className='border'>
                {/* <div className={showCart ? 'blur-bg' : ''}> */}
                {showCart && <AddTOcart handleShowCart={handleShowCart} showCart={handleShowCart} cartItem={cartItem} handleDeleteItem={handleDeleteItem} />}
                <div className='container'>
                    <div className='row mt-4' >

                        {fileterData && fileterData.length > 0 && fileterData.map((d, index) => (
                            <ItemsContent data={d} key={index} handleShowCart={handleShowCart} cartItem={cartItem} />
                        ))}


                        <div className='loadmorebtn py-4 text-center'>
                            <button onClick={() => setPage((prevPage) => prevPage + 1)}>Load More</button>
                        </div>



                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Items
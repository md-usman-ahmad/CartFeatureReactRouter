
export function CartCard({imgsrc,title,slogan,price, category ,quantity,pId}){

    return (
    <>
        <tr className="product-row border-b">
            <td >
                <div className="flex items-center">
                    <div className="h-30 w-30 mr-4  rounded-lg flex items-center justify-center">
                        <img src={imgsrc} alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-semibold">{title}</span>
                </div>
            </td>
            <td className="py-4 font-semibold text-blue-600">₹{price}</td>
            <td className="py-4">
                <div className="flex items-center">
                    <button  className="quantity-btn border rounded-md py-2 px-4 mr-2 minus" data-action="decrease">-</button>
                    <span className="text-center w-8 quantity-display font-semibold">{quantity}</span>
                    <button  className="quantity-btn border rounded-md py-2 px-4 ml-2 plus" data-action="increase">+</button>
                </div>
            </td>
            <td className="py-4 font-bold text-lg total-price">₹{price*quantity}</td>
        </tr>
    </>
    )
}
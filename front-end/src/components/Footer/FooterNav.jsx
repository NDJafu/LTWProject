import React from 'react'

const FooterNav = () => {
  const products = [{route: 'Shoes'},{route: 'Clothing'},{route:'Accessories'},{route:'Gift Cards'}]
  const sports = [{route: 'Soccer'},{route: 'Running'},{route:'Basketball'},{route:'Football'}]
  const collections = [{route: 'adicolor'},{route: 'Ultraboost'},{route:'NMD'},{route:'Forum'}]
  const support = [{route: 'Help'},{route: 'Returns & Exchanges'},{route:'Shipping'},{route:'Order Tracker'}]
  
  return (
    <section className='flex justify-around px-80 py-8'>
    <div>
      <h1 className='uppercase py-3 font-bold text-lg font-bold'>products</h1>
      {products.map(Link=>(
        <div>
          <div className='text-left md:cursor-pointer'>
            <h1 className='py-1'>{Link.route}</h1>
          </div>
        </div>
      ))}
    </div>
    <div>
      <h1 className='uppercase py-3 font-bold text-lg font-bold'>sports</h1>
      {sports.map(Link=>(
        <div>
          <div className='text-left md:cursor-pointer'>
            <h1 className='py-1'>{Link.route}</h1>
          </div>
        </div>
      ))}
    </div>
    <div>
      <h1 className='uppercase py-3 font-bold text-lg font-bold'>collections</h1>
      {collections.map(Link=>(
        <div>
          <div className='text-left md:cursor-pointer'>
            <h1 className='py-1'>{Link.route}</h1>
          </div>
        </div>
      ))}
    </div>
    <div>
      <h1 className='uppercase py-3 font-bold text-lg font-bold'>support</h1>
      {support.map(Link=>(
        <div>
          <div className='text-left md:cursor-pointer'>
            <h1 className='py-1'>{Link.route}</h1>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default FooterNav
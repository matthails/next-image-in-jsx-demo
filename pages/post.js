import React from 'react'
import Image from 'next/image'
import Img1 from './../public/ducati.jpg'
import Img2 from './../public/cat1.jpg'
import Img3 from './../public/cat2.jpg'


function Post() {
  return (
    <div className="container">
    <h1>My Blog Post</h1>
    <Image placeholder="blur" src={Img1} /* height={1200} width={1920} */ alt="red ducati motorbile"  />
    <p>Ut fugiat consectetur aute magna ut ipsum qui ea amet elit. Ullamco nostrud id non id in minim nulla ea eiusmod. Reprehenderit mollit tempor aute anim eu enim sunt ex. Sit voluptate dolore culpa cillum commodo non laborum ullamco velit magna esse est. Voluptate et reprehenderit enim irure voluptate ipsum esse cupidatat veniam aliquip nostrud pariatur et.</p>
    <Image placeholder="blur" src={Img2} /* height={1200} width={1920} */ alt="red ducati motorbile"  />
    <p>Ut fugiat consectetur aute magna ut ipsum qui ea amet elit. Ullamco nostrud id non id in minim nulla ea eiusmod. Reprehenderit mollit tempor aute anim eu enim sunt ex. Sit voluptate dolore culpa cillum commodo non laborum ullamco velit magna esse est. Voluptate et reprehenderit enim irure voluptate ipsum esse cupidatat veniam aliquip nostrud pariatur et.</p>
    <Image placeholder="blur" src={Img3} /* height={1200} width={1920} */ alt="red ducati motorbile"  />
    <p>Ut fugiat consectetur aute magna ut ipsum qui ea amet elit. Ullamco nostrud id non id in minim nulla ea eiusmod. Reprehenderit mollit tempor aute anim eu enim sunt ex. Sit voluptate dolore culpa cillum commodo non laborum ullamco velit magna esse est. Voluptate et reprehenderit enim irure voluptate ipsum esse cupidatat veniam aliquip nostrud pariatur et.</p>
   
    </div>
  )
}

export default Post
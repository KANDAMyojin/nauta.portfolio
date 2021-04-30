import * as React  from "react"
import { FC } from "react"
import { GraphCms_Asset, GraphCms_Product, Maybe } from "../generated/graphql"

const ProductRoll: FC<{product: GraphCms_Product}> = ({ product }) => {

  const ProductImage: FC<{image: GraphCms_Product['image']}> = ({image}) => {
    if (!image) return null
    else return(
      <img src={image.url} width="500"/>
    )
  }

  const LinkButton: FC<{url: GraphCms_Product['url']}> = ({ url }) =>{
    if (!url) return null;
    else return(
      <a className="button is-primary" href={url} target="_blank">Link</a>
    )
  }


  return(
    <div className="tile is-child box">
      <ProductImage image={product.image} />
      <p className="title">{product.name} <LinkButton url={product.url} /></p>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductRoll
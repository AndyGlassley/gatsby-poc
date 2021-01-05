import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "./list-item.scss"

const ListItem = ({title, description}) => (
    
    <article class="list-item">
        <div>
            <Image />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
    </article>
)

ListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  }
  
ListItem.defaultProps = {
    title: `List Item Title`,
    description: `List Item Description`
}

export default ListItem
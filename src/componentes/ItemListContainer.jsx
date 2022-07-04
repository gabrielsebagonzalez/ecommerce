import React from 'react'
import styles from './Greeting.module.css'

const ItemListContainer = ({greeting}) => {

  return (
    <div className ={styles.styleGreeting}>
      <h3>{greeting}</h3>
    </div>

  )
}

export default ItemListContainer;

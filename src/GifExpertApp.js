import React, {Fragment, useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifFrid } from './components/GifFrid'

export const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['One Punch'])

/*     const handleAdd = () =>{
        setCategories(cats =>[...cats, 'One Punch 2']);
    }
 */

    return(
        <Fragment>
            
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    Categories.map(category =>
                        <GifFrid 
                        key={category}
                        category={category}
                        />
                    )
                }
            </ol>
        </Fragment>
    )
}
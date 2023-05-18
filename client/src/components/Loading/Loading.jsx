import React from 'react'
import LazyImage from './LazyImage'

export default function Loading() {
    return (
        <>
            <div className="gallery">
                <LazyImage src="https://media.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif" alt="Image 1" />
            </div>
        </>
    )
}

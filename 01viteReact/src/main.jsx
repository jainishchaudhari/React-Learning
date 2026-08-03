import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp () {
    return (
        <div>
            <h1>custom App !</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


const anotherElement = (
    <a href="https://www.google.com" target="_blank">click me</a>
)

const anotherUserName = " never give up"

const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    'clicke me to visit google home ',
    anotherUserName
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)

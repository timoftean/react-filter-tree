// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import TreeNode from './App.jsx';

var tree =
{
    type: 'dir',
    name: 'app',
    children: [
        {
            type: 'file',
            name: 'index.html'
        },
        {
            type: 'dir',
            name: 'js',
            children: [
                {
                    type: 'file',
                    name: 'main.js'
                },
                {
                    type: 'file',
                    name: 'app.js'
                },
                {
                    type: 'file',
                    name: 'misc.js'
                },
                {
                    type: 'dir',
                    name: 'vendor',
                    children: [
                        {
                            type: 'file',
                            name: 'jquery.js'
                        },
                        {
                            type: 'file',
                            name: 'underscore.js'
                        }
                    ]
                }
            ]
        },
        {
            type: 'dir',
            name: 'css',
            children: [
                {
                    type: 'file',
                    name: 'reset.css'
                },
                {
                    type: 'file',
                    name: 'main.css'
                }
            ]
        }
    ]
};

ReactDOM.render(<TreeNode  node={tree} />, document.getElementById('react-root'));
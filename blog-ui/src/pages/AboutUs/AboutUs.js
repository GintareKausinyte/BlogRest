import React  from 'react'
import { Link } from "react-router-dom";
import './AboutUs.css'

export default () => {
    return (
        <div className="align-about container-about">
            <div>
                <h1 className="about-title">About Us</h1>
                <h3 className="about-t">Publish your passions, your way
                Create a unique and beautiful blog.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique sollicitudin mauris, eu tempor nunc auctor ut. Nullam scelerisque scelerisque euismod. Vestibulum nisl urna, consequat eu fermentum nec, consectetur ut dui. Aenean ac lacus malesuada, aliquam lacus quis, cursus libero.Praesent euismod hendrerit cursus. Integer tincidunt nisl tortor, sed rutrum erat tincidunt vel. Fusce nulla justo, semper vitae volutpat at, porttitor vel enim. Vivamus id tellus dui. Maecenas luctus at nisl in lacinia. Sed sagittis dictum augue, gravida auctor nunc finibus non. Aliquam quis pulvinar risus, eget imperdiet nunc. Aenean sit amet faucibus lectus. Ut consectetur tristique erat nec fermentum. </h3>
                <h3 className="about-t">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique sollicitudin mauris, eu tempor nunc auctor ut. Nullam scelerisque scelerisque euismod. Vestibulum nisl urna, consequat eu fermentum nec, consectetur ut dui. Aenean ac lacus malesuada, aliquam lacus quis, cursus libero.Praesent euismod hendrerit cursus. Integer tincidunt nisl tortor, sed rutrum erat tincidunt vel. Fusce nulla justo, semper vitae volutpat at, porttitor vel enim. Vivamus id tellus dui. Maecenas luctus at nisl in lacinia. Sed sagittis dictum augue, gravida auctor nunc finibus non.</h3>
            </div>
            <Link to="/createBlog" className="create-blog">Create Your Blog</Link>
        </div>
    )
}
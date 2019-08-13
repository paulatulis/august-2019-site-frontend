import React from "react"
import Layout from "../components/layout"
import Header from '../components/header';
import photo from '../media/pt.jpg'

console.log(photo)
export default () => (
  <Layout>
    <h1>about me</h1>
    <img src={photo} alt="" />

    <p> Hi! My name is Paula, and I am a full stack software engineer with an affinity for meaningful work. My background is in public communications and account management, but I recently decided to pursue coding in all of its wonderful, complex glory. I’m still at the beginning of my journey in the world of web development, so you’ll usually find me learning as much as I can about anything and everything code-related. When I’m not coding, I’m probably wandering around a farmer’s market or eating ice cream, or both.</p>
  </Layout>
)
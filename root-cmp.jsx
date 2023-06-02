const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Link, NavLink } = ReactRouterDOM
const { useState } = React

import { AboutIndex } from './cmps/about-index.jsx'
import { Team } from './cmps/team.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { Vision } from './cmps/vision.jsx'
import { About } from './pages/about.jsx'
import { CarDetails } from './pages/car-details.jsx'
import { CarEdit } from './pages/car-edit.jsx'
import { CarIndex } from './pages/car-index.jsx'
import { Home } from './pages/home.jsx'

export function App() {

    return <Router>
        <section className="app">
            <header className="app-header">
                <h1>Trello App</h1>
                <nav classsName='app-nav'>
                    <NavLink to="/"> בית</NavLink> |
                    <NavLink to="/about"> קצת עלינו</NavLink> |
                </nav>
            </header>

            <main className='main'>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<About />} path="/about" />
                    {/* <Route element={<About />} path="/about" >
                        <Route element={<AboutIndex />} path="/about" />
                        <Route element={<Vision />} path="/about/vision" />
                        <Route element={<Team />} path="/about/team" />
                    </Route>
                    <Route element={<CarIndex />} path="/car" />
                    <Route element={<CarEdit />} path="/car/edit" />
                    <Route element={<CarEdit />} path="/car/edit/:carId" />
                    <Route element={<CarDetails />} path="/car/:carId" /> */}
                </Routes>
            </main>
            <UserMsg />
        </section>
    </Router>
}
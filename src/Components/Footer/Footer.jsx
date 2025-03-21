import React from 'react'

export default function Footer() {
    return <>

        <footer className='bg-success'>
            <div className="container">
                <div className='pt-5'>
                    <h1 style={{ fontSize: "45px" }} className=" text-white">
                        <span className='me-3'>
                            <i className="fa-solid fa-list-check">
                            </i>
                        </span>
                        TODO APP
                    </h1>
                </div>
                <div className="d-flex align-items-center justify-content-between pb-5 flex-wrap">
                    <div>
                        <p className='text-white lead fs-6'>TODO APP is your ultimate productivity companion, designed to help you organize tasks effortlessly. Whether you're managing daily chores, work projects, or personal goals, our intuitive interface and smart reminders keep you on track. Stay focused, get more done, and turn your to-do list into a done list—one task at a time!</p>
                    </div>
                    <div className='d-flex flex-column w-100'>
                        <div>
                            <p className='text-white fs-5 text-center mb-1'>Follow Us</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <i className="fs-5 mx-2 text-white fa-brands fa-facebook"></i>
                            <i className="fs-5 mx-2 text-white fa-brands fa-x-twitter"></i>
                            <i className="fs-5 mx-2 text-white fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <p className='text-center pb-3 text-white m-0'>Made by Eyad Mamoun | All Rights Reserved @2025</p>
            </div>
        </footer>

    </>
}

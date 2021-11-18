import React from "react"
import Footer from "./Footer"
import Header from "./header"
import ContactBarInfo from "./ContactBarInfo"

export default function Layout(props) {
  return (
    <div className="layout flex flex-col items-center justify-center min-h-screen">
      {/* <Header /> */}

      <div className="w-full hidden md:block">
        <ContactBarInfo />
      </div>
      <Header />

      <main className="relative flex-1 lg:container p-0 mx-auto overflow-x-auto overflow-auto">
        {props.children}
      </main>

      <Footer />
    </div>
  )
}

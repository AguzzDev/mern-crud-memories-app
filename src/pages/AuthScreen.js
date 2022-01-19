import { Form } from 'components/Auth/Form'
import React from 'react'

export default function AuthScreen() {
  return (
    <>
      <main className="flex justify-center items-center w-screen h-screen overflow-hidden"
        style={{
          backgroundColor: "#7A7A7A",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%237A7A7A' cx='50' cy='0' r='50'/%3E%3Cg fill='%23757575' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23717171' cx='50' cy='100' r='50'/%3E%3Cg fill='%236c6c6c' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23686868' cx='50' cy='200' r='50'/%3E%3Cg fill='%23646464' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%235f5f5f' cx='50' cy='300' r='50'/%3E%3Cg fill='%235b5b5b' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23575757' cx='50' cy='400' r='50'/%3E%3Cg fill='%23525252' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%234e4e4e' cx='50' cy='500' r='50'/%3E%3Cg fill='%234a4a4a' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23464646' cx='50' cy='600' r='50'/%3E%3Cg fill='%23424242' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%233d3d3d' cx='50' cy='700' r='50'/%3E%3Cg fill='%23393939' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23353535' cx='50' cy='800' r='50'/%3E%3Cg fill='%23323232' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%232e2e2e' cx='50' cy='900' r='50'/%3E%3Cg fill='%232a2a2a' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23262626' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundAttachment: "fixed",
          backgroundSize: "contain"
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center w-5/6 h-3/5 rounded-xl">

          <div className="lg:w-2/6 h-1/4 lg:h-full">
            <img loading="lazy" src="./authImage.jpg" alt="Landscape by tawatchai07" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col  space-y-3  bg-white bg-opacity-40 lg:w-3/6 p-5">
            <h1 className="text-xl md:text-2xl text-gray-700 font-semibold">Memories App</h1>
            <p className="text-sm md:text-base">Memories App is the app where you save your unforgettable moments! </p>
            <Form />
          </div>
        </div>
      </main>
    </>
  )
}

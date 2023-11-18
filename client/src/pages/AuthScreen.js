import { Form } from "components/Auth/Form";
import { Layout } from "components/Layout";
import React from "react";

export default function AuthScreen() {
  return (
    <Layout>
      <section className="flex justify-between space-x-5 h-full">
        <div className="w-2/4">
          <img
            loading="lazy"
            src="./authImage.jpg"
            alt="Landscape by tawatchai07"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col space-y-3 w-2/4">
          <h1 className="text-xl md:text-2xl text-gray-700 font-semibold">
            Memories App
          </h1>
          <p className="text-sm md:text-base">
            Memories App is the app where you save your unforgettable moments!{" "}
          </p>
          <Form />
        </div>
      </section>
    </Layout>
  );
}

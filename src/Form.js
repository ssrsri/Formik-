import { useFormik } from "formik";
import React from "react";
import Input from "./input";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    if (
      formik.values.name &&
      formik.values.card &&
      formik.values.exp &&
      formik.values.cvv &&
      formik.values.line1 &&
      formik.values.line2 &&
      formik.values.city &&
      formik.values.state &&
      formik.values.zcode &&
      formik.values.country
    ) {
      navigate("/thankyou");
    } else {
      alert("Please fill the fields");
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      card: "",
      exp: "",
      cvv: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      zcode: "",
      country: "",
    },
    onsubmit: (values) => {
      values.preventDefault();
      console.log("Form Values", values);
      //   console.log('form data submitted')
      formik("");
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Please enter the name";
      } else if (!values.name.match(/^[a-zA-Z]+$/)) {
        errors.name = "Name should be in alphabets only";
      }
      if (!values.card) {
        errors.card = "Please enter the card number";
      }
      // else if(!values.card.match(/^(?=.*?[0-9]).{10,}$/))
      // {
      // errors.card='Number should be in numericals only'
      // }
      if (!values.exp) {
        errors.exp = "Exp date";
      }
      // else if(!values.exp.match(/^(?=.*?[0-9]).{10,}$/))/
      // {
      // errors.exp='Expiry date should be in numbers only'
      // }
      if (!values.cvv) {
        errors.cvv = "Enter cvv";
      }
      // else if(!values.cvv.match(/^(?=.*?[0-9]).{10,}$/))
      // {
      // errors.mobile='Number should be in numericals only'
      // }
      if (!values.line1) {
        errors.line1 = "Please enter the Address line1";
      } else if (!values.line1.match(/^([A-Z][a-z])(?=.*?[0-9]).{8,}$/)) {
        errors.line1 = "Please enter the correct address";
      }
      if (!values.line2) {
        errors.line2 = "Please enter the Address line 2";
      } else if (
        !values.line2.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
      ) {
        errors.line2 = "please enter the valid address";
      }
      if (!values.city) {
        errors.city = "Please enter the city";
      } else if (!values.city.match(/^[a-zA-Z]+$/)) {
        errors.city.style.color = "green";
      }
      if (!values.state) {
        errors.state = "Please enter the state";
      } else if (!values.state.match(/^[a-zA-Z]+$/)) {
        errors.state = "Please enter state";
      }
      if (!values.zcode) {
        errors.zcode = "Please enter the Zip code";
      }
      // else if(!values.zcode.match(/^[a-zA-Z]+$/))
      // {
      //     errors.zcode='Thank you'
      // }
      if (!values.country) {
        errors.country = "Please enter country code";
      }
      // else if(!values.country.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/))
      // {
      //     errors.country='Thank you'
      // }

      return errors;
    },
  });

  return (
    <div className="flex items-center justify-center w-full h-screen m-auto">
      <div className="w-full h-full p-5 m-20 bg-white border rounded max-w-80">
        <h2 className="text-4xl font-medium text-center text-blue-600">
          Add A Credit Card
        </h2>
        <form className="pt-5 mt-10">
          <div className="mt-26 columns-4">
            <div className="w-96">
              <Input
                label="Name On Card"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <span>
                {formik.errors.name ? (
                  <div className="text-left text-red-600 text-1xl">
                    {formik.errors.name}
                  </div>
                ) : null}
              </span>
            </div>
            <div className="ml-20 w-96">
              <Input
                label="Card Number"
                name="card"
                type="number"
                value={formik.values.card}
                onChange={formik.handleChange}
              />
              <span>
                {formik.errors.card ? (
                  <div className="text-left text-red-600 text-1xl">
                    {formik.errors.card}
                  </div>
                ) : null}
              </span>
            </div>
            <div className="w-40 mx-40">
              <Input
                label="Card exp"
                name="exp"
                type="number"
                value={formik.values.exp}
                onChange={formik.handleChange}
              />
              <span>
                {formik.errors.exp ? (
                  <div className="ml-5 text-left text-red-600 text-1xl">
                    {formik.errors.exp}
                  </div>
                ) : null}
              </span>
            </div>
            <div className="w-40 mx-20">
              <Input
                label="cvv/cvc"
                name="cvv"
                type="number"
                value={formik.values.cvv}
                onChange={formik.handleChange}
              />
              <span>
                {formik.errors.cvv ? (
                  <div className="ml-5 text-left text-red-600 text-1xl">
                    {formik.errors.cvv}
                  </div>
                ) : null}
              </span>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="columns-2">
            <div>
              <Input
                label="Address line1"
                name="line1"
                type="text"
                value={formik.values.line1}
                onChange={formik.handleChange}
              />
              <span>
                {formik.errors.line1 ? (
                  <div className="text-left text-red-600 text-1xl">
                    {formik.errors.line1}
                  </div>
                ) : null}
              </span>
            </div>
            <div>
              <Input
                label="Address line2"
                name="line2"
                type="text"
                value={formik.values.line2}
                onChange={formik.handleChange}
              />
              <span>
                {formik.errors.line2 ? (
                  <div className="text-left text-red-600 text-1xl">
                    {formik.errors.line2}
                  </div>
                ) : null}
              </span>
            </div>
          </div>
          <br />
          <div className="columns-4">
            <div className="w-80">
              <Input
                label="City"
                name="city"
                type="text"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
              <span>
                {formik.errors.city ? (
                  <div className="text-left text-red-600 text-1xl">
                    {formik.errors.city}
                  </div>
                ) : null}
              </span>
            </div>
            <div>
              <select
                className="h-12 border-2 w-80 rounded-2xl"
                type="text"
                name="state"
                label="State"
                value={formik.values.state}
                onChange={formik.handleChange}
              >
                <option>State</option>
                <option>AndhraPradesh</option>
                <option>Telengana</option>
                <option>Karnataka</option>
                <option>Maharastra</option>
              </select>
              <br />
              <br />
              <span>
                {formik.errors.state ? (
                  <div className="text-left text-red-600 text-1xl">
                    {formik.errors.state}
                  </div>
                ) : null}
              </span>
            </div>
            <div className="w-80">
              <Input
                label="Zip code"
                name="zcode"
                type="text"
                value={formik.values.zcode}
                onChange={formik.handleChange}
              />
              <span>
                {formik.errors.zcode ? (
                  <div className="text-left text-red-600 text-1xl">
                    {formik.errors.zcode}
                  </div>
                ) : null}
              </span>
            </div>
            <div className="w-80">
              <Input
                label="Country"
                name="country"
                type="text"
                value={formik.values.country}
                onChange={formik.handleChange}
                // disabled
              />
              <span>
                {formik.errors.country ? (
                  <div className="text-left text-red-600 text-1xl">
                    {formik.errors.country}
                  </div>
                ) : null}
              </span>
            </div>
          </div>
          <br />
          <div className="columns-2">
            <div>
              <button
                type="button"
                className="w-32 px-4 py-2 ml-20 text-black border-2 rounded-2xl hover:bg-purple-600"
              >
                Back
              </button>
            </div>
            <div>
              <button
                onClick={() => submitHandler()}
                type="submit"
                className="w-32 px-4 py-2 text-white bg-blue-600 ml-96 broder-2 rounded-2xl hover:bg-blue-900"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

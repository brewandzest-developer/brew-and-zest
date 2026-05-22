"use client";

import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function CheckoutForm() {

  const [formData, setFormData] =
    useState<FormData>({
      fullName: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    });

  const [errors, setErrors] =
    useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

  };

  const validateForm = () => {

    const newErrors:
      FormErrors = {};

    if (
      !formData.fullName.trim()
    ) {
      newErrors.fullName =
        "Full name is required";
    }

    if (
      !formData.email.trim()
    ) {
      newErrors.email =
        "Email is required";
    }

    if (
      !formData.phone.trim()
    ) {
      newErrors.phone =
        "Phone number is required";
    }

    if (
      !formData.address1.trim()
    ) {
      newErrors.address1 =
        "Address is required";
    }

    if (
      !formData.city.trim()
    ) {
      newErrors.city =
        "City is required";
    }

    if (
      !formData.state.trim()
    ) {
      newErrors.state =
        "State is required";
    }

    if (
      !formData.postalCode.trim()
    ) {
      newErrors.postalCode =
        "Postal code is required";
    }

    if (
      !formData.country.trim()
    ) {
      newErrors.country =
        "Country is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(
        newErrors
      ).length === 0
    );

  };

  const inputClass =
    "h-14 w-full rounded-xl border border-[#E6D7C8] px-5 outline-none transition focus:border-[#161414]";

  const errorClass =
    "mt-2 text-sm text-red-500";

  return (

    <section>

      {/* Heading */}
      <div className="mb-10">

        <p className="mb-3 uppercase tracking-[4px] text-[#7B4E4C]">

          Checkout

        </p>

        <h1 className="text-5xl font-bold">

          Shipping Details

        </h1>

      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          validateForm();
        }}
        className="space-y-10"
      >

        {/* Contact */}
        <div className="rounded-4xl border border-[#E6D7C8] bg-white p-10">

          <h2 className="mb-6 text-2xl font-semibold">

            Contact Information

          </h2>

          <div className="grid gap-5">

            <div>

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={
                  formData.fullName
                }
                onChange={
                  handleChange
                }
                className={
                  inputClass
                }
              />

              {errors.fullName && (

                <p
                  className={
                    errorClass
                  }
                >
                  {
                    errors.fullName
                  }
                </p>

              )}

            </div>

            <div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                className={
                  inputClass
                }
              />

              {errors.email && (

                <p
                  className={
                    errorClass
                  }
                >
                  {
                    errors.email
                  }
                </p>

              )}

            </div>

            <div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
                className={
                  inputClass
                }
              />

              {errors.phone && (

                <p
                  className={
                    errorClass
                  }
                >
                  {
                    errors.phone
                  }
                </p>

              )}

            </div>

          </div>

        </div>

        {/* Address */}
        <div className="rounded-4xl border border-[#E6D7C8] bg-white p-10">

          <h2 className="mb-6 text-2xl font-semibold">

            Shipping Address

          </h2>

          <div className="grid gap-5">

            <div>

              <input
                type="text"
                name="address1"
                placeholder="Address Line 1"
                value={
                  formData.address1
                }
                onChange={
                  handleChange
                }
                className={
                  inputClass
                }
              />

              {errors.address1 && (

                <p
                  className={
                    errorClass
                  }
                >
                  {
                    errors.address1
                  }
                </p>

              )}

            </div>

            <input
              type="text"
              name="address2"
              placeholder="Address Line 2"
              value={
                formData.address2
              }
              onChange={
                handleChange
              }
              className={
                inputClass
              }
            />

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={
                    formData.city
                  }
                  onChange={
                    handleChange
                  }
                  className={
                    inputClass
                  }
                />

                {errors.city && (

                  <p
                    className={
                      errorClass
                    }
                  >
                    {errors.city}
                  </p>

                )}

              </div>

              <div>

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={
                    formData.state
                  }
                  onChange={
                    handleChange
                  }
                  className={
                    inputClass
                  }
                />

                {errors.state && (

                  <p
                    className={
                      errorClass
                    }
                  >
                    {
                      errors.state
                    }
                  </p>

                )}

              </div>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={
                    formData.postalCode
                  }
                  onChange={
                    handleChange
                  }
                  className={
                    inputClass
                  }
                />

                {errors.postalCode && (

                  <p
                    className={
                      errorClass
                    }
                  >
                    {
                      errors.postalCode
                    }
                  </p>

                )}

              </div>

              <div>

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={
                    formData.country
                  }
                  onChange={
                    handleChange
                  }
                  className={
                    inputClass
                  }
                />

                {errors.country && (

                  <p
                    className={
                      errorClass
                    }
                  >
                    {
                      errors.country
                    }
                  </p>

                )}

              </div>

            </div>

          </div>

        </div>

      </form>

    </section>

  );

}
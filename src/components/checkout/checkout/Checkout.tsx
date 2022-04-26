import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import DataContext, { IWorkShopProps } from "../../../context/DataContext";

export interface ICheckoutProps {
}

const API_URL_ORDERS = "http://localhost:3500/orders"

export function Checkout(props: ICheckoutProps) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    let { cart } = useContext(DataContext);

    return (
        <div className="checkout__container">
            <h2 className="checkout__title">Checkout</h2>
            <form className="checkout__form" onSubmit={handleSubmit((data) => {
                const body = { cart, data };
                fetch(API_URL_ORDERS, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                });
                navigate("/checkout/confirmation");
            })}>
                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label>First Name</label><span>{errors.firstname?.message}</span></div>
                    <input
                        className="input__field"
                        {...register("firstname", { required: "First name is required." })}
                        placeholder="Type your first name here"
                    />
                </div>
                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label>Last Name</label><span>{errors.lastname?.message}</span></div>
                    <input
                        className="input__field"
                        {...register("lastname", { required: "Last name is required." })}
                        placeholder="Type your last name here"
                    />
                </div>
                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label>Email Address</label><span>{errors.email?.message}</span></div>
                    <input
                        className="input__field"
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Email is invalid.",
                            },
                        })}
                        placeholder="Type your email address here"
                    />
                </div>

                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label>Address</label><span>{errors.address?.message}</span></div>
                    <input
                        className="input__field"
                        {...register("address", {
                            required: "Address is required.",
                        })}
                        placeholder="Type your address here"
                    />
                </div>

                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label>Zip code</label><span>{errors.zip?.message}</span></div>
                    <input
                        className="input__field"
                        {...register("zip", {
                            required: "Zip code is required.",
                            pattern: /[+-]?\d+(?:[.,]\d+)?/,
                            minLength: {
                                value: 5,
                                message: "Zip code must have 5 digits",
                            },
                            maxLength: {
                                value: 5,
                                message: "Zip code must have 5 digits",
                            },
                        })}
                        placeholder="eg. 21310"
                    />
                </div>
                <input type="submit" className="Checkout__form_btn" value={"Checkout"} />
            </form>
        </div>
    );
}

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import DataContext from "../../../context/DataContext";
import DatePicker from "react-datepicker";
import "./Checkout.css"
import "react-datepicker/dist/react-datepicker.css";


type FormInputs = {
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    zip: number;
    date: Date | null;
    gender: string;
    agreed: boolean;
}

const API_URL_ORDERS = "http://localhost:3500/orders"

export function Checkout() {

    const manageErrors = (response: any) => {
        if (!response.ok) {
            const responseError = {
                statusText: response.statusText,
                status: response.status
            };
            throw (responseError);
        }
        return response;
    }

    const { register, handleSubmit, formState: { errors }, control } = useForm<FormInputs>();
    const navigate = useNavigate();
    let { cart, clearState, handleError, postError }: any = useContext(DataContext);

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const body = { cart, data };
        fetch(API_URL_ORDERS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
            .then(manageErrors)
            .then(() => {
                clearState();
                navigate("/checkout/confirmation");
                console.log("then")
            })
            .catch((err) => {
                handleError(`${err.statusText}, try again.`)
            })

    }

    return (
        <div className="checkout__container">
            <div className="checkout__title_container">
                <h2 className="checkout__title">Checkout</h2>
                {postError && <h6 className="checkout__error">{postError}</h6>}
            </div>
            <form className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label className="checkout__label">First Name</label><h6 className="checkout__error">{errors.firstname?.message}</h6></div>
                    <input
                        className="input__field"
                        {...register("firstname", {
                            required: "First name is required.",
                            pattern: {
                                value: /^[\u00C0-\u017E a-zA-Z']+$/,
                                message: "Only letters are allowed"
                            }
                        })}
                        placeholder="Type your first name here"
                    />
                </div>
                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label className="checkout__label">Last Name</label><h6 className="checkout__error">{errors.lastname?.message}</h6></div>
                    <input
                        className="input__field"
                        {...register("lastname", {
                            required: "Last name is required.",
                            pattern: {
                                value: /^[\u00C0-\u017E a-zA-Z']+$/,
                                message: "Only letters are allowed"
                            }
                        })}
                        placeholder="Type your last name here"
                    />
                </div>
                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label className="checkout__label">Email Address</label><h6 className="checkout__error">{errors.email?.message}</h6></div>
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
                    <div className="checkout__form__double_row">
                        <div className="checkout__form_half">
                            <div className="checkout__form_top"><label className="checkout__label">Date of Birth</label></div>
                            <Controller
                                name="date"
                                control={control}
                                defaultValue={null}
                                render={({ field }) => (
                                    <DatePicker
                                        onChange={(e) => field.onChange(e)}
                                        selected={field.value}
                                        placeholderText="DD.MM.YYYY"
                                        dateFormat="dd.MM.yyyy"
                                        className="input__field"
                                    />
                                )}
                            />
                        </div>
                        <div className="checkout__form_half">
                            <div className="checkout__form_top"><label className="checkout__label">Gender</label></div>
                            <select {...register("gender")} className="input__field">
                                <option value="other">Other</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label className="checkout__label">Address</label><h6 className="checkout__error">{errors.address?.message}</h6></div>
                    <input
                        className="input__field"
                        {...register("address", {
                            required: "Address is required.",
                        })}
                        placeholder="Type your address here"
                    />
                </div>

                <div className="checkout__form_row">
                    <div className="checkout__form_top"><label className="checkout__label">Zip code</label><h6 className="checkout__error">{errors.zip?.message}</h6></div>
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
                <div className="checkout__form_top">
                    <div >
                        <input type="checkbox" {...register("agreed", {
                            required: "Terms must be accepted."
                        })} className="checkout__form_checkbox" />
                        <label className="checkout__label">I agree</label>

                    </div>
                    <h6 className="checkout__error">{errors.agreed?.message}</h6>
                </div>
                <input type="submit" className="Checkout__form_btn" value={"Checkout"} />

            </form>
        </div>
    );
}

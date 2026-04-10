import React, { useEffect } from 'react';
import styles from "../../css/register/Form.module.css";
import FormHead from '../ui/FormHead';
import InputFeild from '../ui/InputFeild';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../../context/AuthContext";
import { save } from '../../utils/localStorage';

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            conofPass: "",
            type: "reader",
        },
        mode: "onChange"
    });
    const navigate = useNavigate();
    const { users, setUser, user, setUsers } = useAuth();


    useEffect(() => {
        if (JSON.stringify(user) !== "[]") navigate("/")
    }, [])

    const submiHandler = (data) => {
        let existUser = users.find((elem) => elem.email == data.email);

        if (existUser != undefined) {
            toast.error("Email already exits please sign in");
            return;
        }

        if (data.password !== data.confPas) {
            toast.error("Password and confirm password are not same");
            return;
        }

        toast.success("Sign up successfull");
        setUser(data);
        save("logUser", data);
        save('users', [...users, data]);
        setUsers(prev => [...prev, data]);
        data.type == "reader" ? navigate("/") : navigate("/dashboard");
    }

    const selectedType = watch("type");

    return (
        <div className={styles.box}>
            <FormHead head={"Create an Account"} subHead={'Join Inkwell to start reading or writing'} />
            <form onSubmit={handleSubmit(submiHandler)} className={styles.form}>
                <InputFeild label={"name"} type={"text"} placeHolder={"John Doe"} error={errors?.name?.message} {...register("name", { required: "Name is required" })} />
                <InputFeild label={"email"} type={"email"} placeHolder={"you@gmail.com"} error={errors?.email?.message} {...register("email", { required: "Email is required" })} />
                <InputFeild label={"password"} type={"password"} placeHolder={"Enter Your password"} error={errors?.password?.message} {...register("password", { required: "Password is required" })} />
                <InputFeild label={"Confirm Password"} type={"password"} placeHolder={"Confirm your Password"} error={errors?.confPas?.message} {...register("confPas", { required: "Confirm password is required" })} />

                <div className={styles.inputBox}>
                    <label htmlFor="reader" className={`${styles.label} ${selectedType == "reader" ? styles.active : ""}`}>
                        <h4 className={styles.lblHead}>Reader</h4>
                        <p className={styles.lblsubHead}>Read articles</p>
                    </label>
                    <input type="radio" name='type' value={'reader'} id='reader' style={{ display: 'none' }} {...register("type")} />
                    <label htmlFor="author" className={`${styles.label} ${selectedType == "author" ? styles.active : ""}`}>
                        <h4 className={styles.lblHead}>Author</h4>
                        <p className={styles.lblsubHead}>Write and Publish</p>
                    </label>
                    <input type="radio" name='type' value={"author"} id='author' style={{ display: 'none' }} {...register("type")} />
                </div>

                <button className={styles.submit} type='submit'>Submit</button>
            </form>
            <p className={styles.minTxt}>Already have a Account? <span className={styles.highlight} onClick={() => navigate("/register")}>login</span> </p>
            <ToastContainer />
        </div>
    )
}

export default Form

/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import styles from "./login.module.scss";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../../components/TextInput";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";

// Cntroller for uncontrolled Custom Components //
// const Login = () => {

//   const validSchema = Yup.object({
//         username: Yup.string().required().min(4),
//         password: Yup.string().required().min(8).max(12)
//       })

//       const {control , field , handleSubmit , formState: { errors }} = useForm({resolver:yupResolver(validSchema)})

//       const formHandle = (values) => {
//         console.log(values);

//       }
//       console.log(errors)
//   return (
//       <form onSubmit={handleSubmit(formHandle)}>
//         <Controller control={control}
//           name="username"
//           render={({field}) => {
//             return <TextInput
//               error={errors.username?.message}
//               label="username"
//               {...field}
//             />
//           }}
//         />
//         <Controller control={control}
//           name="password"
//           render={({field}) => {
//             return <TextInput
//               error={errors.password?.message}
//               label="password"
//               {...field}
//             />
//           }}
//         />
//         <button>submit</button>
//       </form>
//   )
// }

// forwardRef //
// const Login = () => {
//   const inpRef = useRef(null)

//   const {register , setValue , watch , handleSubmit} = useForm()

//   const formHandle = (values) => {
//     console.log(values);

//   }

//   return (
//       <form onSubmit={handleSubmit(formHandle)}>
//         <TextInput label="username" ref={inpRef}
//           {...register("username")}
//           value= {watch("username")}
//           onChange= {(e)=>setValue("username",e.target.value)}
//         />
//         <TextInput label="password" type='password' ref={inpRef}
//           {...register("password")}
//           value= {watch("password")}
//           onChange= {(e)=>setValue("password",e.target.value)}
//         />
//         <button>submit</button>
//       </form>
//   )
// }

// YUPPP //
const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [logStatus, setLogStatus] = useState("");

  const navigate = useNavigate();

  const validSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validSchema) });

  const submitForm = async ({ username, password }) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      console.log(response);

      if (response.status === 200) {
        setAuth(response.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      console.log("errr", error);
      setLogStatus(error.message);
    }
  };
  console.log(errors);

  if (auth) navigate("/");
  return (
    <div className={styles.form}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="userName">username</label>
        <input
          {...register("username")}
          type="text"
          name="username"
          id="username"
        />
        <span>{errors.username ? errors.username.message : ""}</span>

        <label htmlFor="password">password</label>
        <input
          {...register("password")}
          type="password"
          name="password"
          id="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        {logStatus !== "" && <span>{logStatus}</span>}

        <button onClick={() => console.log("AUTH", auth)}>submit</button>
      </form>

      <p className={styles.message}>
        authentication is implanted by dummyJSON's users' APIs. you can find a
        username and password in dummyJSON's list of users or use for example:
        <br></br>username: emilys<br></br>password: emilyspass
      </p>
    </div>
  );
};

// CONTROLLED COMPS //
// const Login = () => {
//   const [input , setInput] = useState({username:"",password:""})

//   return (
//     <div className={styles.form}>
//       <h1>Login</h1>

//       <form onSubmit={(e)=>{
//         e.preventDefault()
//         console.log(input);

//       }}>
//         <label htmlFor="userName">username</label>
//         <input type="text" name="" id="userName"
//           value={input.username}
//           onChange={(e)=>setInput({...input,username:e.target.value})}
//         />

//         <label htmlFor="password">password</label>
//         <input type="text" name="" id="password"
//           value={input.password}
//           onChange={(e)=>setInput({...input,password:e.target.value})}
//         />

//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

// UNCONTROLLED COMPS //
// const Login = () => {
//   const userInpRef = useRef(null)
//   const passInpRef = useRef(null)

//   const userInfo ={
//     userName:"",
//     password:""
//   }

//   return (
//     <div className={styles.form}>
//       <h1>Login</h1>

//       <form onSubmit={(e)=>{
//         e.preventDefault()

//         userInfo.userName=userInpRef.current?.value
//         userInfo.password=passInpRef.current?.value

//         console.log(userInfo);

//       }}>
//         <label htmlFor="userName">username</label>
//         <input ref={userInpRef} type="text" name="" id="userName" />

//         <label htmlFor="password">password</label>
//         <input ref={passInpRef} type="text" name="" id="password" />

//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

export default Login;

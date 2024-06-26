/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import logo from "../../assets/demo-logo.jpg"
import { useState } from "react";
import Swal from "sweetalert2";
const Register = () => {

    const [registerLoading, setRegisterLoading] = useState(false);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()

    const { createUser, updateUserProfile, logOut, verifyEmail } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const saveUserInfoDataBase = async (user) => {
        // console.log(user);

        // check user exist or not
        const { data } = await axiosSecure.get(`/users/${user?.email}`)
        console.log('is exist', data);

        if (!data?.exist) {
            // post user data database
            await axiosSecure.post("/users", user);
        }
    };

    const onSubmit = (data) => {
        // console.log(data)

        // if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]).{6,}$/.test(data?.password)) {
        //     return toast.error('Password have to be minimum 6 characters . It should include capital letter and special character')
        // }
        setRegisterLoading(true);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result?.user);
                updateUserProfile(data?.name, null)
                verifyEmail(result?.user)

                const user = {
                    name: data?.name,
                    email: data?.email,
                    image: "",
                    about: "",
                    phone: "",
                    addRequests: [],
                    contacts: [],
                };

                saveUserInfoDataBase(user);
                logOut()
                setRegisterLoading(false);
                Swal.fire({
                    title: "Verify Your Email!",
                    text: "A verification email has been sent to your email address. Please check your inbox and click on the verification link to complete the registration process.",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Go to Login"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login')
                    }
                });

                // toast.success('User Created Successfully')

                // navigate('/login')

            })
            .catch(error => {
                setRegisterLoading(false);
                console.log(error);
                toast.error(`${error.message}`)
            })
    }

    return (
        <div className='h-screen'>
            <div className="flex flex-col-reverse lg:flex-row h-screen rounded-lg">
                <div className="w-[50%] relative">
                    <img className='rounded-l-lg h-full hidden md:block object-cover' src="https://harnishdesign.net/demo/html/oxyy/images/login-bg.jpg" alt="" />
                    <div className="absolute bg-[#0D6EFD] h-screen w-full top-0 opacity-80">
                    </div>
                    <div className="absolute h-screen w-full top-0 text-white flex justify-center ">
                        <div className="w-[75%] mt-14">
                            <div className="flex gap-4 items-center">
                                <img src={logo} className="w-[56px] h-[56px] rounded-full" alt="" />
                                <h4 className="text-4xl font-bold">Easy Chat</h4>
                            </div>
                            <div className="mt-44">
                                <h2 className="text-5xl font-semibold leading-snug">Looks like you're new here!</h2>
                                <p className="mt-4 font-medium text-xl">Join our group in few minutes! Sign up with your details to get started</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex justify-center items-center'>
                    <div className='w-[65%]'>
                        <h2 className='text-3xl font-bold mb-6'>Sign Up</h2>

                        {/* Register form */}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div>
                                <h4 className='font-medium'>Full Name</h4>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder='Enter your name' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md text-lg' id="" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div>
                                <h4 className='font-medium'>Email Address</h4>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder='Enter your email' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md text-lg ' id="" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div>
                                <h4 className='font-medium'>Password</h4>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder='Enter your password' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md text-lg' id="" />
                                {errors.password && <span className='text-red-500'>Password is required</span>}
                            </div>
                            <div className='text-center'>
                                <button className='hover: bg-[#0D6EFD] w-full py-4 text-white font-bold rounded-lg'>

                                    {
                                        registerLoading ?
                                            <span className="loading loading-spinner loading-sm text-white">loading</span>
                                            :

                                            "Register"
                                    }
                                </button>
                            </div>
                        </form>
                        <p className='text-center mt-4'>Already have an account?
                            <span className='text-[#0D6EFD]'><Link to={'/login'}> Login</Link> </span>
                            now
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
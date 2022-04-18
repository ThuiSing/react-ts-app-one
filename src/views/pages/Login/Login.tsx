import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authAction from "redux/actions/authAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const dispatch = useDispatch();

  const onSubmit = (data: LoginData) => {
    dispatch(authAction(data));
  };
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl mb-5 font-semibold">Login Here broo</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-200 flex flex-col justify-center items-center w-1/2 h-72	mx-auto gap-3"
      >
        <input
          className="p-2 w-2/3"
          {...register("email", { required: true })}
          placeholder="Email"
        />

        <input
          className="p-2 w-2/3"
          {...register("password", { required: true })}
          placeholder="password"
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}

        <input
          type="submit"
          className="bg-white text-gray-700 py-2 px-3 font-semibold rounded cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;

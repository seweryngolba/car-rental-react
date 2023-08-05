import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./FormBox.css";

const FormBox = ({ onFormSubmit }) => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is required"),
    email: yup.string().email().required("Email is required"),
    age: yup
      .number()
      .typeError("Age is required field")
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .min(21, "You must be at least 21 years old")
      .required("Age is required field"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    phone: yup
      .string()
      .matches(/^[0-9]{9}$/, "Phone must be a 9-digit number")
      .required(),
    startDate: yup
      .date()
      .typeError("Choose start date")
      .required("Choose start date"),
    endDate: yup
      .date()
      .typeError("Choose end date")
      .required()
      .min(yup.ref("startDate"), "End date must be after start date"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    onFormSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formBox">
      <div className="inputGroup">
        <input type="text" {...register("fullName")} />
        <label>Full Name</label>
        <p>{errors.fullName?.message}</p>
      </div>
      <div className="inputGroup">
        <input type="email" {...register("email")} />
        <label>Email</label>
        <p>{errors.email?.message}</p>
      </div>
      <div className="inputGroup">
        <input type="number" {...register("age")} />
        <label>Age</label>
        <p>{errors.age?.message}</p>
      </div>
      <div className="inputGroup">
        <input type="text" {...register("address")} />
        <label>Address</label>
        <p>{errors.address?.message}</p>
      </div>
      <div className="inputGroup">
        <input type="text" {...register("city")} />
        <label>City</label>
        <p>{errors.city?.message}</p>
      </div>
      <div className="inputGroup">
        <input type="text" {...register("country")} />
        <label>Country</label>
        <p>{errors.country?.message}</p>
      </div>
      <div className="inputGroup">
        <input type="tel" {...register("phone")} />
        <label>Phone</label>
        <p>{errors.phone?.message}</p>
      </div>
      <div className="dateGroup">
        <input type="date" {...register("startDate")} />
        <label>Reservation Start</label>
        <p>{errors.startDate?.message}</p>
      </div>
      <div className="dateGroup">
        <input type="date" {...register("endDate")} />
        <label>Reservation End</label>
        <p>{errors.endDate?.message}</p>
      </div>
      <select className="carSelect" required {...register("car")}>
        <option>Audi R8</option>
        <option>Kia Stinger</option>
        <option>BMW M3</option>
        <option>Tesla 3</option>
      </select>

      <input className="submitBtn" type="submit" value="NEXT" />
    </form>
  );
};

export default FormBox;

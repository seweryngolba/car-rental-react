import { useForm } from "react-hook-form";
import "./FormBox.css";

const FormBox = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formBox">
      <div className="inputGroup">
        <input type="text" required {...register("name")} />
        <label>Name</label>
      </div>
      <div className="inputGroup">
        <input type="text" required {...register("surname")} />
        <label>Surname</label>
      </div>
      <div className="inputGroup">
        <input type="email" required {...register("email")} />
        <label>Email</label>
      </div>
      <div className="inputGroup">
        <input type="number" required {...register("age")} />
        <label>Age</label>
      </div>
      <div className="inputGroup">
        <input type="text" required {...register("address")} />
        <label>Address</label>
      </div>
      <div className="inputGroup">
        <input type="text" required {...register("city")} />
        <label>City</label>
      </div>
      <div className="inputGroup">
        <input type="text" required {...register("country")} />
        <label>Country</label>
      </div>
      <div className="inputGroup">
        <input type="tel" required {...register("phone")} />
        <label>Phone</label>
      </div>
      <div className="dateGroup">
        <input type="date" required {...register("startDate")} />
        <label>Reservation Start</label>
      </div>
      <div className="dateGroup">
        <input type="date" required {...register("endDate")} />
        <label>Reservation End</label>
      </div>
      <div className="selectGroup">
        <select className="carSelect" required {...register("car")}>
          <option value={250}>Audi R8</option>
          <option value={150}>Kia Stinger</option>
          <option value={180}>BMW M3</option>
          <option value={120}>Tesla 3</option>
        </select>
      </div>
      <input type="submit" value="NEXT" />
    </form>
  );
};

export default FormBox;

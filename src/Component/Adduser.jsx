import React, { useEffect, useState } from "react";
import "../Style/Add.css";
import { createUser } from "../redux/slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Adduser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, data, response, error } = useSelector((state) => {
    return {
      loading: state?.user?.isLoading,
      data: state?.user?.data,
      error: state?.user?.error,
      response: state?.user?.response,
    };
  });
 

  useEffect(() => {
    if (response?.status == "success") {
      toast.success("Add Expenses Successfully!");
      navigate("/showExp");
    }
  }, [response]);

  const onSubmit = (data) => {
    dispatch(createUser(data));
  };
  if (loading) {
    return (
      <div class="center">
        <h1>Loading...</h1>
        <div class="loader"></div>
      </div>
    );
  }
  if(error){
    return (
      <div class="center">
        <h1>Loading...</h1>
        <div class="loader"></div>
      </div>
    );

  }

  return (
    <div
      className="container"
      style={{ alignContent: "center", marginTop: "100px" }}
    >
      <div className="title">Add Expenses</div>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Date</span>
              <input
                type="date"
                placeholder="Choose a date"
                {...register("ex_date", { required: true })}
              />
              {errors.Date && <p>Date is required.</p>}
            </div>
            <div className="input-box">
              <span className="details">Category</span>
              <input
                type="text"
                placeholder=" Category"
                {...register("ex_category", { required: true })}
              />
              {errors.Category && <p>Category is required.</p>}
            </div>
            <div className="input-box">
              <span className="details">Amount</span>
              <input
                type="number"
                placeholder="Amount"
                name="amount"
                {...register("ex_amount", { required: true })}
              />
              {errors.Amount && <p> required.</p>}
            </div>
            <div className="input-box">
              <span className="details">Payment Mode</span>
              <select
                className="ser"
                {...register("ex_payment_mode", { required: true })}
              >
                <option value="">Select Payment Option</option>
                <option value="cash">Cash</option>
                <option value="online">Online</option>
                <option value="Net Banking">Net Banking</option>
                <option value="upi">Upi</option>
              </select>
              {errors.option && <p>required.</p>}
            </div>

            <div className="input-box">
              <span className="details"> Vendor</span>
              <input
                type="text"
                placeholder="vendor"
                {...register("ex_vendor", { required: true })}
              />
              {errors.Vendor && <p>Vendor is required.</p>}
            </div>
            <div className="input-box">
              <span className="details"> Description</span>
              <input
                type="text"
                placeholder="Description"
                {...register("ex_description", { required: true })}
              />
              {errors.Description && <p> required.</p>}
            </div>
            <div className="input-box">
              <span className="details">Receipt</span>
              <input
                type="file"
                {...register("ex_receipt", { required: true })}
              />
              {errors.Receipt && <p>required.</p>}
            </div>
            <div className="input-box">
              <span className="details">Payment by</span>
              <input
                type="text"
                placeholder="payment"
                {...register("ex_payment_by", { required: true })}
              />
              {errors.payment && <p>required.</p>}
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Add Expenses" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adduser;

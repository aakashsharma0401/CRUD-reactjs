import React, { useEffect, useState } from "react";
import { useSelector, UseDispatch, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { SingleExp, updateExp } from "../redux/slice/UserSlice";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";


const Update = () => {
  const { ex_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { listData, loading, response, error } = useSelector((state) => {
    return {
      listData: state?.user?.data,
      loading: state?.user?.isLoading,
      response: state.user?.response,
      error: state?.user?.error,
    };
  });
  
  useEffect(()=>{
    if(response?.data){
      setValue("ex_date",response?.data?.ex_date)
      setValue("ex_category",response?.data?.ex_category)
      setValue("ex_amount",response?.data?.ex_amount)
      setValue("ex_payment_mode",response?.data?.ex_payment_mode)
      setValue("ex_description",response?.data?.ex_description)
      setValue("ex_payment_by",response?.data?.ex_payment_by)
      setValue("ex_vendor",response?.data?.ex_vendor)
    }

  },[response])

  useEffect(() => {
    dispatch(SingleExp(ex_id));
  }, []);

  const onSubmit = (data) => {
    const body = {
      id : ex_id,
      data : data
    }
    dispatch(updateExp(body));
    toast.success("Update Expenses Successfully");
    navigate("/showExp");
  };
 

  return (
    <div>
      <div
        className="container"
        style={{ alignContent: "center", marginTop: "100px" }}
      >
        <div className="title">Update Expenses</div>
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
                  type="text"
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
              <input type="submit" value="Update" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

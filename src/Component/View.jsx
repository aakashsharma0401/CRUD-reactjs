import React, { useEffect } from "react";
import "../Style/Add.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SingleExp } from "../redux/slice/UserSlice";
import { useForm } from "react-hook-form";

const View = () => {
  const { ex_id } = useParams();
  const dispatch = useDispatch();
  const { register, setValue } = useForm();
  const { listData, loading, response, error } = useSelector((state) => {
    return {
      listData: state?.user?.data,
      loading: state?.user?.isLoading,
      response: state.user?.response,
      error: state?.user?.error,
    };
  });

  console.log(33, response?.data.ex_category);
  console.log(90, response?.data);
  useEffect(() => {
    dispatch(SingleExp(ex_id));
  }, []);

  return (
    <>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">
          <h1
            style={{
              color: "navy",
              alignItems: "center",
              textAlign: "center",
              borderBottom: "1px solid black",
              fontFamily: "cursive",
              textDecoration: "none",
              textAnchor: "none",
            }}
          >
            Expenses
          </h1>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "fantasy",
              alignContent: "flex-end",
            }}
            className="btn btn-primary"
          >
            Home
          </Link>
        </a>
      </nav>
      <div className="container-fluid">
        <table class="table bg-info">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Payment_mode</th>
              <th>Vendor</th>
              <th>Description</th>
              <th>Receipt</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{response?.data?.ex_date}</td>
              <td scope="row">{response?.data?.ex_category}</td>
              <td scope="row">{response?.data?.ex_amount}</td>
              <td scope="row">{response?.data?.ex_payment_mode}</td>
              <td scope="row">{response?.data?.ex_vendor}</td>
              <td scope="row">{response?.data?.ex_description}</td>
              <td scope="row">
              
                <img
                  alt="img"
                  src={response?.data?.ex_receipt}
                  style={{ width: "200px" }}
                />
              </td>
              <th scope="row">{response?.data?.ex_payment_by}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;

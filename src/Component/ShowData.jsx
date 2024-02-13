import React, { useEffect, useState } from "react";
import "../Style/Show.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/UserSlice";
import { Link } from "react-router-dom";
import { deleteExp } from "../redux/slice/UserSlice";

const ShowData = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showData, setShowData] = useState([]);

  const dispatch = useDispatch();
  const { listData, loading, response, error } = useSelector((state) => {
    return {
      listData: state?.user?.data,
      loading: state?.user?.isLoading,
      response: state.user?.response,
      error: state?.user?.error,
    };
  });
  
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setShowData(listData?.data);
    } else {
      const filterData = listData?.data?.filter(
        (listData) =>
          listData.ex_category.toLowerCase().includes(searchValue) ||
          listData.ex_amount.toLowerCase().includes(searchValue) ||
          listData.ex_payment_mode.toLowerCase().includes(searchValue) ||
          listData.ex_vendor.toLowerCase().includes(searchValue) ||
          listData.ex_description.toLowerCase().includes(searchValue)
      );
      setShowData(filterData);
    }
  }, [searchValue]);

  if (loading) {
    return (
      <>
        <div class="center">
          <h1>Loading...</h1>
          <div class="loader"></div>
        </div>
      </>
    );
  }

  return (
    <div className="show">
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
        </a>
        <div className="input-group">
          <input
            type="search"
            className="form-control bg-outline-info rounded"
            placeholder="Search Expenses"
            aria-label="Search"
            aria-describedby="search-addon"
            name="searchValue"
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
        </div>
      </nav>
      <div className="container-fluid">
        <table id="customers">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Payment_mode</th>
              <th>Vendor</th>
              <th>Description</th>
              <th>Receipt</th>
              <th>Payment</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {showData?.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.ex_date}</td>
                  <td> {e.ex_category} </td>
                  <td>{e.ex_amount}</td>
                  <td>{e.ex_payment_mode}</td>
                  <td>{e.ex_vendor}</td>
                  <td>{e.ex_description}</td>

                  <td>
                    <img
                      alt="img"
                      src={e.ex_receipt}
                      style={{ width: "200px" }}
                    />
                  </td>
                  <td> {e.ex_payment_by} </td>
                  <td>
                    <button className="btn btn-outline-warning">
                      <Link
                        to={`/View/${e.ex_id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        View
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-info">
                      <Link
                        to={`/update/${e.ex_id}`}
                        style={{ textDecoration: "none", color: "skyblue" }}
                      >
                        Update
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger">
                      <Link
                        style={{ textDecoration: "none", color: "red" }}
                        onClick={() => dispatch(deleteExp(e.ex_id))}
                      >
                        Delete
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowData;

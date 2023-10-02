import React, { useState } from "react";
import Axios from "axios";

const AddAddress = () => {

  const [isAlertVisible, setIsAlertVisible] = React.useState(false);

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsAlertVisible(true);
    try {
      const reqData = {
        "title": title,
        "address": address,
      }
      Axios.post("https://admin-staging.wowtruck.in/webservice/save_address", reqData)
        .then((saveResponse) => {
          if (saveResponse.status === 200) {
            setTitle("");
            setAddress("");
            setMessage('Saved successfully..!')
            setTimeout(() => {
              setIsAlertVisible(false);
            }, 1000);
          } else {
            setMessage("Some error occured");
          }
        })
        .catch((error) => {console.log("Error! ",error)});

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="AddAddress">
        <div className="row">
          <div className="col-lg-3">

            <div className="row">
              <div className="registertitle">
                Add Addresses
              </div>
            </div>

            <div className="row"><p></p></div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <input
                    style={{ marginLeft: "8px", height: "50px", fontSize: "14px" }}
                    type="text"
                    value={title}
                    placeholder="Address Title"
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="row"><p></p></div>

              <div className="row booking">
                <div className="col-md-12">
                  <textarea
                    placeholder=" Address Details"
                    onChange={(e) => setAddress(e.target.value)}
                    cols={51}
                    rows={7}
                    style={{ marginLeft: "8px", fontSize: "14px", resize: "none" }}
                    className="form-control"
                    value={address}
                  > {address} </textarea>
                </div>
              </div>

              <div className="row"><p></p></div>

              <div className="row col-md-12">
                <button
                  type="submit"
                  className="btn-blue"
                  id="submit"
                  style={{ marginTop: "25px", marginLeft: "14px" }}
                >
                  Save
                </button>
              </div>
              {isAlertVisible && <div className='alert-container'>
                <div className='alert-inner'>
                  <div className="message">{message ? <p>{message}</p> : null}</div>
                </div>
              </div>}
            </form>
          </div>
          <div className="col-lg-9">
            <img src="images/booking-img/booking-02.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAddress;
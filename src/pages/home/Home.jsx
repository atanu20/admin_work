import React, { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import { dataList, projectData } from "../../data/fdata";
import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [projectDataList, setprojectDataList] = useState(projectData);
  const his=useHistory()

  const [account, setAccount] = useState("");
  const [valuestream, setValueStream] = useState("");
  const [valuestreamarray, setValueStreamArray] = useState([]);
  const [Squad, setSquad] = useState("");
  const [Squadarray, setSquadArray] = useState([]);

  const [alldata, setAllData] = useState([]);
  const [alldataFilter, setAllDataFilter] = useState("implemented_project");
  const [stype, setSType] = useState("text");
  const [etype, setEType] = useState("text");
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");

  const [ppmNo, setPpmNo] = useState("");
  const [tc_EX, setTc_EX] = useState("");
  const [tc_Auto, setTc_Auto] = useState("");
  const [tDefect, setTDefect] = useState("");
  const [dDefect, setDDefect] = useState("");
  const [comments, setComments] = useState("");
  const [prostatus, setProstatus] = useState("");

  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [coll, setColl] = useState(false);
  const [msg, setMsg] = useState("");

  const onFilterSub = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {

    if(!localStorage.getItem("user_login"))
    {
      his.push("/login")
    }



    getData()
  }, []);

  const getData=async()=>{
    // console.log(projectDataList)
    // setAllData(projectDataList.filter((v) => v.status == alldataFilter));
    
  }

  const HandelInput = (e) => {
    setAllDataFilter(e.target.value);
    setAllData(projectDataList.filter((v) => v.status == e.target.value));
  };
  const HandelStartDate = async (e) => {
    console.log(e.target.value);
    setSDate(e.target.value);
  };

  const HandelEndDate = async (e) => {
    console.log(e.target.value);
    setEDate(e.target.value);
  };

  const onAddData = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    const data={
      accountid:123,
        valuestream:"a1",
        squard:"a11",
        status:prostatus,
        projectdetails:{
          "ppm_number":ppmNo,
          "total_tc_ex":tc_EX,
          "total_tc_ex_auto": tc_Auto,
          "total_defect": tDefect,
          "defect_deferred": dDefect,
          "last_update_by": 'atanu',
          "comments":comments,
          p_id:"1"
      }
    }
// console.log(data)

    setAllData([])
    setprojectDataList([data,...projectDataList])
  

    setTimeout(() => {
      setLoading(false);
      setShowPopUp(false)
    }, 2000);
    document.querySelector('#root').classList.remove('disable-scroll');
    
  };
// console.log(projectDataList)
// console.log(alldata)

  return (
    <>
      <div className="hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12 mx-auto">
              <div className="row">
                <div className="col-12 mb-4">
                  <div class="homebox">
                    <div class="">
                      <form onSubmit={onFilterSub}>
                        <p className="m-0 pl-2 pt-2">
                          <i
                            class="fa fa-sort-amount-desc"
                            aria-hidden="true"
                          ></i>{" "}
                          Filtered By &nbsp;{" "}
                          {account.trim().length > 0 && (
                            <span
                              className="sm_span"
                              onClick={() => {
                                setAccount("");

                                setSquad("");
                                setSquadArray([]);
                                setValueStream("");
                                setValueStreamArray([]);
                              }}
                            >
                              {" "}
                              Account &times;{" "}
                            </span>
                          )}{" "}
                          &nbsp;{" "}
                          {valuestream.trim().length > 0 && (
                            <span
                              className="sm_span"
                              onClick={() => {
                                setSquad("");
                                setSquadArray([]);
                                setValueStream("");
                                setValueStreamArray([]);
                              }}
                            >
                              {" "}
                              ValueStream &times;{" "}
                            </span>
                          )}
                          &nbsp;{" "}
                          {Squad.trim().length > 0 && (
                            <span
                              className="sm_span"
                              onClick={() => {
                                setSquad("");
                                setSquadArray([]);
                              }}
                            >
                              {" "}
                              Squad &times;{" "}
                            </span>
                          )}
                        </p>
                        <hr />
                        <div class="searchbox">
                          <select
                            class="inputbox inputone input_col"
                            value={account}
                            onChange={(e) => {
                              setAccount(e.target.value);
                              let arr = dataList.filter(
                                (v) => v.account == e.target.value
                              );
                              setValueStreamArray(arr[0].valuestream);
                            }}
                            required
                          >
                            <option value="" hidden selected>
                              Account
                            </option>
                            {dataList.map((val, ind) => {
                              return (
                                <>
                                  <option value={val.account} key={ind}>
                                    {val.account}
                                  </option>
                                </>
                              );
                            })}
                          </select>

                          <select
                            class="inputbox inputone input_col"
                            value={valuestream}
                            onChange={(e) => {
                              setValueStream(e.target.value);
                              let arr = valuestreamarray.filter(
                                (v) => v.valuestreamTitle == e.target.value
                              );
                              setSquadArray(arr[0].valuestreamArray);
                            }}
                            required
                          >
                            <option value="" hidden selected>
                              Value Stream
                            </option>
                            {valuestreamarray.map((val, ind) => {
                              return (
                                <>
                                  <option
                                    value={val.valuestreamTitle}
                                    key={ind}
                                  >
                                    {val.valuestreamTitle}
                                  </option>
                                </>
                              );
                            })}
                          </select>

                          <select
                            class="inputbox input_col"
                            value={Squad}
                            onChange={(e) => setSquad(e.target.value)}
                            required
                          >
                            <option value="" hidden selected>
                              Squad
                            </option>
                            {Squadarray.map((val, ind) => {
                              return (
                                <>
                                  <option value={val} key={ind}>
                                    {val}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                          <button class="btn btn-primary search_Dev">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-4 col-md-6 col-12 mx-auto mb-3">
                  <div className="card p-3">
                    <h1>
                      {
                        projectDataList.filter(
                          (v) => v.status == "implemented_project"
                        ).length
                      }
                      +
                    </h1>
                    <p>Implemented Projects</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mx-auto mb-3">
                  <div className="card p-3">
                    <h1>
                      {
                        projectDataList.filter((v) => v.status == "ongoing_project")
                          .length
                      }
                      +
                    </h1>
                    <p>Ongoing Projects</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mx-auto mb-3">
                  <div className="card p-3">
                    <h1>
                      {
                        projectDataList.filter(
                          (v) => v.status == "upcoming_project"
                        ).length
                      }
                      +
                    </h1>
                    <p>Upcoming Projects</p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 ">
                  <div className="card p-2">
                    <div className="d_flex">
                      <div className="ddd_flex date_inpu">
                        <div class="form-group mr-1">
                          <input
                            type={stype}
                            placeholder="Enter Start Date"
                            onFocus={() => setSType("date")}
                            onBlur={() => setSType("text")}
                            value={sDate}
                            onChange={HandelStartDate}
                          />
                        </div>
                        <div class="form-group ml-1">
                          <input
                            type={etype}
                            placeholder="Enter End Date"
                            onFocus={() => setEType("date")}
                            onBlur={() => setEType("text")}
                            value={eDate}
                            onChange={HandelEndDate}
                          />
                        </div>
                      </div>

                      <div className="dd_flex">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            document.querySelector('#root').classList.add('disable-scroll');
                           
                            setShowPopUp(true)}}
                        >
                          Add +
                        </button>
                        <div class="form-group">
                          <select
                            class="form-control"
                            id="sel1"
                            value={alldataFilter}
                            onChange={HandelInput}
                          >
                            <option value="implemented_project">
                              Implemented Project
                            </option>
                            <option value="ongoing_project">
                              Ongoing Project
                            </option>
                            <option value="upcoming_project">
                              Upcoming Project
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-bordered ">
                        <thead>
                          <tr>
                            <th>PPM Number</th>
                            <th>Total TC Executed</th>
                            <th>Total TC Executed Through Automation </th>
                            <th>Total Defect</th>
                            <th>Deferred Defect</th>
                            <th>Last Updated by User</th>
                            <th>Comments</th>
                            <th>Operation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {projectDataList.filter((v) => v.status == alldataFilter).map((val, ind) => {
                            return (
                              <>
                                <tr key={ind}>
                                  <td>{val.projectdetails.ppm_number}</td>
                                  <td>{val.projectdetails.total_tc_ex}</td>
                                  <td>{val.projectdetails.total_tc_ex_auto}</td>
                                  <td>{val.projectdetails.total_defect}</td>
                                  <td>{val.projectdetails.defect_deferred}</td>
                                  <td>{val.projectdetails.last_update_by}</td>
                                  <td>{val.projectdetails.comments}</td>
                                  <td>
                                    {alldataFilter != "upcoming_project" && (
                                      <>
                                        <button className="btn btn-primary pt-1 pb-1 pl-2 pr-2 mr-2">
                                          <i className="fa fa-edit"></i>
                                        </button>
                                        <button className="btn btn-danger pt-1 pb-1 pl-2 pr-2 ml-2">
                                          <i className="fa fa-trash"></i>
                                        </button>
                                      </>
                                    )}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopUp && (
        <div className="model_box">
          <div className="inner_model">
            <div className="cross" onClick={() => {
              
              document.querySelector('#root').classList.remove('disable-scroll');
             
              setShowPopUp(false)}}>
              &times;
            </div>
            <form onSubmit={onAddData}>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label htmlFor="">Project Status</label>
                <select
                  class="form-control"
                  id="sel1"
                  value={prostatus}
                  onChange={(e) => setProstatus(e.target.value)}
                  required
                >
                  <option value="" hidden selected>--project status--</option>
                  <option value="implemented_project">
                    Implemented Project
                  </option>
                  <option value="ongoing_project">Ongoing Project</option>
                  <option value="upcoming_project">Upcoming Project</option>
                </select>
              </div>
              <div className="form-group col-md-6 ">
                <label htmlFor="">PPM No</label>
                <input
                  type="text"
                  className="form-control"
                  name="ppmno"
                  value={ppmNo}
                  onChange={(e) => setPpmNo(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              </div>
              <div class="form-row">
              <div className="form-group col-md-6 ">
                <label htmlFor="">Total Tc Executed</label>
                <input
                  type="text"
                  className="form-control"
                  name="tc_ex"
                  value={tc_EX}
                  onChange={(e) => setTc_EX(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Total Tc Executed Through Automation</label>
                <input
                  type="text"
                  className="form-control"
                  name="tc_ex_auto"
                  value={tc_Auto}
                  onChange={(e) => setTc_Auto(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              </div>
              <div class="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">Total Defect</label>
                <input
                  type="text"
                  className="form-control"
                  name="tDefect"
                  value={tDefect}
                  onChange={(e) => setTDefect(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="">Deferred Defect</label>
                <input
                  type="text"
                  className="form-control"
                  name="dDefect"
                  value={dDefect}
                  onChange={(e) => setDDefect(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
</div>
              <div class="form-group">
                <label for="comment">Comments:</label>
                <textarea
                  class="form-control"
                  placeholder="Write Comments"
                  rows="2"
                  name="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>
              </div>

              <div className="text-center ">
                <button
                  type="submit"
                  className={
                    loading ? "dis btn btn-primary" : "btn btn-primary"
                  }
                  disabled={loading}
                >
                  Add Data
                </button>
              </div>
              {loading && (
                <div className="text-center p-2">
                  <CircularProgress  size={45} />
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

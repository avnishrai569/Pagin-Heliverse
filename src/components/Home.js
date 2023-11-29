import React, { useState } from 'react'
import { createRef } from 'react';
import { Data } from './Data';
import ReactPaginate from 'react-paginate';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  // const [details, setDetails] = useState(0)
  const [filterData, setfilterData] = useState([]);
  const [pageNo, setPageNo] = useState(0)
  const searchInpref = createRef();
  const domainInpref = createRef();
  const genderInputref = createRef();
  const availabilityFilterref = createRef();
  const perpage = 20;
  const pagevisit = pageNo * perpage;
  const data = Data.slice(pagevisit, pagevisit + perpage);
  const boxno = Math.ceil(Data.length / perpage)
  const pageChange = ({ selected }) => {
    setPageNo(selected)
  }

  function updateUserList() {
    const inputText = searchInpref.current.value;
    // console.log('inputText', inputText);
    const domaintext = domainInpref.current.value;
    // console.log('domaintext', domaintext);
    const gendertext = genderInputref.current.value;
    // console.log('gender', gendertext);
    const availability = availabilityFilterref.current.value;

    const filterDataa = Data.filter(user =>
      user.first_name.toLowerCase().includes( inputText.length ===0 || inputText.toLowerCase()))
      // console.log("fileterdata",filterDataa)
      .filter(item =>  (  domaintext.includes("Select the Domain") || domaintext.includes(item.domain))) 
      .filter(item =>( gendertext.includes("Gender") || gendertext.includes(item.gender)))
      .filter(item =>( availability.includes("Availability") || availability.includes(item.available)))
    

    console.log("inputtext",inputText);
    console.log("Domailtext",domaintext);
    console.log('fileredata',filterDataa);
    setfilterData(filterDataa);
    //    .map((user,index) => {
    //     <div className="col-lg-3 col-md-3 col-6  mb-3">
  
    // }
  }
  return (

    <>
      <h1>User Search</h1>
      <div style={{ display: 'flex' }}>
        {/* <label for="searchInput">Search by Name:</label>
<input type="text" ref={searchInpref} id="searchInput" onChange={ () => updateUserList()} placeholder="Type a name..."/> */}

        <div class="input-group mb-1">
          <input type="text" ref={searchInpref} id="searchInput" onChange={() => updateUserList()} class="form-control" placeholder="Search by username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>

        {/* <div>
  
</div> */}
        <select class="form-select" ref={domainInpref} onChange={() => updateUserList()} aria-label="Default select example">
          <option selected  >Select the Domain</option>
          <option value="Finance">Finance</option>
          <option value="IT">IT</option>
          <option value="Management">Management</option>
          <option value="Sales">Sales</option>
          <option value="UI Designing">UI Designing</option>

        </select>

        {/* <div>
 
</div> */}
        <select class="form-select" ref={genderInputref} onChange={() => updateUserList()} aria-label="Default select example">
          <option selected >Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {/* <div>
  
</div> */}
        <select class="form-select" ref={availabilityFilterref} onChange={() => updateUserList()} aria-label="Default select example">
          <option selected  >Availability</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>


        <div id="userList">

        </div>
      </div>

      <div className="box">
        <div className="container">
          <div className="row">

            {filterData.length > 0 ? (
              filterData.map((value, ind) => (
                <div className="col-lg-3 col-md-3 col-6 mb-3" key={ind}>
                  <div className="card">
                    <div className="sml mb-2" key={ind}>
                      <img src={value.avatar} alt={value.first_name} />
                      <span>{value.id}</span>
                    </div>
                    <h2>{value.first_name} {value.last_name}</h2>
                    <h5>{value.email}</h5>
                    <p>{value.gender}</p>
                    <span>{value.domain}</span>
                    <span>{value.available}</span>
                  </div>
                </div>
              ))
            ) : (
              data.map((value, ind) => (
                <div className="col-lg-3 col-md-3 col-6 mb-3" key={ind}>
                  <div className="card">
                    <div className="sml mb-2" key={ind}>
                      <img src={value.avatar} alt={value.first_name} />
                      <span>{value.id}</span>
                    </div>
                    <h2>{value.first_name} {value.last_name}</h2>
                    <h5>{value.email}</h5>
                    <p>{value.gender}</p>
                    <span>{value.domain}</span>
                    <span>{value.available}</span>
                  </div>
                </div>
              ))
            )}
          </div>
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={boxno}
            onPageChange={pageChange}
            containerClassName={"pagination"}
         
            activeClassName={"activebutton"}
          />
        </div>
        <br /> <br />
      </div>
    </>
  )
}

export default Home;

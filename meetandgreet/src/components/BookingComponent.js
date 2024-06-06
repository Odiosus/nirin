import React, { useContext } from "react";
import { useState } from "react";
import { MyContext } from "../Context";
import axios from "axios";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import VirtualizedSelect from 'react-virtualized-select'
import Select from 'react-select'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./SearchBar.css";
import $ from "jquery";


export default function BookingComponent() {

$(".dataItem").on("click", function () {
  $(".dataResult").toggle();
});

    const contextData = useContext(MyContext);
    const {
    services,
    airports,
    name,
  } = contextData;


let airportList = airports;
let serviceList = services;

console.log(airports);
console.log(services);

const [filteredData, setFilteredData, filteredDataService, setFilteredDataService] = useState([]);
const [wordEntered, setWordEntered, wordEnteredService, setWordEnteredService] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const air = setWordEntered(searchWord);
    data.airport = air;

    const newFilter = airportList.filter((value) => {
      return value.airport_name.toLowerCase().includes(searchWord.toLowerCase()) || value.iata.toLowerCase().includes(searchWord.toLowerCase())
      || value.country.toLowerCase().includes(searchWord.toLowerCase()) || value.city.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleFilterServices = (event) => {
    const searchWord = event.target.value;
    const serv = setWordEntered(searchWord);
    data.service = serv;

    const newFilter = serviceList.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) || value.desc.toLowerCase().includes(searchWord.toLowerCase())
      || value.price.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleFilterServices2 = (event) => {
    const searchWord = event.target.value;
    const serv = setWordEntered(searchWord);
    data.service = serv;

    const newFilter = serviceList.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) || value.desc.toLowerCase().includes(searchWord.toLowerCase())
      || value.price.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInputService = () => {
    setFilteredDataService([]);
    setWordEnteredService("");
  };

  const context = useContext(MyContext);
  const token = context.token;
  const user_id = parseInt(context.user_id);
  const [data, setData] = useState({
    customername: "",
    phone_number: "",
    email: "",
    airport: [],
    flight: "",
    booking_date: "",
    numberofpassengers: "",
    service: [],
    note: "",
  });

  const isValid = () => {
    const phone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    if (!phone.test(data.phone_number)) {
      document.getElementById("phoneID").style.display = "block";
      document.getElementById("phone").innerHTML = "Invalid Phone Number";
      return false;
    }
    document.getElementById("phoneID").style.display = "none";
    document.getElementById("phone").innerHTML = "";

    if (new Date(data.checkout_date) < new Date(data.checking_date)) {
      document.getElementById("checkoutID").style.display = "block";
      document.getElementById("checkout").innerHTML =
        "Checkout Date should be greater than Checkin Date";
      return false;
    }
    document.getElementById("checkoutID").style.display = "none";
    document.getElementById("checkout").innerHTML = "";
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let isFormValid = isValid();
    let bookingDate = {
      customername: data.customername,
      phone_number: data.phone_number,
      email: data.email,
      airport: data.airport,
      flight: data.flight,
      booking_date: data.booking_date,
      numberofpassengers: data.numberofpassengers,
      service: data.service,
      note: data.note,
    };
    console.log(bookingDate);
    if (isFormValid) {
      const config = {
      };
      axios
        .post("/service/book/", bookingDate, config)
        .then((response) => {
          setData(
            {
              customername: "",
              phone_number: "",
              email: "",
              airport: [],
              flight: "",
              booking_date: "",
              numberofpassengers: "",
              service: [],
              note: "",
            },
          );
          return response.data;
        })
        .then((response) => {
          document.getElementById(
            "common-message"
          ).innerHTML = `${response["response"]}`;
          setTimeout(function () {
            document.getElementById("common-message").innerHTML = "";
          }, 3000);
        })
        .catch((error) => {
        });
    }
  };

  return (
    <form className="booking-form mt-5" onSubmit={handleSubmit}>
     <div className="search">
      <div className="searchInputs">
        <input
          id="uiair"
          type="text"
          placeholder="Аэропорты"
          value={data.airportui}
          onChange={handleFilter}
          name="airport_nameui"
        />
        <input
          type="hidden"
          placeholder="Аэропорты"
          value={data.airport}
          onChange={handleFilter}
          name="airport"
        />
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 25).map((value, key) => {
            return (
              <a className="dataItem" onClick={(event) => {setData({...data, airport : value}); $('#uiair').val(value.airport_name); console.log(value)}}>
                <p>{value.airport_name}</p>
                <p>{value.iata}</p>
                <p>{value.city}</p>
                <p>{value.country}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>

    <div className="search2">
      <div className="searchInputs2">
        <input
          id="uiair2"
          type="text"
          placeholder="Аэропорты"
          value={data.airportui2}
          onChange={handleFilter}
          name="airport_nameui2"
        />
        <input
          type="hidden"
          placeholder="Аэропорты"
          value={data.airport2}
          onChange={handleFilter}
          name="airport2"
        />
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult2">
          {filteredData.slice(0, 25).map((value, key) => {
            return (
              <a className="dataItem2" onClick={(event) => {setData({...data, airport : value}); $('#uiair2').val(value.airport_name); console.log(value)}}>
                <p>{value.airport_name}</p>
                <p>{value.iata}</p>
                <p>{value.city}</p>
                <p>{value.country}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>

    <div className="row">
        <TextInput
          divClass="form-group col-md-6 m-auto"
          htmlForLabel="inputCustomerName"
          labelName="Ф.И.О."
          inputClass="form-control"
          inputType="text"
          inputName="customername"
          inputValue={data.customername}
          inputPlaceHolder="Enter Ф.И.О."
          onChange={(event) => setData({ ...data, customername: event.target.value })}
          required={true}
        />
      </div>

      <div className="row">
        <TextInput
          divClass="form-group col-md-6 m-auto"
          htmlForLabel="inputPhoneNumber"
          labelName="Ваш телефон"
          inputClass="form-control"
          inputType="text"
          inputName="phone_number"
          inputValue={data.phone_number}
          inputPlaceHolder="Ваш телефон"
          onChange={(event) =>
            setData({ ...data, phone_number: event.target.value })
          }
          required={true}
        />
      </div>

      <div className="row">
        <TextInput
          divClass="form-group col-md-6 m-auto"
          htmlForLabel="inputEmail"
          labelName="Ваш email"
          inputClass="form-control"
          inputType="email"
          inputName="email"
          inputValue={data.email}
          inputPlaceHolder="Ваш email"
          onChange={(event) => setData({ ...data, email: event.target.value })}
          required={true}
        />
      </div>

      <div className="row" id="phoneID" style={{ display: "none" }}>
        <div className="form-group col-md-6 m-auto text-danger">
          <p id="phone"></p>
        </div>
      </div>

      <div className="row">
        <TextInput
          divClass="form-group col-md-6 m-auto"
          htmlForLabel="inputFlight"
          labelName="Рейс"
          inputClass="form-control"
          inputType="text"
          inputName="flight"
          inputValue={data.flight}
          onChange={(event) =>
            setData({ ...data, flight: event.target.value })
          }
          required={true}
        />
      </div>

      <div className="row">
        <TextInput
          divClass="form-group col-md-6 m-auto"
          htmlForLabel="inputBookingDate"
          labelName="Дата вылета"
          inputClass="form-control"
          inputType="datetime-local"
          inputName="booking_date"
          inputValue={data.booking_date}
          inputPlaceHolder="Дата вылета"
          onChange={(event) =>
            setData({ ...data, booking_date: event.target.value })
          }
          required={true}
        />
      </div>

      <div className="row" id="checkoutID" style={{ display: "none" }}>
        <div className="form-group col-md-6 m-auto text-danger">
          <p id="checkout"></p>
        </div>
      </div>

      <div className="row">
        <TextInput
          divClass="form-group col-md-6 m-auto"
          htmlForLabel="inputPassengers"
          labelName="Количество пассажиров"
          inputClass="form-control"
          inputType="text"
          inputName="numberofpassengers"
          inputValue={data.numberofpassengers}
          inputPlaceHolder="Количество пассажиров"
          onChange={(event) =>
            setData({ ...data, numberofpassengers: event.target.value })
          }
          required={true}
        />
      </div>

     <div className="row">
      <div className="col-md-6 m-auto text-center">
            <input
              id='uiserv'
              type="text"
              placeholder="Услуги"
              value={data.serviceui}
              onChange={handleFilterServices}
              name="serviceui"
            />
            <input
              type="hidden"
              placeholder="Услуги"
              value={data.service}
              onChange={handleFilterServices2}
              name="service"
            />
      </div>
      {filteredData.length != 0 && (
        <div className="dataResultservice">
          {filteredData.slice(0, 25).map((value, key) => {
            return (
              <a className="dataItemservice" onClick={(event) => {setData({...data, service : value}); $('#uiserv').val(value.name)}}>
                <p>{value.name}</p>
                <p>{value.desc}</p>
                <p>{value.price}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>

      <div className="row">
        <TextInput
          divClass="form-group col-md-6 m-auto"
          htmlForLabel="inputNote"
          labelName="Ваши примечания"
          inputClass="form-control"
          inputType="text"
          inputName="note"
          inputValue={data.note}
          inputPlaceHolder="Ваши примечания"
          onChange={(event) =>
            setData({ ...data, note: event.target.value })
          }
          required={true}
        />
      </div>

      <div className="row">
        <div className="col-md-6 m-auto text-center">
          <button type="submit" className="btn btn-light px-5 my-3">
            Забронировать
          </button>
        </div>
      </div>
    </form>
  );
}

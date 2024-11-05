import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [year, setYear] = useState("");
  const [isprinciple, setIsprinciple] = useState(true);
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)
  const [interest, setInterest] = useState(0)


  const Validite = (e) => {
    const { name, value } = e.target
    // console.log(name);
    // console.log(value);
    //match -
    if (!!value.match('^[0-9]*$')) {
      if (name == "principle") {
        setPrinciple(value);
        setIsprinciple(true)
        //console.log(principle);



      } else if (name == "rate") {
        setRate(value);
        setIsRate(true)
        //console.log(rate);

      } else {
        setYear(value);
        setIsYear(true)
        //console.log(year);

      }
    }
    else {
      if (name == "principle") {
        setPrinciple(value);
        setIsprinciple(false)
        console.log(setPrinciple(value));

      } else if (name == "rate") {
        setRate(value);
        setIsRate(false)
      } else {
        setYear(value);
        setIsYear(false)
      }

    }
  }
  const Calculate = () => {
    setInterest((principle * rate * year) / 100)
  }



  const handleReset = () => {
    setPrinciple("")
    setRate("")
    setYear("")
    setIsprinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  return (
    <>
      <div
        className="bg-dark d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="bg-light p-5 rounded-2" style={{ width: "500px" }}>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest Easily</p>

          <div
            className="bg-warning p-3 d-flex justify-content-center align-items-center mt-3 rounded-2 flex-column"
            style={{ height: "150px" }}
          >
            <h1>₹ {interest}</h1>
            <p>Total simple interest</p>
          </div>

          <div>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                className="w-100"
                value={principle}
                name="principle"
                label="₹ Principal amount"
                variant="outlined"
                onChange={(e) => Validite(e)}
              />
            </div>
            {isprinciple == false && <p className="text-danger"> Invalid Input</p>}
            <div className="my-3">
              <TextField
                id="outlined-basic"
                className="w-100"
                value={rate}
                name="rate"
                label="Rate of Interest (%)"
                variant="outlined"
                onChange={(e) => Validite(e)}
              />
            </div>
            {isRate == false && <p className="text-danger"> Invalid Input</p>}
            <div className="my-3">
              <TextField
                id="outlined-basic"
                className="w-100"
                name="year"
                value={year}
                label="Year (Yr)"
                variant="outlined"
                onChange={(e) => Validite(e)}
              />
            </div>
            {isYear == false && <p className="text-danger"> Invalid Input</p>}
            <div className="mb-3 d-flex justify-content-between">
              <Button disabled={(isprinciple && isRate && isYear) ? false : true}
                variant="contained"
                value={year}
                className="p-4"
                style={{ width: "190px" }}
                color="success"
                onClick={Calculate}
              >
                Calculate
              </Button>
              <Button
                variant="outlined"
                className="p-4"
                style={{ width: "190px" }}
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
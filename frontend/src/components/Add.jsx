import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId:"",
    img_url: ""
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = () => {
    console.log("btn clicked");

    const data = {
      EmpName: inputs.EmpName,
      designation: inputs.designation,
      empId: inputs.empId,
      img_url: inputs.img_url,
    };

    if (location.state != null) {
      axios
        .put("http://localhost:3001/edit/" + location.state.val.id_data, data)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("http://localhost:3001/add", data)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    navigate("/");
  };

  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Employee Name"
              onChange={inputHandler}
              name="EmpName"
              value={inputs.EmpName}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Designation"
              onChange={inputHandler}
              name="designation"
              value={inputs.designation}
              multiline={true}  // Correct usage of multiline
              rows={4}  // Number of rows for the multiline input
            />
            <TextField
              variant="outlined"
              placeholder="Employee Id"
              onChange={inputHandler}
              name="empId"
              value={inputs.empId}
            />
            <TextField
              variant="outlined"
              placeholder="Photo (paste any link from the browser)"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />
            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;

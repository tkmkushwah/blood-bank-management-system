import * as React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";
import {
  blue,
  green,
  grey,
  indigo,
  lightBlue,
  orange,
  pink,
  purple,
  red,
  yellow,
} from "@mui/material/colors";
import { Input, Tooltip } from "antd";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import Chart from "react-apexcharts";
import { BiChevronDown } from "react-icons/bi";


const LineChart = {
  series: [
    {
      name: "Donors",
      data: [],
    },
    {
      name: "Reciever",
      data: [],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [],
    },
  },
};
function ResponsiveDrawer(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

  const [img, setImg] = React.useState("");

  const [donarsData, setDonarsData] = useState([]);
  const [receiversData, setReceiversData] = useState([]);
  const [filteredReceiversData, setFilteredReceiversData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [chartOptions, setChartOptions] = useState(LineChart);
  const [graphsLoading, setGraphsLoading] = useState(false);
  const [donarsAvailable, setDonarsAvailable] = useState(0);
  const [donarsPending, setDonarsPending] = useState(0);
  const [bloodRequests, setBloodRequests] = useState(0);
  const [bloodRequestsApproved, setBloodRequestsApproved] = useState(0);
  const [showMore, setShowMore] = useState(3);
  const [showMoreRec, setShowMoreRec] = useState(3);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/user/donars_receivers")
      .then((res) => {
        console.log(res.data);
        setDonarsData(res.data.data.donors);
        setFilteredData(res.data.data.donors);
        setReceiversData(res.data.data.receivers);
        setFilteredReceiversData(res.data.data.receivers);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setGraphsLoading(true);
    axios
      .get("http://localhost:8000/api/v1/user/count")
      .then((res) => {
        console.log(res.data);
        let temp = chartOptions;
        temp.options.xaxis.categories = Object.keys(res.data.count);
        temp.series[0].data = Object.values(res.data.count);
        setChartOptions(temp);
        setDonarsAvailable(res.data.donarsavailable);
        setDonarsPending(res.data.donationpending);
        setBloodRequests(res.data.bloodrequests);
        setBloodRequestsApproved(res.data.bloodrequestsapproved);
        setGraphsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [chartOptions]);

  console.log(chartOptions);
  const randomColors = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };

  function handleSearch(search) {
    if (search === "") {
      setFilteredData(donarsData);
      return;
    }
    let filtered = donarsData.filter((it) => it.bloodgroup.includes(search));
    setFilteredData(filtered);
  }
  function handleSearchReceiver(search) {
    if (search === "") {
      setFilteredReceiversData(donarsData);
      return;
    }
    let filtered = receiversData.filter((it) => it.bloodgroup.includes(search));
    setFilteredReceiversData(filtered);
  }

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  console.log(showMore, filteredData.length, showMore !== filteredData, img);
  return (
    // <SidebarLayout>
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 2,
              height: 348,
              background: lightBlue[100],
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <Typography variant="h6" sx={{ padding: 2, fontWeight: 700 }}>
              Analytics
            </Typography>
            {graphsLoading ? (
              <Box textAlign={"center"}>
                <CircularProgress />
              </Box>
            ) : (
              <Box>
                {chartOptions.series[0].data?.length > 0 ? (
                  <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    height={250}
                    width={"100%"}
                    type="line"
                  />
                ) : (
                  <Typography>No Data Found!</Typography>
                )}
              </Box>
            )}
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            {/* <Box sx={{ display: 'flex', alignItems: 'flex-start',flexDirection:'row',flexWrap:'wrap', height: 300, gap: 2 }}> */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: blue[100],
                  height: 165,
                  borderRadius: 3,
                  padding: 2,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Typography
                  align="left"
                  variant="h6"
                  sx={{
                    color: indigo[500],
                    fontWeight: "bold",
                  }}
                >
                  Total Donations
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: indigo[500],
                    fontWeight: "bold",
                  }}
                >
                  {graphsLoading ? <CircularProgress /> : donarsAvailable}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: pink[100],
                  height: 165,
                  borderRadius: 3,
                  padding: 2,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Typography
                  align="left"
                  variant="h6"
                  sx={{
                    color: pink[500],
                    fontWeight: "bold",
                  }}
                >
                  Total Donations (Pending)
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: pink[500],
                    fontWeight: "bold",
                  }}
                >
                  {graphsLoading ? <CircularProgress /> : donarsPending}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: orange[200],
                  height: 165,
                  borderRadius: 3,
                  padding: 2,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Typography
                  align="left"
                  variant="h6"
                  sx={{
                    color: orange[500],
                    fontWeight: "bold",
                  }}
                >
                  Total Blood Requests
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: orange[500],
                    fontWeight: "bold",
                  }}
                >
                  {graphsLoading ? <CircularProgress /> : bloodRequests}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: purple[200],
                  height: 165,
                  borderRadius: 3,
                  padding: 2,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Typography
                  align="left"
                  variant="h6"
                  sx={{
                    color: purple[500],
                    fontWeight: "bold",
                  }}
                >
                  Total Blood Requests (Approved)
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: purple[500],
                    fontWeight: "bold",
                  }}
                >
                  {graphsLoading ? <CircularProgress /> : bloodRequestsApproved}
                </Typography>
              </Card>
            </Grid>
            {/* </Box> */}
          </Grid>
        </Grid>
        {/* <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid> */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "700",
                  mt: 1,
                }}
              >
                Recent Donors
              </Typography>
              <Input
                onChange={(e) => handleSearch(e.target.value)}
                style={{ marginTop: 20 }}
                placeholder="Search by Blood group"
                prefix={<SearchIcon />}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoIcon />
                  </Tooltip>
                }
              />

              {filteredData.length > 0 &&
                filteredData.slice(0, showMore)?.map((item) => (
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 1,
                      mt: 2,
                      borderRadius: 2,
                      background: "#fff",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ display: "flex" }}>
                        <Avatar sx={{ bgcolor: randomColors }}>
                          {item.name[0].toUpperCase()}
                        </Avatar>
                      </Box>
                      <CardContent>
                        <Typography variant="h7" sx={{ color: "black" }}>
                          {item.name}
                        </Typography>
                        <Typography variant="subtitle2">
                          {item.DOB.split("T")[0]}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color:
                              item.status === "Pending"
                                ? yellow[700]
                                : green[400],
                          }}
                        >{`(${item.status})`}</Typography>
                      </CardContent>
                    </Box>
                    <Box
                      sx={{
                        padding: 1,
                        borderRadius: 2,
                        textAlign: "center",
                        backgroundColor: red[50],
                      }}
                    >
                      <Typography
                        sx={{
                          color: red[500],
                        }}
                      >
                        {item.bloodgroup}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              {showMore < filteredData.length && (
                <Box
                  sx={{
                    padding: 2,
                    color: indigo[300],
                    textAlign: "center",
                    background: blue[100],
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                  onClick={() => {
                    if (showMore > filteredData.length) {
                      return;
                    }
                    setShowMore((initial) => initial + 3);
                  }} // set the currently expended item
                >
                  <Button
                    sx={{
                      background: grey[100],
                      borderRadius: 10,
                      position: "relative",
                    }}
                  >
                    Show More
                  </Button>
                  <BiChevronDown position="absolute" color="white" size={40} />
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "700",
                  mt: 1,
                }}
              >
                Recent Blood Requests
              </Typography>
              <Input
                onChange={(e) => handleSearchReceiver(e.target.value)}
                style={{ marginTop: 20 }}
                placeholder="Search by Blood group"
                prefix={<SearchIcon />}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoIcon />
                  </Tooltip>
                }
              />

              {filteredReceiversData.length > 0 &&
                filteredReceiversData.slice(0, showMore)?.map((item) => (
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 1,
                      mt: 2,
                      borderRadius: 2,
                      background: "#fff",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ display: "flex" }}>
                        <Avatar sx={{ bgcolor: randomColors }}>
                          {item.name[0].toUpperCase()}
                        </Avatar>
                      </Box>
                      <CardContent>
                        <Typography variant="h7" sx={{ color: "black" }}>
                          {item.name}
                        </Typography>
                        <Typography variant="subtitle2">
                          {item.DOB.split("T")[0]}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color:
                              item.status === "Pending"
                                ? yellow[700]
                                : green[400],
                          }}
                        >{`(${item.status})`}</Typography>
                      </CardContent>
                    </Box>
                    <Box
                      sx={{
                        padding: 1,
                        borderRadius: 2,
                        textAlign: "center",
                        backgroundColor: red[50],
                      }}
                    >
                      <Typography
                        sx={{
                          color: red[500],
                        }}
                      >
                        {item.bloodgroup}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              {showMoreRec < filteredData.length && (
                <Box
                  sx={{
                    padding: 2,
                    color: indigo[300],
                    textAlign: "center",
                    background: blue[100],
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                  onClick={() => {
                    if (showMoreRec > filteredData.length) {
                      return;
                    }
                    setShowMoreRec((initial) => initial + 3);
                  }} // set the currently expended item
                >
                  <Button
                    sx={{
                      background: grey[100],
                      borderRadius: 10,
                      position: "relative",
                    }}
                  >
                    Show More
                  </Button>
                  <BiChevronDown position="absolute" color="white" size={40} />
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    // </SidebarLayout>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

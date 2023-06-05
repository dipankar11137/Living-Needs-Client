import React from "react";
import Footer from "../Share/Footer";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import SportsRugbyIcon from "@material-ui/icons/SportsRugby";

//
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShareIcon from "@material-ui/icons/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";
// modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Popover, TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
// shere
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

// modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Blogs = ({ job }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  //   modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // love
  const handleLoveCount = (id) => {
    // console.log(id);
    toast.success("Successful Like This");
  };
  //   comment

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { register, handleSubmit } = useForm();
  const handleCommentJob = (data) => {
    console.log(data);
    toast.success(" Successfully Add Your Comment");
    setOpen(false);
  };
  // Book
  const handleBook = (id) => {
    navigate(`/booking/${id}`);
  };
  const shareUrl =
    "https://jobs.bdjobs.com/jobdetails.asp?id=1131367&fcatId=8&ln=1";
  return (
    <div className="px-40">
      <div className=" p-2 mt-3 bg-green-100 rounded-3xl shadow-2xl hover:shadow-inner hover:bg-lime-100 border-red-700">
        <div className="grid lg:grid-cols-3 gap-1">
          <div className="h-28">
            <img
              className="h-40 rounded-3xl w-72 "
              src={job?.companyLogo}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-700">{job?.jobName}</h1>

            <h2 className="text-xl pb-2 font-semibold">{job?.companyName}</h2>
            <h2 className="text-xl ">
              <LocationOnIcon className="mr-3" />
              {job?.location}
            </h2>
            <h2 className="text-xl">
              <ManageAccountsIcon className="mr-3" />
              {job?.experience} Years
            </h2>
          </div>
        </div>
        {/* modal */}
        <div>
          <CardActions disableSpacing>
            <div className="flex justify-end w-full">
              {/* <button
                onClick={() => handleLoveCount()}
                className="text-red-600 "
              >
                <FavoriteIcon />
              </button> */}
              {/* Comment */}
              {/* <div>
                <Button onClick={handleOpen}>
                  <CommentIcon />
                </Button>
                <Modal
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="keep-mounted-modal-title"
                  aria-describedby="keep-mounted-modal-description"
                >
                  <Box className="rounded-xl" sx={style}>
                    <h1>hello</h1>
                  </Box>
                </Modal>
              </div> */}
              {/* shere */}
              <button>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon className="h-6"></FacebookIcon>
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon className="h-6"></WhatsappIcon>
                </WhatsappShareButton>
              </button>
            </div>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <span className="font-semibold text-2xl">Vacancy :</span>
              </Typography>
              <Typography paragraph>
                <span className="font-bold text-xl"> {job?.vacancy}</span>
              </Typography>
              <Typography paragraph>
                <span className="font-semibold text-2xl">
                  Job Responsibilities :
                </span>
              </Typography>
              <Typography paragraph>{job?.jobResponsibilities}</Typography>
              <Typography paragraph>
                <span className="font-semibold text-2xl">
                  Employment Status :
                </span>
              </Typography>
              <Typography paragraph>{job?.employeeStatus}</Typography>
              <Typography paragraph>
                <span className="font-semibold text-2xl">
                  Educational Requirements :
                </span>
              </Typography>
              <Typography paragraph>{job?.educationalRequirements}</Typography>
              <Typography paragraph>
                <span className="font-semibold text-2xl">
                  Additional Requirements :
                </span>
              </Typography>
              <Typography paragraph>{job?.additionalRequirements}</Typography>

              <div>
                <h1 className="text-center text-lg mt-16 font-semibold">
                  Please read before apply . Send your cv "{job?.email}".
                  Subject : "{job?.jobName}"
                </h1>
              </div>
              <div>
                <h1 className="text-xl font-bold text-center">
                  Application Deadline : {job?.date}
                </h1>
              </div>
            </CardContent>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

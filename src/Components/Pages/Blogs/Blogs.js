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
import ShareIcon from "@material-ui/icons/Share";
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

const Blogs = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  //   modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // love
  const handleLoveCount = (id) => {
    console.log(id);
    toast.success("Successful Like This");
  };
  //   comment

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { register, handleSubmit } = useForm();
  const handleComment = (data) => {
    console.log(data);
    toast.success(" Successfully Add Your Comment");
    setOpen(false);
  };
  // Book
  const handleBook = (id) => {
    navigate(`/booking/${id}`);
  };
  const shareUrl =
    "https://www.booking.com/hotel/bd/best-western-heritage.en-gb.html?aid=1610687&label=coxs-bazar-6fj2tMEqobmP1SKHh4sjPwS379589678547%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666555%3Akwd-308486685033%3Alp9069450%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfpWGnRw6lOGgfEoJVv7zYo&sid=06a91f3de801dcff9aff29487ad562f9";
  return (
    <div className="px-40">
      <div className=" p-2 mt-3 bg-green-100 rounded-3xl shadow-2xl hover:shadow-inner hover:bg-lime-100 border-red-700">
        <div className="grid lg:grid-cols-3 gap-1">
          <div className="h-28">
            <img
              className="h-40 rounded-3xl w-72 "
              src="https://www.bdjobscareers.com/wp-content/uploads/2021/04/Square-Group-Jobs-Circular-News.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold pb-2 text-blue-700">Square</h1>

            <h2 className="text-xl">Dhaka</h2>
            <h2 className="text-xl">Education</h2>
            <h2 className="text-xl">Experience</h2>
          </div>
        </div>
        {/* modal */}
        <div>
          <CardActions disableSpacing>
            <div className="flex justify-end w-full">
              <button
                onClick={() => handleLoveCount()}
                className="text-red-600 "
              >
                <FavoriteIcon />
              </button>

              <div>
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
                    <form onSubmit={handleSubmit(handleComment)}>
                      <p>Please Write</p>
                      <textarea
                        placeholder="Input Your Comment"
                        className="bg-indigo-200 rounded-lg p-3 pr-4"
                        {...register("comment")}
                      ></textarea>

                      <input
                        className="hidden"
                        // value={hotel?.name}
                        type="text"
                        {...register("name", { required: true })}
                      />
                      <input
                        className="hidden"
                        // value={hotel?._id}
                        type="text"
                        {...register("_id")}
                      />

                      <input
                        className="bg-indigo-600 p-2  rounded-lg cursor-pointer font-bold uppercase text-white ml-4 -pt-3"
                        type="submit"
                      />
                    </form>
                  </Box>
                </Modal>
              </div>
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
              <Typography paragraph>Details :</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              {/* <Typography>{hotel?.description}</Typography> */}
              <div>
                <h1>Comment</h1>
              </div>
            </CardContent>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

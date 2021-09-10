import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../../redux/actions";

const darkStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
        backgroundColor: '#2B3945',
        color:'white',
        
       }
    },
    "& .MuiButtonBase-root": {
      backgroundColor: "#4a4780",
      color:'white'
    },
    '& .MuiPagination-ul ':{
      justifyContent:'center',
      margin:'20px'
    }
  },
  
}));

const lightStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
        backgroundColor: 'white',
        color:'#111517',
        
       }
    },
    "& .MuiButtonBase-root": {
      backgroundColor: "#b5b3e8",
      color:'#111517',
      marginTop:'15px'
    },
    '& .MuiPagination-ul ':{
      justifyContent:'center',
      margin:'20px'
    }
  }
}));

const Paginate = ({pages,onChangePage}) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode);
  const classes = darkMode ? darkStyle() : lightStyle();
  const page = useSelector(state=>state.page);

  const onPaginate = (event, value) => {
    dispatch(setPage(value))
    onChangePage(value);  
  };
  


  return (
    <div className={classes.root}>
      <Pagination
        count={pages ? pages : 1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        onChange={onPaginate}
        defaultPage={1} 
        page={page}
      />
    </div>
  );
};

export default Paginate;

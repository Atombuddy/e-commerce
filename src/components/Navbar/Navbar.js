import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'
import {Drawer,AppBar,Box,Toolbar,IconButton,Typography,Button,List,Divider,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import {MenuOutlined,SearchOutlined,ChevronLeft,InboxOutlined, ShoppingCart} from "@material-ui/icons"
import { Link } from 'react-router-dom';
import "./styles.css"


export default function SearchAppBar() {
    const [searchValue,setSearchValue]=useState("")
    const navigation = useNavigate()
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigation(`/search?title=${searchValue}`)
    }
    const handleSearch=(e)=>{
        setSearchValue(e.target.value)
    }

  return (
    <Box className='navBarBox' >
      <AppBar position="static" className='appBar' open={open}>
        <Toolbar className='toolBar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuOutlined />
          </IconButton>
          <Button className="brandButton" component={Link} to="/">E-Commerce</Button>
            <div className='searchBar'>
             
              <form onSubmit={handleSubmit}>
                <input className="searchInput" type="text" value={searchValue} placeholder="Search by Title" onChange={handleSearch} />
                <IconButton aria-label="submit" type='submit' color="primary">
                    <SearchOutlined />
                </IconButton>
            </form>     
            </div>
            <Button className='signInButton' component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            <Button className="cartButton" component={Link} to="/checkout"><ShoppingCart/></Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width:240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
       
          <IconButton onClick={handleDrawerClose}>
             <ChevronLeft /> 
          </IconButton>
      
        <Divider />
        <Typography style={{marginLeft:10,marginTop:20}}>Shop by Categories</Typography>
        <List>
          {["Men's Clothing", "Women's Clothing", 'Electronics', 'Jewelery'].map((text, index) => (
            <Link className="navLink" to={`/search/?category=${text.toLowerCase()}`}>
            <ListItem button key={index}>
              <ListItemIcon>
                <InboxOutlined />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
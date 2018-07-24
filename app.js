import 'core-js';
//import 'core-js/es6/map';
//import 'core-js/es6/set';
import "babel-polyfill";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
//import Drawer from '@material-ui/core/Drawer';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
//import {SideNav,Fa,SideNavNav, SideNavCat,SideNavItem} from 'mdbreact';
import Home from './Home.js'
import MySurveys from './MySurveys.js'
import pnp from "sp-pnp-js";

import AllResponse from './AllResponses.js'
import FinalizedResponse from './FinalizedResponse.jsx'
import PendingResponse from './PendingResponse.jsx'
import RejectedResponse from './RejectedResponse.jsx'
import SubmittedResponse from './SubmittedResponse.jsx'
import styled from 'styled-components';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import * as Papa from 'papaparse'
import LEAMap from './LEA_Map'


import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';

import 'font-awesome/css/font-awesome.min.css1';


//import CircularProg from './ress from '@material-ui/core/CircularProgress';
//import GridContainer from "components/Grid/GridContainer.jsx";
//import ItemGrid from "components/Grid/ItemGrid.jsx";
//import IconCard from "components/Cards/IconCard.jsx";
import { Grid, GridColumn as Column, GridCell,GridToolbar  } from '@progress/kendo-react-grid';
import { Renderers } from './renderers.jsx';
import MyCommandCell from './my-command-cell.jsx';
import '@progress/kendo-theme-default/dist/all.css';

import SurveyAdministration from './SurveyAdministration.jsx';
import SurveyTemplate from './SurveyTemplate.jsx';
import WageImport from './WageImport.jsx';

import Dashboard from './Dashboard.jsx';
import CompensationDetails from './CompensationDetails.jsx';
import TaxDesignations from './TaxDesignations.jsx';
import CompanyNumber from  './CompanyNumber.jsx';
import ExternalLobbyist from './ExternalLobbyist.jsx';
import TradeOrganization from './TradeOrganization.jsx';
import GovernmentAffairs from './GovernmentAffairs.jsx';
import CompanyData from './CompanyData.jsx';
import ThirdPartyCosts from './ThirdPartyCosts.jsx';
import LobbyWages from './LobbyWages.jsx';
import Ratio from './Ratio.jsx';
import GrossUp from './GrossUp.jsx';
import A236 from './236A.jsx';
import FC from './FC.jsx';
import CalculationsSummary from './CalculationsSummary.jsx';
import Calculations from './Calculations.jsx';
import OtherCalculations from './OtherCalculations.jsx';
import Configuration from './Configuration.jsx';
import Responses from './Responses.jsx';
import Surveys from './Surveys.jsx';
import DashboardComponent from './DashboardComponent.jsx';
import User from './User.jsx';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
const drawerWidth = 240;
//import SideNav from './SideNav';
//import SideNavCat from './SideNavCat';
//import SideNavItem from './SideNavItem';

//import SideNavNav from './SideNavNav';
const NavMain = {
 // dashboard: { title: 'Dashboard', icon: ic_aspect_ratio },
  home:     { title: 'Home', icon: ic_business_center},
 // MySurveys:{ title: 'MySurveys', icon: ic_business_center},
 responses: { title: 'Responses', icon: ic_format_list_bulleted},
 /* responses: { title: 'Responses', icon: ic_format_list_bulleted, child :{ 
    allresponses :{ title: 'All Responses', icon: ic_format_list_bulleted},
    pendingresponses :{ title: 'Pending Responses', icon: ic_format_list_bulleted},
    submittedresponses :{ title: 'Submitted Responses', icon: ic_format_list_bulleted},
    rejectedresponses :{ title: 'Rejected Responses', icon: ic_format_list_bulleted},
    finalizedresponses :{ title: 'Finalized Responses', icon: ic_format_list_bulleted}
    }
    
  },**/
  surveys: { title: 'Surveys', icon: ic_format_list_bulleted},
   /* child :{ 
   surveyadministration :{ title: 'Survey Administration', icon: ic_format_list_bulleted},
    surveyassignmnet :{ title: 'Survey Assignment', icon: ic_format_list_bulleted},
    surveyrollforward :{ title: 'Survey Roll Forward', icon: ic_format_list_bulleted}
     }
    },**/
  configuration: { title: 'Calculations', icon: ic_format_list_bulleted, child :{ 
     // calculations :{ title: 'Calculations', icon: ic_format_list_bulleted},
     // glaccounts :{ title: 'GL Accounts', icon: ic_format_list_bulleted},
     // compensation:{title: 'Compensation', icon: ic_format_list_bulleted},
     // taxdesignation:{title: 'Tax Designation', icon: ic_format_list_bulleted},
      //wageimport :{ title: 'Wage Import', icon: ic_format_list_bulleted},
      //companynumber :{ title: 'Company Number', icon: ic_format_list_bulleted},
      configuration :{ title: 'Configurations', icon: ic_format_list_bulleted},
      othercalculations :{ title: 'Other Calculations', icon: ic_format_list_bulleted},
     
      //externallobbyist :{ title: 'External Lobbyist', icon: ic_format_list_bulleted},
      //tradeorganization :{ title: 'Trade Organization', icon: ic_format_list_bulleted},
      //governmentaffairs :{ title: 'Government Affairs', icon: ic_format_list_bulleted},
      //companydata :{ title: 'Company Data', icon: ic_format_list_bulleted},
      //thirdpartycosts :{ title: 'Third Party', icon: ic_format_list_bulleted},
      //lobbywages :{ title: 'Lobbying Wages', icon: ic_format_list_bulleted},
      //ratio :{ title: 'Ratio', icon: ic_format_list_bulleted},
      //grossup :{ title: 'Gross Up', icon: ic_format_list_bulleted},
      //a236 :{ title: '236A', icon: ic_format_list_bulleted},
      //fc :{ title: 'F&C', icon: ic_format_list_bulleted},
     // calculationssummary :{ title: 'Calculations Summary', icon: ic_format_list_bulleted},
      
      
      


       }
      },
  users: { title: 'Users', icon: ic_format_list_bulleted}
/* , child :{ 
        usermanagement :{ title: 'User Management', icon: ic_format_list_bulleted},
        usergroup :{ title: 'User Group', icon: ic_format_list_bulleted}
      }
        },**/

};

const Title = styled.div`
    padding: 12px;
`;

const styles = theme => ({
 /* root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },**/

  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});
class App extends Component {
  constructor(props){
    super(props);
    this.CalculationType=this.CalculationType.bind(this);
    this.selectedNav=this.selectedNav.bind(this);

    this.onClick = this.onClick.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.onClick4 = this.onClick4.bind(this);
    this.handleToggleClickA = this.handleToggleClickA.bind(this);
    this.handleToggleClickB = this.handleToggleClickB.bind(this);
    
    this.state={
    year: '',
    name: 'hai',
    category:'',
    status:'',
    calculation:'',
    navigationoption:"dashboard",
     isLoading: true ,
     MapYears:[],
     collapse: false,
     accordion: false,
     toggleStateA: false,
     toggleStateB: false,
     top: false,
     left: false,
     bottom: false,
     right: false,
     mobileOpen: false,
    }


  }
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  onClick(){
    let state = '';

    if (this.state.accordion !== 0) {
      state = 0;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }

  onClick1(){
    let state = '';

    if (this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }

  onClick2(){
    let state = '';

    if (this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }

  onClick3(){
    let state = '';

    if (this.state.accordion !== 3) {
      state = 3;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }

  onClick4(){
    let state = '';

    if (this.state.accordion !== 4) {
      state = 4;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }


// Slide out buttons event handlers
  handleToggleClickA(){
    this.setState({
      toggleStateA: !this.state.toggleStateA
    })
  }

  handleToggleClickB(){
    this.setState({
      toggleStateB: !this.state.toggleStateB
    })
  }

  selectedNav(id,parent){
    this.setState({ navigationoption: id });
    
  }

  componentDidMount() {

    pnp.setup({
      sp: {
        headers: {
            "Accept": "application/json; odata=verbose"
        }
    }
  })
    var promises = [];
    let AllYearsUrl=[];
    let AllYears=[];
    let self=this;
    promises.push(pnp.sp.site.rootWeb.lists.getByTitle("LegislativeSessionCalendar").items.select("FieldValuesAsText/FileRef","Year").expand("FieldValuesAsText").get());
    Promise.all(promises).then(function(data){

      data[0].forEach(function(element){
        AllYearsUrl.push({
          url:element.FieldValuesAsText.FileRef,
          Year:element.Year
        }) 
      })

      AllYearsUrl.forEach(item=>{
        Papa.parse(item.url, {
          download: true,
          header: true,
          delimiter: ',',
          skipEmptyLines:true,
          complete: function(results) {

            results.data.forEach(file=>{

              AllYears.push({
                Year:item.Year,
                StateAbbreviation:file.StateAbbreviation,
                State:file.State,
                Session:file.Session,
                RegularConveneDate:file.RegularConveneDate,
                RegularAdjournDate:file.RegularAdjournDate,
                SpecialConveneDate:file.SpecialConveneDate,
                SpecialAdjournDate:file.SpecialAdjournDate,
                RegualarComments:file.RegualarComments,
                SpecialCommentstate:file.SpecialComments



              })

              console.log(AllYears);
           self.setState({MapYears:AllYears})
           self.setState({isLoading: false}) 

            })
         
           
          }
        });
      
      }
      )
     
    });
   
}
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  CalculationType(event){
    console.log("Test");
  }
  render() {

    const divstyle = {width: "50%", display: "inline-block"}
    
    const button1 = <a href="#" onClick={this.handleToggleClickA} key="sideNavToggleA"><i class="fas fa-bars"></i></a>
    const button2 = <a href="#" onClick={this.handleToggleClickB} key="sideNavToggleB"><i class="fas fa-bars"></i></a>
    const isOpenWithButtonA = this.state.toggleStateA;
    const isOpenWithButtonB = this.state.toggleStateB;
    const { classes, theme } = this.props;
    //const { classes } = this.props;
    const isNavigationOption = this.state.navigationoption;
    let button = null;
    /*if (isNavigationOption==="dashboard") {
      button = <DashboardComponent/>;
    }**/  if(isNavigationOption==="home") {
      button = <Home/>;
    } else if(isNavigationOption==="MySurveys") {
      button = <MySurveys/>;
    /*} else if(isNavigationOption==="surveys") {
      button = <div> Surveys </div>;**/
    } else if(isNavigationOption==="responses") {
      button = <Responses/>;
    
  } else if(isNavigationOption==="responses/allresponses") {
    button =<AllResponse/>;
  } else if(isNavigationOption==="responses/finalizedresponses") {
    button =<FinalizedResponse/>;
  
} else if(isNavigationOption==="responses/pendingresponses") {
  button =<PendingResponse/>;

} else if(isNavigationOption==="responses/rejectedresponses") {
  button =<RejectedResponse/>;
} else if(isNavigationOption==="responses/submittedresponses") {
  button =<SubmittedResponse/>;
}else if(isNavigationOption==="surveys") {
  button =<Surveys/>;

}else if(isNavigationOption==="surveys/surveyadministration") {
  button =<SurveyAdministration/>;
}
else if(isNavigationOption==="surveys/surveyassignmnet") {
  button =<SurveyTemplate/>;
}
else if(isNavigationOption==="configuration") {
  button =<Calculations/>;
}
else if(isNavigationOption==="configuration/othercalculations") {
  button =<OtherCalculations/>;
}
else if(isNavigationOption==="configuration/configuration") {
  button =<Configuration/>;
}
else if(isNavigationOption==="configuration/wageimport") {
  button =<WageImport/>;
}
else if(isNavigationOption==="configuration/compensation") {
  button =<CompensationDetails/>;
}
else if(isNavigationOption==="configuration/taxdesignation") {
  button =<TaxDesignations/>;
}
else if(isNavigationOption==="configuration/companynumber") {
  button =<CompanyNumber/>;
}
else if(isNavigationOption==="configuration/externallobbyist") {
button =<ExternalLobbyist/>;
}
else if(isNavigationOption==="configuration/tradeorganization") {
  button =<TradeOrganization/>;
  }
  else if(isNavigationOption==="configuration/governmentaffairs") {
    button =<GovernmentAffairs/>;
    }
else if(isNavigationOption==="configuration/companydata") {
      button =<CompanyData/>;
      }
 else if(isNavigationOption==="configuration/thirdpartycosts") {
        button =<ThirdPartyCosts/>;
        }
        else if(isNavigationOption==="configuration/lobbywages") {
          button =<LobbyWages/>;
          }
         
    else if(isNavigationOption==="users") {
      button =<User/>;
    }else if(isNavigationOption==="responses/Calculations") {
      button = <div> Calculations </div>;
    }
    return (
      /*this.state.isLoading ?    <CircularProgress  size={50} /> : **/
      <div>
    
<input type="checkbox" id="toggle-sidebar" />
<section class="-wrap">
  <section class="-body">

 {/*  <h3>Survey Responses</h3>
              <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
 </div>**/}
          <main class="-contentfull">
        
            {button}
          </main>
        
          <footer class="-footer">
            <div>footer</div>
          </footer>
        </section>
        <aside class="-sidebar">
      
            <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
             <div > 

<SideNav
highlightBgColor="#00bcd4"
defaultSelected="home"
highlightColor="white"
onItemSelection={ (id, parent) => {this.selectedNav(id,parent)}}
>
<Title> Lobbyist Expense Application </Title>
{Object.keys(NavMain).map(key => {
//dynamically created the navs
return (
  <Nav key={key} id={key}>
      <NavIcon><SvgIcon icon={NavMain[key].icon} /></NavIcon>
      <NavText> {NavMain[key].title} </NavText>
      {NavMain[key].hasOwnProperty("child") && Object.keys(NavMain[key].child).map(key1=>{
return (
<Nav key={key1} id={key1}>
<NavIcon><SvgIcon icon={NavMain[key].child[key1].icon} /></NavIcon>
<NavText> {NavMain[key].child[key1].title} </NavText>
</Nav>
);
}

)}
  </Nav>
);
})}

</SideNav>
</div>
          </Drawer>
        </Hidden>

         <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div > 

<SideNav
highlightBgColor="#00bcd4"
defaultSelected="home"
highlightColor="white"
onItemSelection={ (id, parent) => {this.selectedNav(id,parent)}}
>
<Title> Lobbyist Expense Application </Title>
{Object.keys(NavMain).map(key => {
//dynamically created the navs
return (
  <Nav key={key} id={key}>
      <NavIcon><SvgIcon icon={NavMain[key].icon} /></NavIcon>
      <NavText> {NavMain[key].title} </NavText>
      {NavMain[key].hasOwnProperty("child") && Object.keys(NavMain[key].child).map(key1=>{
return (
<Nav key={key1} id={key1}>
<NavIcon><SvgIcon icon={NavMain[key].child[key1].icon} /></NavIcon>
<NavText> {NavMain[key].child[key1].title} </NavText>
</Nav>
);
}

)}
  </Nav>
);
})}

</SideNav>
</div>
          </Drawer>
        </Hidden>
        
         
     

          
        </aside>
        <header class="-header">
        <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
   <label for="toggle-sidebar"></label> <div class="logo"></div>
      <div class="lineheader"><img src="https://firmwideappsuat.us.kpmg.com/tax/LEA/SiteAssets/Scripts/leaapp/media/lineheader.svg" /></div>
    
  <div class="dropdown headerview">
    <button class="btn blue dropdown-toggle" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Full Page
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu6">
      <a class="dropdown-item" href="https://firmwideappsuat.us.kpmg.com/tax/LEA/DEV/SitePages/leaDashboardPage.aspx">Dashboard</a>
   <a class="dropdown-item" href="https://firmwideappsuat.us.kpmg.com/tax/LEA/DEV/SitePages/leaHome.aspx">Full Page</a>
</div>
</div>
      <div class="admin-panel">
          <div class="search">
    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
</div>
          <div class="help"><img src="https://firmwideappsuat.us.kpmg.com/tax/LEA/SiteAssets/Scripts/leaapp/media/lightbulb.svg"/></div>              
          <div class="settings "><img src="https://firmwideappsuat.us.kpmg.com/tax/LEA/SiteAssets/Scripts/leaapp/media/sun.svg"/></div>
      </div>
  </header>
      </section>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles,{ withTheme: true })(App);


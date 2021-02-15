import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

//Components
import MenuTabs from './MenuTabs';
import Image from 'material-ui-image';
import ServicesCard from './ServicesCard'
import heroImg from '../images/google-maps.jpg';
//DB
import services from '../StoresProfile';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(10),
  },
  fixedPosition: {
    position: "sticky",
    maxWidth: "480px",
    top: theme.spacing(-2),
    zIndex: 8,
  },
  serviceList: {
    width: "90%",
    margin: "0 auto",
    marginTop: theme.spacing(4),
},

}));

function Camera() {
  const classes = useStyles();
  const [activeTab, setTab] = useState(0);
  let history = useHistory();

  function changeTab (tabValue) {
    setTab(tabValue)
}
  function goToService (service) {
    console.log(service);
    history.push({ 
      pathname: '/VetProfile',
      state: service,
  })
    }

  return (
    <div className={classes.root}>
      <div className={classes.fixedPosition}>
        <Image
          src={heroImg}
          aspectRatio={(16/9)}
        />
        <MenuTabs
          selectTab={changeTab}
          tabs={["Vets", "Shops", "MeetUp", "Care"]} 
        />
      </div>
      {services.filter(select => select.category === activeTab).map((service) => (
      <div
      onClick={()=>{goToService(service)}}           
      className={classes.serviceList}>
          <ServicesCard
          key={service.id}
          title={service.storeName}
          image={service.pic}
          detail={service.about}
          />
      </div>))}
    </div>

    );
}

export default Camera;
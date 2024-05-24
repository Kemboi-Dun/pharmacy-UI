import React from "react";

type imageObj_type = {
    imageURL: string,
    label:string,
}

const HeaderBreadCrumb = ()=>{

const breadCrumbImages = [
    {
        imageURL:'https://www.yogabaron.com/wp-content/uploads/2021/03/how-to-strengthen-wrists-for-yoga-Mar202021-2-min.jpg',
        label:'Bone & Joint care'
    },
    {
        imageURL:'https://images.unsplash.com/photo-1685485276219-cbdf9309be1a?q=80&w=1356&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label:'Diabetes care'
    },
    {
        imageURL:'https://plus.unsplash.com/premium_photo-1702598804759-8fb687f774fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label:'Kidney care'
    },
    {
        imageURL:'https://horizonhospital.com/offers/wp-content/uploads/2023/01/Liver-care-banner-mobile.png',
        label:'Liver care'
    },
    {
        imageURL:'https://images.unsplash.com/photo-1637930030080-4ec4b95914c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label:'Respiratory care'
    },
    {
        imageURL:'https://images.unsplash.com/photo-1628771065117-74ccb5690668?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label:'Eye care'
    }
]

    return(
        <>
        
        <div className="header-crumb-container">
<ul className="header-crumb-images-wrapper">
    { breadCrumbImages?.map((imageObj: imageObj_type)=> (
        <li key={imageObj.imageURL}>
            
        <img src={imageObj.imageURL} alt={imageObj.imageURL} />
        <p>
        {imageObj.label}
        </p>
    </li>
    ))



    }
</ul>
        </div>
        </>
    )
}


const HeaderBody = ()=>{
    return(
        <div className="header-container">
        <span className="header-background-text">Pharmacy</span>
        <div className="header-wrapper">
          <div className="header-container-wrapper">
            <div className="header-description">
              <span className="header-info">
                online medicine delivery is the process of ordering medications
                through a website or app and having them delivered to your
                doorstep.
              </span>
  
              <div className="call-to-action-icons">
                <span>
                  <i className="fa-solid fa-box"></i>
                  Delivery to your doorstep.
                </span>
                <span>
                  <i className="fa-solid fa-pills"></i>
                  100% Genuine Medicines
                </span>
              </div>
            </div>
  
            <div className="header-center-image">
              <img
                src="https://i.postimg.cc/X7FybsDW/front-view-young-female-courier-green-uniform-removebg-preview.png"
                alt="front-view-young-female-courier-green-uniform-black-gloves-black-mask-holding-food-delivery-package-phone"
              />
            </div>
  
            <div className="header-cta-card">
              <div className="card-info">
                <p>Upload prescription</p>
                <i className="fa-solid fa-file-circle-check"></i>
              </div>
              <div className="card-buttons">
                <button>
                  <i className="fa-solid fa-file-circle-plus"></i>
                </button>
                <button>Order Via Prescription</button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    )
}

const Header = () => {
  return (
<>
<div className="header-body-container">

<HeaderBody/>
<HeaderBreadCrumb/>
</div>
</>
  );
};

export default Header;

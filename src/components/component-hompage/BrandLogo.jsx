import {Navbar, Container} from 'react-bootstrap';
import "./BrandLogo.css"
function BrandLogo() {
    return(
      <Navbar className='brand' bg="light">
        <Container>
          <img className="icon_brand" src="./content/Group 7.png" alt="" />
        </Container>
        <Container>
          <img className="icon_brand" src="./content/Group 8.png" alt="" />
        </Container>
        <Container>
          <img className="icon_brand" src="./content/Group 9.png" alt="" />
        </Container>
        <Container>
          <img className="icon_brand" src="./content/Group 13.png" alt="" />
        </Container>
        <Container>
          <img className="icon_brand" src="./content/Group 11.png" alt="" />
        </Container>
      </Navbar>
    /*  <Navbar>
          <div className="brand">
            <div className="logo_brand">
                <img className="icon_brand" src="./content/Group 7.png" alt="" />
                <img className="icon_brand" src="./content/Group 8.png" alt="" />
                <img className="icon_brand" src="./content/Group 9.png" alt="" />
                <img className="icon_brand" src="./content/Group 13.png" alt="" />
                <img className="icon_brand" src="./content/Group 11.png" alt="" />
            </div>
        </div>
     </Navbar> */
   /*  const data = [
        {
          title: 'Title 1',
          img:"./content/Group7.png"
        },
        {
          title: 'Title 2',
          img:"./content/Group8.png"
        },
        {
          title: 'Title 3',
          img:"./content/Group9.png"
        },
        {
          title: 'Title 4',
          img:"./content/Group11.png"
        },
        {
            title: 'Title 5',
            img:"./content/Group13.png"
          }
      ];
    return ( 
    <div className="brand">
     <List
    grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 5,
        xxl: 5,
      }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <img  className="logo_brand"src={item.img} alt="" />
      </List.Item>
    )}
  />
    </div> */
       /*  <div className="brand">
            <div className="logo_brand">
                <img className="icon_brand" src="./content/Group 7.png" alt="" />
                <img className="icon_brand" src="./content/Group 8.png" alt="" />
                <img className="icon_brand" src="./content/Group 9.png" alt="" />
                <img className="icon_brand" src="./content/Group 13.png" alt="" />
                <img className="icon_brand" src="./content/Group 11.png" alt="" />
            </div>
        </div> */
    
     );
}

export default BrandLogo;
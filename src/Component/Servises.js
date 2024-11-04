import React, { useState } from 'react';
import './s2.css';
import Footer from './Footer';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const Servises = () => {
    const navigate=useNavigate();
    const handleClick1=()=>{
        navigate('/contact');
    }
  const [selectedCard, setSelectedCard] = useState(null);

  const staffingServices = [
    {
      title: 'Permanent Staffing',
      description: 'Finding the right full-time IT professionals can be challenging. We take the hassle out of the hiring process by sourcing, screening, and presenting only the most qualified candidates. Our rigorous selection process ensures that you get the best talent, perfectly matched to your company’s culture and technical requirements.',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/8/LK/RZ/HM/124847737/permanent-staffing-solutions-500x500.jpeg',
    },
    {
      title: 'Contract Staffing',
      description: 'Need specialized skills for a specific project or a temporary boost to your IT team? Our contract staffing services provide you with access to highly skilled IT professionals on a short-term basis, allowing you to scale your team as needed without long-term commitments.',
      imageUrl: 'https://akscellenceinfo.com/wp-content/uploads/2021/12/hire-it-staffing-1.png', 
    },
    {
      title: 'Contract-to-Hire',
      description: 'Our contract-to-hire service offers you the flexibility to evaluate a candidate’s performance on the job before making a long-term commitment. This approach reduces hiring risks and ensures a better fit for your organization.',
      imageUrl: 'https://www.nelito.com/images/blog-images/direct-hire-vs-contract-to-hire-advantages-and-disadvantages.jpg', 
    },
  ];

  const additionalServices = [
    {
      title: 'IT Strategy and Planning',
      description: 'Transform your business with a robust IT strategy. Our consultants work closely with your leadership team to develop a comprehensive IT roadmap that aligns with your business objectives. From digital transformation to cloud adoption, we provide actionable insights that drive sustainable growth.',
      imageUrl: 'https://media.istockphoto.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.webp?b=1&s=170667a&w=0&k=20&c=tb2d0EOX_j10LHI_1znMGoSI_55FBSwP-Mo68GMzgfY=', 
    },
    {
      title: 'Technology Implementation',
      description: 'Implementing new technologies can be daunting, but our experts are here to guide you through the process. We provide end-to-end support, from selecting the right tools and platforms to integrating them seamlessly into your existing infrastructure.',
      imageUrl: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_502462262_272296.jpg', 
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'In today’s digital landscape, cybersecurity is more critical than ever. We offer a full suite of cybersecurity services, including risk assessments, threat monitoring, and incident response, to protect your business from cyber threats.',
      imageUrl: 'https://consultdts.com/wp-content/uploads/2022/07/cyber-security-solutions.jpg', 
    },
    {
      title: 'Data Management and Analytics',
      description: 'Harness the power of data with our data management and analytics services. We help you organize, analyze, and leverage your data to make informed decisions, improve operational efficiency, and gain a competitive edge.',
      imageUrl: 'https://8allocate.com/wp-content/uploads/2023/09/What-is-Data-Management_-Benefits-Challenges-and-Trends.png', 
    },
  ];

  const moreServices = [
    {
      title: 'Project Management',
      description: 'Harness the power of data with our data management and analytics services. We help you organize, analyze, and leverage your data to make informed decisions, improve operational efficiency, and gain a competitive edge.',
      imageUrl: 'https://e7.pngegg.com/pngimages/354/935/png-clipart-risk-management-project-management-project-manager-change-management-management-project-company-text.png',
    },
    {
      title: 'Software Development',
      description: 'Whether you need custom software or enhancements to existing systems, our development team is equipped to deliver high-quality, scalable solutions. We follow agile methodologies to ensure flexibility and faster time-to-market.',
      imageUrl: 'https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg', 
    },
    {
      title: 'Infrastructure Management',
      description: 'Optimize your IT infrastructure with our management services. We provide ongoing support and maintenance to ensure your systems are running smoothly, with minimal downtime and maximum efficiency.',
      imageUrl: 'https://blog.ouriken.com/wp-content/uploads/2019/11/Untitled-design.png', 
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const renderCards = (services) => {
    return services.map((service, index) => (
      <div className="card" key={index} onClick={() => handleCardClick(service)}>
        <img src={service.imageUrl} alt={service.title} className="card-image" />
        <div className="card-content">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      </div>
    ));
  };

  return (

    <div>
    <Nav/>
    <div className="staffing-cards">
    <div className='ser'>
        <h1>Our Services</h1>

    </div>
    <div className='t-1'>
    <h3>Delivering Tailored IT Solutions to Drive Your Success</h3>
    <p>At QuantumLeap IT Solutions, we offer a comprehensive range of IT staffing and consultancy services
     designed to meet the unique needs of your business. Whether you're looking to fill critical roles in your IT
      team or need expert guidance on complex projects, our services are crafted to help you achieve your goals with confidence.
    </p>
    </div>
      <h1>IT Staffing Solutions</h1>
      <div className="cards-container">
        {renderCards(staffingServices)}
      </div>
      <h1>IT Consultancy Services</h1>
      <div className="cards-container1">
        {renderCards(additionalServices)}
      </div>
      <h1>Project-Based Services</h1>
      <div className="cards-container">
        {renderCards(moreServices)}
      </div>

      {selectedCard && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>X</button>
            <img src={selectedCard.imageUrl} alt={selectedCard.title} className="popup-image" />
            <div className="popup-details">
              <h2 className="popup-title">{selectedCard.title}</h2>
              <p className="popup-description">{selectedCard.description}</p>
            </div>
          </div>
        </div>
      )}


      <div className="why-choose">
        <h2>Why Choose QuantumLeap IT?</h2>
        <ul>
          <li>Expertise Across Industries: We have experience working with businesses across various sectors, giving us the versatility to understand and meet diverse IT needs.</li>
          <li>Customized Solutions: We don’t believe in one-size-fits-all. Our services are tailored to address the specific challenges and objectives of your business.</li>
          <li>Proven Results: Our track record speaks for itself. We’ve helped countless organizations enhance their IT capabilities and achieve their strategic goals.</li>
        </ul>
      </div>

      <div className="contact-us">
        <h2>Let’s Work Together</h2>
        <p>Ready to take your IT operations to the next level? Contact QuantumLeap IT Solutions today to learn more about our services and how we can support your business.</p>
        <button onClick={handleClick1}  className="contact-button">Contact Us</button>
      </div>
    </div>
    <Footer></Footer>
    </div>
    
  );
};

export default Servises;

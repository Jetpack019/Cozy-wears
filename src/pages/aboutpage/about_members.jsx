import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/team_member.css';
function About_Members() {
  // Sample data for the team members
  const teamMembers = [
    {
      name: 'Emily Thompson',
      position: 'Production Manager',
      avatar: 'images/about/about_member1.jpg', // Replace this with the URL of the image
    },
    {
      name: 'Jane Smith',
      position: 'Lead Designer',
      avatar: 'images/about/about_member2.jpg', // Replace this with the URL of the image
    },
    {
      name: 'Maria Rodriguez',
      position: 'Customer Care Specialist',
      avatar: 'images/about/about_member3.jpg', // Replace this with the URL of the image
    },
  ];

  const h1Styles = {
    color: '#E97451',
    fontSize: '2rem',
    textAlign: 'center',
  };

  return (
    <div className="container mt-5" style={{ marginTop: '50px',marginBottom:'100px' }}>
       <h1 style={h1Styles}>Team Members</h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4 col-sm-6 ">
            <div className="avatar">
              <img src={member.avatar} alt="Avatar" className="img-fluid" />
            </div>
            <h1 style={h1Styles}>{member.name}</h1>
            <div className="name-tag" style={{ backgroundColor: '#E97451' }}>
              {member.position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About_Members;

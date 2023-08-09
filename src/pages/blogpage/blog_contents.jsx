import React from 'react';

function Blog_contents() {
  // Dummy data for the blog content

  
  const blogContentData = [
    {
      image: 'images/blogs/blog_styles.jpg',
      title: '"5 Ways to Style Your Cozy Wear for a Casual Weekend Look"',
      text:
        'In this blog post, provide readers with five different outfit ideas for a casual weekend look using cozy wear pieces. Include photos and descriptions of each outfit, and explain how to mix and match different pieces for a versatile and stylish look.',
    },
    {
      image: 'images/blogs/blog_tips.jpg',
      title: '"How to Care for Your Cozy Wear: Tips and Tricks"',
      text:
        'In this blog post, offer readers tips and tricks for how to care for different types of cozy wear fabrics, including washing and drying instructions, as well as tips for storing and maintaining the quality of the fabric over time.',
    },
    {
      image: 'images/blogs/blog_diff.jpg',
      title: '"Our Commitment to Sustainability: How We are Making a Difference"',
      text:
        'In this blog post, share information about your brand sustainability practices, including the materials you use, the production processes you have in place, and any initiatives or partnerships you are involved with to promote sustainability. Offer tips and ideas for readers on how they can make more eco-friendly choices in their fashion purchases and habits.',
    },
    {
      image: 'images/blogs/blog_review.jpg',
      title: '"Cozy Wear in Action: Stories from Our Customers"',
      text:
        'In this blog post, share stories and testimonials from your customers, highlighting how they wear and style your cozy wear products, and how it makes them feel. Ask customers to share their experiences on social media using a specific hashtag, and feature their stories on your blog.',
    },
    {
      image: 'images/blogs/blog_trend.jpg',
      title: '"The Latest Cozy Wear Trends for Fall 2022"',
      text:
        'In this blog post, offer readers updates and insights on the latest cozy wear trends for the upcoming season. Include photos and descriptions of different trends, and offer tips on how to incorporate them into your personal style.',
    },
    {
      image: 'images/blogs/blog_designteam.jpg',
      title: '"Meet the Cozy Wear Design Team"',
      text:
        'In this blog post, introduce readers to the members of your cozy wear design team, including their backgrounds, inspirations, and design processes. Share photos and behind-the-scenes insights into the design and production process, and offer readers a glimpse into what goes into creating a cozy wear collection.',
    },

  ];

  return (
    <div className="container mt-5">
      <h1 className="card-title">Latest Blogs</h1>
      <br />
      <div className="row">
        {blogContentData.map((blog, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100"> {/* Set a fixed height for the card */}
              <img src={blog.image} className="card-img-top" alt={`Blog Post ${index + 1}`} />
              <div className="card-body d-flex flex-column"> {/* Use flex-column to make text and button aligned */}
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.text}</p>
                <button className="btn  mt-auto btn-fixed-size" style={{backgroundColor: '#E97451' , color: 'white'}}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog_contents;

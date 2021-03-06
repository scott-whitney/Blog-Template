import React from 'react';
import { Link } from 'react-router-dom';
import BlogCardBoot from '../BlogCardBoot'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../../assets/css/style.css';

const RenderBlogList = props => {
  const renderBlogListItems = () => {
    if (props.items.length === 0) {
      return <h1>No blogs yet</h1>;
    } else {
      return props.items.map(blog => {
        return (
          <div className='blogDiv' key={blog.id}>
            <BlogCardBoot
              author={blog.author}
              content={blog.content}
              handleDelete={props.handleDelete}
              id={blog.id}
              updateBlogs={props.updateBlogs}
            />
          </div>
        )
      });
    }
  }
  return (
    <Container fluid className='cardLayout'>
      <Row>
        <Col className='blogContainer card-deck' span={9} offset={1}>
          {renderBlogListItems()}
        </Col>
      </Row>
    </Container>
  );
};

export default RenderBlogList;

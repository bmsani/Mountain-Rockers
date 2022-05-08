import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div style={{paddingBottom: '80px'}} className='container'>
            <h1 className='text-center text-info py-3'>Frequently asked Question</h1>
            <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <span className='fw-bold'>Difference between javascript and nodejs</span> </Accordion.Header>
                    <Accordion.Body>
                        <span style={{textDecoration: "underline", fontWeight: "bold"}}>javascript: </span>
                        javascript is a programming language it can run in any web browser with it's proper engine. javascript mainly used for clint side work of a web application. <br />
                        <span style={{textDecoration: "underline", fontWeight: "bold"}}>Node js: </span>
                        Node js is an interpreter and environment for javascript and also it has some useful libraries which javascript can use separately. Node js runs only in v8 engine . Nodejs mainly use for backend work.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <span className='fw-bold'>When should you use nodejs and when should you use mongodb?</span> </Accordion.Header>
                    <Accordion.Body>
                        we use nodejs for our websit's backend. To interaction with the server we need to use nodejs because javascript is mainly a clint side programming language nodejs is a interpreter for javascript which helps javascript to communicate with the server. Mongodb is the server where we store our data we can store update and delete our data from the website with the help of mongodb.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <span className='fw-bold'>Differences between sql and nosql databases.</span> </Accordion.Header>
                    <Accordion.Body>
                    <span style={{textDecoration: "underline", fontWeight: "bold"}}>Sql: </span> Sql is relational database management system (RDBMS). Sql databases have fixed predefined schema. sql databases are not suitable for hierarchical data storage it is suitable for complex queries. Sql database is vertically Scalable and it follows acid property. <br />
                    <span style={{textDecoration: "underline", fontWeight: "bold"}}>NoSql: </span> NoSQL database is a non relational database system. It has dynamic schema. NoSQL database are best suitable for hierarchical data storage and it is not so good for complex queries. NoSQL database are horizontally scalable it flows Cap Property. 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </div>
    );
};

export default Blog;
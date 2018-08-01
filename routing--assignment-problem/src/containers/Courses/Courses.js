import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import './Courses.css';

import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    componentDidMount() {
        this.setState(this.state.courses);
    }

    courseSelectHandler = (id) => {
        this.props.history.push(`/courses/${id}`);
    }


    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <Link to={`/courses/${course.id}`} key={course.id}>
                                    <article className="Course" key={course.id} title={course.title}>{course.title}</article>
                                </Link>;
                        } )
                    }
                </section>
                {/*<Route path={this.props.match.url +  '/:id'} exact component={Course} />*/}
                <Route exact path={this.props.match.url +  '/:id'} exact render={(props) => <Course {...props} /> } />

            </div>
        );
    }
}

export default Courses;
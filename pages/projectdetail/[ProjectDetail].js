import React from 'react';
import axios from 'axios';

const singleProject = ({projectDetail}) => {
    console.log(projectDetail)
    return (
        <div>
            <h1>This is project Detail</h1>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const id = context.params.projectDetail;
    const result = await axios.get(`http://localhost:5000/project/${id}`);
    const data = result.data;

    return {
        props: {
            projectDetail: data
        }
    }
}
export default singleProject;
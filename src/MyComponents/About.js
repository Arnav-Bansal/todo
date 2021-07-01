import React from 'react'
import styled from "styled-components"

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 300px;
  height: 300px;
  margin: 40px;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding: 10px
  }
  button {
    background: green;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

function ShowOwnerEducationDetails(props) {
    return (
        <StyledLogin>
        <h2>Name: {props.name}</h2>
        <h2>College: {props.college}</h2>
        <h2>Year: {props.year}</h2>
        <h2>Branch: {props.branch}</h2>
        
      </StyledLogin>
    )
    
}

function ShowOwnerBasicDetails(props) {
    return (
        <StyledLogin>
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        <h1>Socials:</h1>
        <h2><a href={props.linkedin}>LinkedIn</a></h2>
        <h2><a href={props.github}>GitHub</a></h2>
        </StyledLogin>
    )
}

function getOwnerData() {
    return {
        name: "Arnav Bansal",
        age: 21,
        designation: "Developer",
        college: "IIT Ropar",
        year: "4th Year",
        branch: "CSE",
        linkedin: "https://www.linkedin.com/in/arnav-bansal-0211/",
        github: "https://github.com/Arnav-Bansal",
        gender: "Male",
        Hobbies: "Cricket, Books"
    }
}

const HOC = (Component) => {
    let props = getOwnerData()
    return function WrappedComponent() {
      return (
         <>
            <Component {...props} />
         </>
       );
    };
  };

var OwnerBasicDetails = HOC(ShowOwnerEducationDetails);
var OwnerSalaryDetails = HOC(ShowOwnerBasicDetails);

export const About = () => {
    return (
        <div>
            <h1> This is a Todo App for daily use. </h1>
            <br></br>
            <h2>Owner College Details:</h2>
	        <OwnerBasicDetails></OwnerBasicDetails><br></br>
            <h2>Owner Basic Details:</h2>
            <OwnerSalaryDetails></OwnerSalaryDetails>
        </div>
    )
}


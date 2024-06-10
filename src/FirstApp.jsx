import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
/* 
const myName = 'Pedro Quiñones Paternina';
const esposa = 'Sara Londoño';
const persona = {
    name: 'petter',
    username:'petter0915',
    age: 35
} */

export const FirstApp = ({title, subtitle, name}) => {

  return (
    <>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <h4>{name}</h4>

        {/* <p>{myName} & {esposa}</p> */}
        {/*<code>{JSON.stringify(persona)}</code>*/}
    </>
  )
}

FirstApp.defaultProps ={
  name: "PEDRO QUIÑONES PATERNINA",
  subtitle:"Subtitle doesn't exist",
  title: "Title doesn't exist",
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired
}

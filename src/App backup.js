import React from 'react';
import './App.css';
import {myStatementData} from "C:\\Users\\Гаресста\\app2\\src\\my-statement-data"

const Box = (props) =>
    <div className = "box" > {props.value}
      < /div>;

        const BoxGreen = (props) =>
        <div className = "box-green" > {props.value} {' ₽'}
          < /div>;

            const BoxRed = (props) =>
            <div className = "box-red" > {props.value} {' ₽'}
              < /div>;

                function EncodingsSuck(props){
                switch (props.value){
                    case 6:
                      return <Box value = {"Кредит"}/>
                      break;
                  case 7:
                  return <Box value = {"Перевод"}/>
                  break;
                  case 8:
                  return <Box value = {"Магазины"}/>
                  break;
                  case 20:
                  return <Box value = {"Начисление процентов"}/>
                  break;
                  default:
                  return <Box value = {"Ошибка"}/>
                  break;
                }
                }

                function PlusCheck(props){
                  if (props.value >= 0) {
                  return <BoxGreen value = {props.value}/>
                }
                  return <Box value = {" "}/>;
                }

                function MinusCheck(props){
                  if (props.value < 0) {
                  return <BoxRed value = {props.value}/>
                }
                  return <Box value = {" "}/>;
                }


                const Header = () => (
                  <div className="header">
                    <Box value = "Дата" />
                    <Box value = "Время" />
                    <Box value = "Тип" />
                    <Box value = "Приход" />
                    <Box value = "Расход" />
                  </div>
                )


                const Line = (props) => (
                <div className = "line" >
                  <Box value = {myStatementData[props.value].date.split("T")[0].replace("-", ".").replace("-", ".")}/>
                  <Box value = {myStatementData[props.value].date.split("T")[1]}/>
                  <EncodingsSuck value = {myStatementData[props.value].type.length}/>
                  <PlusCheck value = {myStatementData[props.value].amount}/>
                  <MinusCheck value = {myStatementData[props.value].amount}/>
                  < /div>
                    )

                    const App = () => {
                    let content = [];
                    content.push(<Header/>);
                    for (let i = 0; i < myStatementData.length; i++){
                    content.push(<Line key={i} value = {i}/>);
                  }
                    return content;
                  };
                    // ========================================


export default App;

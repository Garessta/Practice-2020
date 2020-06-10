import React from 'react';
import {myStatementData} from '../my-statement-data';

function EncodingsSuck(props){
    switch (props.value){
        case 6:
            return <td> {"Кредит"} </td>
            break;
        case 7:
            return <td>{"Перевод"}</td>
            break;
        case 8:
            return <td>{"Магазины"}</td>
            break;
        case 20:
            return <td>{"Начисление процентов"}</td>
            break;
        default:
            return <td>{"Ошибка"}</td>
            break;
    }
}

export function Table({showDate, showTime, showType, showIncome, showOutcome}) {
    const formatMonth = (month) => month < 10 ? '0' + month : month;
    return (
        <table>
            <tr>
                {showDate && <th>
                    Дата
                </th>}
                {showTime && <th>
                    Время
                </th>}
                {showType && <th>
                    Тип
                </th>}
                {showIncome && <th>
                    Приход
                </th>}
                {showOutcome && <th>
                    Расход
                </th>}
            </tr>
            {myStatementData.map(el => {
                const tableDate = new Date(el.date).getDate() + '.' + formatMonth(new Date(el.date).getMonth() + 1) + '.' + new Date(el.date).getFullYear();
                return (
                    <tr>
                        {showDate && <td>
                            {tableDate}
                        </td>}
                        {showTime && <td>
                            {el.date.split("T")[1]}
                        </td>}
                        {showType && <EncodingsSuck value={el.type.length}>
                        </EncodingsSuck>}
                        {showIncome && <td className={'green'}>
                            {el.amount > 0 ? el.amount.toFixed(2) : ''}
                            {el.amount > 0 ? ' ₽' : '' }
                        </td>}
                        {showOutcome && <td className={'red'}>
                            {el.amount < 0 ? el.amount.toFixed(2) : ''}
                            {el.amount < 0 ? ' ₽' : '' }
                        </td>}
                    </tr>
                )
            })}
        </table>
    );
}
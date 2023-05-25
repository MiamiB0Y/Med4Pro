import DashboardBox from '@/components/DashboardBox';
import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Props = {};

function Row2({}: Props) {
  const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: null
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Bananas', 'Pears', 'Grapes']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
    }]
  };

  return (
    <>
      <DashboardBox bgcolor="black" gridArea="b"></DashboardBox>
      <DashboardBox bgcolor="black" gridArea="b"></DashboardBox>
      <DashboardBox bgcolor="black" gridArea="b">
      <button class="filter-button">Соответствует стандарту ДЗМ</button>
      <button class="filter-button">Соответствует стандарту Минздрава</button>
      <button class="filter-button">Сделаны доп назначения</button>
      <button class="filter-button">Не найден подходящий стандарт</button>
      </DashboardBox>
      <DashboardBox bgcolor="black" gridArea="d"></DashboardBox>
      <DashboardBox bgcolor="black" gridArea="d">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </DashboardBox>
      <DashboardBox bgcolor="black" gridArea="e"></DashboardBox>
      <DashboardBox bgcolor="black" gridArea="e"><button class="download-button">Сохранить файл
  </button></DashboardBox>
    </>
  );
}

export default Row2;

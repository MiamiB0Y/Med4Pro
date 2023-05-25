import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import React, { useState } from 'react'
import Upload from '@/components/upload.png'

type Props = {}



const Row1 = (props: Props) => {
  const [hideNonStandard, setHideNonStandard] = useState(false);
  const handleCheckboxChange = (event) => {
    setHideNonStandard(event.target.checked);
  };
    const { data } = useGetKpisQuery();
    const [drag, setDrag] = useState(false)
    function dragStartHandler(e) {
      e.preventDefault()
      setDrag(true)
    }

    function dragLeaveHandler(e) {
      e.preventDefault()
      setDrag(false)
    }

    function onDropHandler(e) {
      e.preventDefault()
      let files = [...e.dataTransfer.files]
      const formData = new FormData()
      formData.append('file', files[0])
      /* axios.post('url', formData) */
      console.log(files)
      setDrag(false)
    }
  return (
    <>
<DashboardBox bgcolor="black" gridArea="a">
    <div class="selects">
        <div class="date">
        <label for="date">Выбрать даты:</label><br/>
        <input type="date" id="date" name="date" />
      </div>
      <div class="dep">
        <label for="department">Выбрать отделение:</label><br/>
        <select id="department" name="department">
            <option value="department1">Отделение 1</option>
            <option value="department2">Отделение 2</option>
            <option value="department3">Отделение 3</option>
        </select>
      </div>
      <div class="doc">
        <label for="doctor">Выбрать врача:</label><br/>
        <select id="doctor" name="doctor">
            <option value="doctor1">Врач 1</option>
            <option value="doctor2">Врач 2</option>
            <option value="doctor3">Врач 3</option>
        </select>
  </div>
    </div>

  <div class="checkboxes">
    <div class="checkboxesgroup1">
    <label>
        <input type="checkbox"/>
        Скрыть не стандартизированное
    </label>
    <label>
        <input type="checkbox"/>
        Показать соответствующие стандарту
    </label>
    </div>
    <div class="checkboxesgroup2">
    <label>
        <input type="checkbox"/>
        Показать дополнительные значения
    </label>
    <label>
        <input type="checkbox"/>
        Показать частичные значения
    </label>
    </div>
  </div>
  <button class="search-button">Найти</button>
</DashboardBox>


    <DashboardBox bgcolor="black" gridArea="c"></DashboardBox>
    <DashboardBox bgcolor="black" gridArea="c">
      {drag
      ? <div className='drop-area'
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          onDrop={e => onDropHandler(e)}
      >
        <img src={Upload} alt='Upload' className='upload-icon'/>
          <span className='drop-text'>Отпустите файлы, чтобы загрузить их</span>
        </div>
      : <div
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
        className='drop-area'>
          <img src={Upload} alt='Upload' className='upload-icon'/>
          <span className='drop-text'>Добавить файлы</span>
        
          </div>
      }
    </DashboardBox>
    </>
  )
}

export default Row1
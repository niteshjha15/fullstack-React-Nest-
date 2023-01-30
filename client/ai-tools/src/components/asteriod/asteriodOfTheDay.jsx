import { Divider, Drawer } from "@mui/material";
import React, { useEffect } from "react";
import style from "./asteriod.module.css";
import { GiStarSwirl } from "react-icons/gi";
import { CgCalendarDates } from "react-icons/cg";

function AsteriodOfTheDay({ asteriodData}) {
  const { title, explanation, date, hdurl } = asteriodData;
  return (
    <main>
      <section className={style.heading}>
        <div className='d-flex'>
          <h3 className='mx-3'>Explore Space Picture Of The Day</h3>
          <GiStarSwirl size={40} />
        </div>
        <div>
          <CgCalendarDates />
          <small className="mx-2">{date}</small>
        </div>

        <Divider />
      </section>
      <section className={style.desc}>
        <h4>{title}</h4>
        <div className={style.imgWrapper}>
          <img src={hdurl} alt={title} loading='lazy' />
        </div>
        <section className={style.expl}>
          <p>{explanation}</p>
        </section>
      </section>
    </main>
  );
}

export default AsteriodOfTheDay;

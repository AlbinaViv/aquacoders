import s from "./AdvantagesSection.module.css";
import LogOutModal from "..//LogOutModal/LogOutModal.jsx"


const AdvantagesSection = () => {
  return (
    <>
    <LogOutModal/>
    <div className={s.info_container}>
      <ul className={s.info_list}>
        <li className={s.info_item}>
          <p className={`${s.label} ${s.dark}`}>Habit drive</p>
        </li>
        <li className={s.info_item}>
          <p className={`${s.label} ${s.green}`}>View statistics</p>
        </li>
      <li className={s.info_item}>
          <p className={`${s.label} ${s.white}`}>Personal rate setting</p>
      </li>
      </ul>
    </div>
    </>
  );
 
};
export default AdvantagesSection;
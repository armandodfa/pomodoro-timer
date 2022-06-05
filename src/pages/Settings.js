import { useContext } from "react";
import ReactSlider from "react-slider";
import { BackButton } from "../components/BackButton";
import { SettingsContext } from "../components/SettingsContext";
import s from "../components/slider.css";

export const Settings = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <form style={{ textAlign: "left" }}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={s.slider}
        thumbClassName={s.thumb}
        trackClassName={s.track}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        value={settingsInfo.workMinutes}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={s.track}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        value={settingsInfo.breakMinutes}
        min={1}
        max={120}
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </form>
  );
};

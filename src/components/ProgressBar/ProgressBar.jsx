import './style.css'

export function ProgressBar(props) {
  <input type="range" min={0} max={100} value={props.value}/>
}
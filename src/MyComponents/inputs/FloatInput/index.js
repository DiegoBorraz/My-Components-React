import "./index.css";

export default function FloatInput(props) {

  return (
      <div class="floating">
        <input {...props} class="floating__input"  placeholder={props.label} />
        <label  class="floating__label" data-content={props.label}>
          <span class="hidden--visually">
            {props.label} 
          </span>
        </label>
      </div>
  );
}

import {render} from "./utils/render";
import {Button} from './components/Button';
import {registerComponent} from "./utils/registerComponent";
import {BackButton} from "./components/BackButton";
import {Input} from "./components/Input";
import {Label} from "./components/Label";

registerComponent('Button', Button);
registerComponent('BackButton', BackButton);
registerComponent('Input', Input);
registerComponent('Label', Label);

window.addEventListener('DOMContentLoaded', () => {
  render('home')
});

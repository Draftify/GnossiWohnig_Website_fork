import { useTheme } from "styled-components";
import Switch from "react-switch";

const SwitchButton = ({ checked, onChange }, props) => {
  const theme = useTheme();
  return (
    <label>
      <span>Switch</span>
      <Switch
        onColor={theme.colors.primary}
        offColor={theme.colors.middlegrey}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange}
        checked={checked}
        width={props.width || 40}
        height={props.height || 20}
        handleDiameter={props.handleSize || 18}
      />
    </label>
  );
};

export default SwitchButton;
